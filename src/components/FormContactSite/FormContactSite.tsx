import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { CustomButton } from '../CustomButton/CustomButton';
import { PrivacyNotice } from '../PrivacyNotice/PrivacyNotice';
import * as S from './FormContactSite.styles';

type FormInputs = {
  nome: string;
  empresa: string;
  telefone: string;
  email: string;
  objetivo: string;
  hasWebsite: string;
  websiteUrl?: string;
  referencia: string;
  descricao: string;
};

const normalizeWebsiteUrl = (value?: string) => {
  const trimmedValue = value?.trim() ?? '';

  if (!trimmedValue || /^https?:\/\//i.test(trimmedValue)) {
    return trimmedValue;
  }

  return `https://${trimmedValue}`;
};

export const FormContactSite = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>({ shouldUnregister: true });

  const [hasWebsite, setHasWebsite] = useState('');

  const onSubmitMock = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Solicitacao enviada com sucesso! (MODO TESTE)', {
        duration: 9000,
      });
      reset();
      setHasWebsite('');
    } catch {
      toast.error('Erro ao enviar (MODO TESTE).', { duration: 4000 });
    }
  };

  const onSubmitReal = async (data: FormInputs) => {
    try {
      const response = await fetch('https://formspree.io/f/xgorezvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          origem: 'site-criacao-de-sites',
        }),
      });

      if (response.ok) {
        toast.success(
          'Recebido! Vou analisar seu projeto e entrar em contato.',
          { duration: 4000 }
        );
        reset();
        setHasWebsite('');
      } else {
        toast.error('Erro ao enviar. Tente novamente.', { duration: 4000 });
      }
    } catch (error) {
      toast.error('Erro de conexao. Tente novamente mais tarde.', {
        duration: 4000,
      });
      console.error(error);
    }
  };

  const isDev = import.meta.env.DEV;
  const submitHandler = isDev ? onSubmitMock : onSubmitReal;

  return (
    <S.FormContainer>
      <Toaster
        containerStyle={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          position: 'fixed',
          zIndex: 9999,
        }}
        toastOptions={{
          style: {
            background: '#2a2a2a',
            color: '#fff',
            fontSize: '16px',
            padding: '16px 24px',
            borderRadius: '12px',
            maxWidth: '400px',
            textAlign: 'center',
          },
        }}
      />

      <S.IntroText>
        Leva menos de 1 minuto. Com essas informações, conseguimos entender
        melhor o perfil do seu projeto e retornar com uma proposta mais
        alinhada.
      </S.IntroText>

      <form onSubmit={handleSubmit(submitHandler)}>
        <S.FieldGroup>
          <S.Field>
            <label htmlFor="site-nome">Nome *</label>
            <S.Input
              id="site-nome"
              placeholder="Nome"
              aria-required="true"
              aria-invalid={Boolean(errors.nome)}
              aria-describedby={errors.nome ? 'site-nome-erro' : undefined}
              {...register('nome', { required: 'O nome e obrigatório.' })}
            />
            {errors.nome && (
              <S.ErrorMessage id="site-nome-erro" role="alert">
                {errors.nome.message}
              </S.ErrorMessage>
            )}
          </S.Field>

          <S.Field>
            <label htmlFor="site-empresa">Empresa *</label>
            <S.Input
              id="site-empresa"
              placeholder="Empresa"
              aria-required="true"
              aria-invalid={Boolean(errors.empresa)}
              aria-describedby={errors.empresa ? 'site-empresa-erro' : undefined}
              {...register('empresa', { required: 'A empresa e obrigatória.' })}
            />
            {errors.empresa && (
              <S.ErrorMessage id="site-empresa-erro" role="alert">
                {errors.empresa.message}
              </S.ErrorMessage>
            )}
          </S.Field>
        </S.FieldGroup>

        <S.FieldGroup>
          <S.Field>
            <label htmlFor="site-telefone">Telefone *</label>
            <S.Input
              id="site-telefone"
              placeholder="Telefone"
              aria-required="true"
              aria-invalid={Boolean(errors.telefone)}
              aria-describedby={errors.telefone ? 'site-telefone-erro' : undefined}
              {...register('telefone', {
                required: 'O telefone e obrigatório.',
              })}
            />
            {errors.telefone && (
              <S.ErrorMessage id="site-telefone-erro" role="alert">
                {errors.telefone.message}
              </S.ErrorMessage>
            )}
          </S.Field>

          <S.Field>
            <label htmlFor="site-email">E-mail *</label>
            <S.Input
              id="site-email"
              placeholder="E-mail"
              type="email"
              aria-required="true"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'site-email-erro' : undefined}
              {...register('email', {
                required: 'O e-mail e obrigatório.',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'E-mail inválido.',
                },
              })}
            />
            {errors.email && (
              <S.ErrorMessage id="site-email-erro" role="alert">
                {errors.email.message}
              </S.ErrorMessage>
            )}
          </S.Field>
        </S.FieldGroup>

        <S.FieldGroup>
          <S.Field>
            <label htmlFor="site-objetivo">Qual o objetivo principal do site?</label>
            <S.Select id="site-objetivo" {...register('objetivo')}>
              <option>Selecione uma opção</option>
              <option>Gerar contatos</option>
              <option>Apresentar a empresa</option>
              <option>Mostrar portfólio ou serviços</option>
              <option>Fortalecer a marca</option>
              <option>Ainda estou definindo</option>
            </S.Select>
          </S.Field>

          <S.Field>
            <label htmlFor="site-has-website">Sua empresa já possui um site?</label>
            <S.Select
              id="site-has-website"
              {...register('hasWebsite', {
                onChange: event => {
                  setHasWebsite(event.target.value);

                  if (event.target.value !== 'sim') {
                    setValue('websiteUrl', '');
                  }
                },
              })}
            >
              <option value="">Selecione uma opção</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
              <option value="em-desenvolvimento">Está em desenvolvimento</option>
            </S.Select>
          </S.Field>
        </S.FieldGroup>

        {hasWebsite === 'sim' && (
          <S.Field>
            <label htmlFor="site-website-url">Qual é o endereço do site atual?</label>
            <S.Input
              id="site-website-url"
              type="text"
              inputMode="url"
              placeholder="https://www.suaempresa.com.br"
              aria-required="true"
              aria-invalid={Boolean(errors.websiteUrl)}
              aria-describedby={errors.websiteUrl ? 'site-website-url-erro' : 'site-website-url-ajuda'}
              {...register('websiteUrl', {
                required: 'Informe o endereço do site atual.',
                setValueAs: normalizeWebsiteUrl,
                validate: value => {
                  try {
                    new URL(normalizeWebsiteUrl(value));
                    return true;
                  } catch {
                    return 'Informe um endereço de site válido.';
                  }
                },
              })}
            />
            <S.HelperText id="site-website-url-ajuda">
              Usaremos esse endereço apenas para entender melhor a estrutura atual da empresa.
            </S.HelperText>
            {errors.websiteUrl && (
              <S.ErrorMessage id="site-website-url-erro" role="alert">
                {errors.websiteUrl.message}
              </S.ErrorMessage>
            )}
          </S.Field>
        )}

        <S.Field>
          <label htmlFor="site-referencia">Tem alguma referência?</label>
          <S.TextArea
            id="site-referencia"
            rows={2}
            placeholder="Pode ser um site que você goste, um concorrente ou alguma ideia de estrutura."
            {...register('referencia')}
          />
        </S.Field>

        <S.Field>
          <label htmlFor="site-descricao">Como você imagina o site ideal para sua empresa?</label>
          <S.TextArea
            id="site-descricao"
            rows={3}
            aria-required="true"
            aria-invalid={Boolean(errors.descricao)}
            aria-describedby={errors.descricao ? 'site-descricao-erro' : undefined}
            placeholder="Ex: quero um site mais profissional, que explique melhor meus serviços e gere mais contatos."
            {...register('descricao', {
              required: 'Descreva brevemente o que você precisa.',
              minLength: {
                value: 8,
                message: 'Escreva pelo menos 8 caracteres.',
              },
            })}
          />
          {errors.descricao && (
              <S.ErrorMessage id="site-descricao-erro" role="alert">
                {errors.descricao.message}
              </S.ErrorMessage>
          )}
        </S.Field>

        <PrivacyNotice  />
        <S.SubmitRow>
          <CustomButton
            variant="cta"
            type="submit"
            disabled={isSubmitting}
            loading={isSubmitting}
          >
            Solicitar análise e orçamento
          </CustomButton>
        </S.SubmitRow>
      </form>
    </S.FormContainer>
  );
};
