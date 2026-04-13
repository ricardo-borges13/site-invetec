import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { CustomButton } from '../CustomButton/CustomButton';
import * as S from './FormContactEmail.styles';

type FormInputs = {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  quantidade: string;
  situacao: string;
  migracao: string;
  problema: string;
};

export const FormContactEmail = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>();

  // Toast de teste (simulação)
  const onSubmitMock = async (_data: FormInputs) => {
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
      const response = await fetch('https://formspree.io/f/xpqkzqaz', {
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
            <label>Nome *</label>
            <S.Input
              placeholder="Nome"
              {...register('nome', { required: 'O nome é obrigatório.' })}
            />
            {errors.nome && (
              <S.ErrorMessage>{errors.nome.message}</S.ErrorMessage>
            )}
          </div>

          <div style={{ flex: 1 }}>
            <label>* Empresa</label>
            <S.Input
              placeholder="Empresa"
              {...register('empresa', { required: 'A empresa é obrigatória.' })}
            />
            {errors.nome && (
              <S.ErrorMessage>{errors.nome.message}</S.ErrorMessage>
            )}
          </div>
        </S.FieldGroup>

        <S.FieldGroup>
          <div style={{ flex: 1 }}>
            <label>E-mail *</label>
            <S.Input
              placeholder="E-mail"
              type="email"
              {...register('email', {
                required: 'O e-mail é obrigatório.',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'E-mail inválido.',
                },
              })}
            />
            {errors.email && (
              <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
            )}
          </div>

          <div>
            <label>Telefone </label>
            <S.Input {...register('telefone', { required: false })} />
          </div>
        </S.FieldGroup>

        <div>
          <label>Quantas contas de e-mail?</label>
          <S.Select {...register('quantidade')}>
            <option>Até 5</option>
            <option>6 a 10</option>
            <option>11 a 20</option>
            <option>21 a 50</option>
            <option>Mais de 50</option>
          </S.Select>
        </div>

        <div>
          <label>Como funciona hoje?</label>
          <S.Select {...register('situacao')}>
            <option>Selecione uma opção</option>
            <option>Não tenho e-mail</option>
            <option>Outlook com dados no computador</option>
            <option>Outlook sincronizado (IMAP)</option>
            <option>Google Workspace / Microsoft</option>
            <option>Gmail gratuito</option>
            <option>Outro</option>
          </S.Select>
        </div>

        <div>
          <label>Precisa migrar e-mails antigos?</label>
          <S.Select {...register('migracao')}>
            <option>Selecione uma opção</option>
            <option>Sim</option>
            <option>Não</option>
            <option>Não sei</option>
          </S.Select>
        </div>

        <div>
          <label>Principal dificuldade</label>
          <S.TextArea
            rows={3}
            placeholder="Ex: perda de e-mails, lentidão, backup..."
            {...register('problema')}
          />
        </div>

        <CustomButton type="submit" variant="cta" disabled={isSubmitting}>
          Quero melhorar meu e-mail
        </CustomButton>
      </form>
    </S.FormContainer>
  );
};
