import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import * as S from './FormContact.styles';

type FormInputs = {
  nome: string;
  empresa: string;
  telefone?: string;
  email: string;
  assunto?: string;
  mensagem: string;
};

export const FormContact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>();

  // Toast de teste (simulação)
  const onSubmitMock = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Mensagem enviada com sucesso! (MODO TESTE)', {
        duration: 9000,
      });
      reset();
    } catch {
      toast.error('Erro ao enviar (MODO TESTE).', { duration: 4000 });
    }
  };

  const onSubmitReal = async (data: FormInputs) => {
    try {
      const response = await fetch('https://formspree.io/f/xqewkarw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success(
          'Mensagem enviada com sucesso! 🎉 Em breve entraremos em contato',
          { duration: 5000 }
        );
        reset();
      } else {
        toast.error('Erro ao enviar. Tente novamente.', { duration: 4000 });
      }
    } catch (error) {
      toast.error('Erro de conexão. Tente novamente mais tarde.', {
        duration: 4000,
      });
      console.error(error);
    }
  };

  //Verifica qual ambiente o código está rodando (teste ou produção)
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
      <p>🔒 Seus dados estão seguros e não serão compartilhados.</p>
      <form onSubmit={handleSubmit(submitHandler)}>
        <S.FieldGroup>
          <div style={{ flex: 1 }}>
            <label htmlFor="contato-nome">Nome *</label>
            <S.Input
              id="contato-nome"
              placeholder="Nome"
              aria-required="true"
              aria-invalid={Boolean(errors.nome)}
              aria-describedby={errors.nome ? 'contato-nome-erro' : undefined}
              {...register('nome', { required: 'O nome é obrigatório.' })}
            />
            {errors.nome && (
              <S.ErrorMessage id="contato-nome-erro" role="alert">
                {errors.nome.message}
              </S.ErrorMessage>
            )}
          </div>

          <div style={{ flex: 1 }}>
            <label htmlFor="contato-empresa">* Empresa</label>
            <S.Input
              id="contato-empresa"
              placeholder="Empresa"
              aria-required="true"
              aria-invalid={Boolean(errors.empresa)}
              aria-describedby={errors.empresa ? 'contato-empresa-erro' : undefined}
              {...register('empresa', { required: 'A empresa é obrigatória.' })}
            />
            {errors.empresa && (
              <S.ErrorMessage id="contato-empresa-erro" role="alert">
                {errors.empresa.message}
              </S.ErrorMessage>
            )}
          </div>
        </S.FieldGroup>

        {/* Telefone e Email */}
        <S.FieldGroup>
          <div style={{ flex: 1 }}>
            <label htmlFor="contato-telefone">Telefone</label>
            <S.Input
              id="contato-telefone"
              placeholder="Telefone"
              {...register('telefone')}
            />
          </div>

          <div style={{ flex: 1 }}>
            <label htmlFor="contato-email">E-mail *</label>
            <S.Input
              id="contato-email"
              placeholder="E-mail"
              type="email"
              aria-required="true"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'contato-email-erro' : undefined}
              {...register('email', {
                required: 'O e-mail é obrigatório.',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'E-mail inválido.',
                },
              })}
            />
            {errors.email && (
              <S.ErrorMessage id="contato-email-erro" role="alert">
                {errors.email.message}
              </S.ErrorMessage>
            )}
          </div>
        </S.FieldGroup>

        {/* Assunto */}
        <S.Assunto>
          <label htmlFor="contato-assunto">Assunto *</label>
          <S.Input
            id="contato-assunto"
            placeholder="Assunto"
            aria-required="true"
            aria-invalid={Boolean(errors.assunto)}
            aria-describedby={errors.assunto ? 'contato-assunto-erro' : undefined}
            {...register('assunto', { required: 'O Assunto é obrigatório' })}
          />
          {errors.assunto && (
            <S.ErrorMessage id="contato-assunto-erro" role="alert">
              {errors.assunto.message}
            </S.ErrorMessage>
          )}
        </S.Assunto>

        {/* Mensagem */}
        <S.Mensagem>
          <label htmlFor="contato-mensagem">Mensagem *</label>
          <S.TextArea
            id="contato-mensagem"
            placeholder="Mensagem"
            rows={4}
            aria-required="true"
            aria-invalid={Boolean(errors.mensagem)}
            aria-describedby={errors.mensagem ? 'contato-mensagem-erro' : undefined}
            {...register('mensagem', {
              required: 'A mensagem é obrigatória.',
              minLength: {
                value: 5,
                message: 'A mensagem deve ter pelo menos 5 caracteres.',
              },
            })}
          />
          {errors.mensagem && (
            <S.ErrorMessage id="contato-mensagem-erro" role="alert">
              {errors.mensagem.message}
            </S.ErrorMessage>
          )}
        </S.Mensagem>

        <CustomButton
          text="Enviar Mensagem"
          variant="cta"
          type="submit"
          disabled={isSubmitting}
          loading={isSubmitting}
        />
      </form>
    </S.FormContainer>
  );
};
