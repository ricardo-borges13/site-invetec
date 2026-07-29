import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { CustomButton } from '../CustomButton/CustomButton';
import * as S from './FormContactSite.styles';

type FormInputs = {
  nome: string;
  empresa: string;
  telefone: string;
  email: string;
  objetivo: string;
  referencia: string;
  descricao: string;
};

export const FormContactSite = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>();

  const onSubmitMock = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Solicitacao enviada com sucesso! (MODO TESTE)', {
        duration: 9000,
      });
      reset();
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
        Leva menos de 1 minuto. Com essas informacoes, consigo entender melhor o
        perfil do seu projeto e te retornar com uma proposta mais alinhada.
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
              {...register('nome', { required: 'O nome e obrigatorio.' })}
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
              {...register('empresa', { required: 'A empresa e obrigatoria.' })}
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
                required: 'O telefone e obrigatorio.',
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
                required: 'O e-mail e obrigatorio.',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'E-mail invalido.',
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

        <S.Field>
          <label htmlFor="site-objetivo">Qual o objetivo principal do site?</label>
          <S.Select id="site-objetivo" {...register('objetivo')}>
            <option>Selecione uma opcao</option>
            <option>Gerar contatos</option>
            <option>Apresentar a empresa</option>
            <option>Mostrar portfolio ou servicos</option>
            <option>Fortalecer a marca</option>
            <option>Ainda estou definindo</option>
          </S.Select>
        </S.Field>

        <S.Field>
          <label htmlFor="site-referencia">Tem alguma referencia?</label>
          <S.TextArea
            id="site-referencia"
            rows={3}
            placeholder="Pode ser um site que voce goste, um concorrente ou alguma ideia de estrutura."
            {...register('referencia')}
          />
        </S.Field>

        <S.Field>
          <label htmlFor="site-descricao">Como voce imagina o site ideal para sua empresa?</label>
          <S.TextArea
            id="site-descricao"
            rows={4}
            aria-required="true"
            aria-invalid={Boolean(errors.descricao)}
            aria-describedby={errors.descricao ? 'site-descricao-erro' : undefined}
            placeholder="Ex: quero um site mais profissional, que explique melhor meus servicos e gere mais contatos."
            {...register('descricao', {
              required: 'Descreva brevemente o que voce precisa.',
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

        <S.SubmitRow>
          <CustomButton
            variant="cta"
            type="submit"
            disabled={isSubmitting}
            loading={isSubmitting}
          >
            Receber orcamento agora
          </CustomButton>
        </S.SubmitRow>
      </form>
    </S.FormContainer>
  );
};
