import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { CustomButton } from '../CustomButton/CustomButton';
import { PrivacyNotice } from '../PrivacyNotice/PrivacyNotice';
import * as S from './FormContactEmail.styles';

type FormInputs = {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  quantidade: string;
  situacao: string;
  problema: string;
};

export const FormContactEmail = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>({ shouldFocusError: true });

  const onSubmitMock = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Perfeito! Em breve vou te orientar com a melhor solução.', {
        duration: 9000,
      });
      reset();
    } catch {
      toast.error('Erro ao enviar (MODO TESTE).', { duration: 4000 });
    }
  };

  const onSubmitReal = async (data: FormInputs) => {
    try {
      const response = await fetch('https://formspree.io/f/xpqkzqaz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success(
            'Perfeito! Em breve vou te orientar com a melhor solução.',
          {
            duration: 4000,
          }
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

      <form onSubmit={handleSubmit(submitHandler)}>
        <S.FieldGroup>
          <S.Field>
            <label htmlFor="email-nome">Nome *</label>
            <S.Input
              id="email-nome"
              placeholder="Seu nome"
              autoComplete="name"
              aria-required="true"
              aria-invalid={Boolean(errors.nome)}
              aria-describedby={errors.nome ? 'email-nome-erro' : undefined}
              {...register('nome', { required: 'O nome e obrigatorio.' })}
            />
            {errors.nome && (
              <S.ErrorMessage id="email-nome-erro" role="alert">
                {errors.nome.message}
              </S.ErrorMessage>
            )}
          </S.Field>

          <S.Field>
            <label htmlFor="email-empresa">Empresa *</label>
            <S.Input
              id="email-empresa"
              placeholder="Nome da empresa"
              autoComplete="organization"
              aria-required="true"
              aria-invalid={Boolean(errors.empresa)}
              aria-describedby={errors.empresa ? 'email-empresa-erro' : undefined}
              {...register('empresa', { required: 'A empresa e obrigatoria.' })}
            />
            {errors.empresa && (
              <S.ErrorMessage id="email-empresa-erro" role="alert">
                {errors.empresa.message}
              </S.ErrorMessage>
            )}
          </S.Field>
        </S.FieldGroup>

        <S.FieldGroup>
          <S.Field>
            <label htmlFor="email-email">E-mail *</label>
            <S.Input
              id="email-email"
              placeholder="E-mail"
              type="email"
              autoComplete="email"
              inputMode="email"
              aria-required="true"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-email-erro' : undefined}
              {...register('email', {
                required: 'O e-mail e obrigatorio.',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'E-mail invalido.',
                },
              })}
            />
            {errors.email && (
              <S.ErrorMessage id="email-email-erro" role="alert">
                {errors.email.message}
              </S.ErrorMessage>
            )}
          </S.Field>

          <S.Field>
            <label htmlFor="email-telefone">Telefone (WhatsApp)</label>
            <S.Input
              id="email-telefone"
              placeholder="Telefone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              {...register('telefone', { required: false })}
            />
          </S.Field>
        </S.FieldGroup>

        <S.FieldGroup>
          <S.Field>
            <label htmlFor="email-quantidade">
              Quantas contas de e-mail sua empresa utiliza hoje?
            </label>
            <S.Select id="email-quantidade" {...register('quantidade')}>
              <option value="">Selecione uma opção</option>
              <option>Até 5</option>
              <option>6 a 10</option>
              <option>11 a 20</option>
              <option>21 a 50</option>
              <option>Mais de 50</option>
            </S.Select>
          </S.Field>

          <S.Field>
            <label htmlFor="email-situacao">
              Como é o e-mail da sua empresa hoje?
            </label>
            <S.Select id="email-situacao" {...register('situacao')}>
              <option value="">Selecione uma opção</option>
              <option>Não tenho e-mail</option>
              <option>Outlook sincronizado</option>
              <option>Google Workspace / Microsoft</option>
              <option>Gmail gratuito</option>
              <option>E-mail de hospedagem (tipo Locaweb)</option>
              <option>Outro</option>
            </S.Select>
          </S.Field>
        </S.FieldGroup>

        <S.Field>
          <label htmlFor="email-problema">
            O que sua empresa precisa melhorar no e-mail?
          </label>
          <S.TextArea
            id="email-problema"
            rows={3}
            placeholder="Ex.: migração, lentidão, organização, segurança ou suporte aos usuários."
            {...register('problema')}
          />
        </S.Field>

        <PrivacyNotice />
        <S.SubmitRow>
          <CustomButton type="submit" variant="cta" disabled={isSubmitting}>
            {isSubmitting
              ? 'Enviando análise...'
              : 'Solicitar análise do meu cenário'}
          </CustomButton>
        </S.SubmitRow>
      </form>
    </S.FormContainer>
  );
};
