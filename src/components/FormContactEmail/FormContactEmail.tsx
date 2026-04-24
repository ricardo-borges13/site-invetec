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
  prioridade: string;
};

export const FormContactEmail = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>();

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
          'Perfeito. Já entendi seu cenário. Vou te orientar com a melhor solução para sua empresa em breve.',
          {
            duration: 5000,
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

      <S.IntroText>
        Seus dados estão seguros e serão usados apenas para retorno. Vou
        analisar seu cenário e te orientar com a melhor solução.
      </S.IntroText>

      <form onSubmit={handleSubmit(submitHandler)}>
        <S.FieldGroup>
          <S.Field>
            <label>Nome *</label>
            <S.Input
              placeholder="Seu nome"
              {...register('nome', { required: 'O nome e obrigatorio.' })}
            />
            {errors.nome && (
              <S.ErrorMessage>{errors.nome.message}</S.ErrorMessage>
            )}
          </S.Field>

          <S.Field>
            <label>Empresa *</label>
            <S.Input
              placeholder="Nome da empresa"
              {...register('empresa', { required: 'A empresa e obrigatoria.' })}
            />
            {errors.empresa && (
              <S.ErrorMessage>{errors.empresa.message}</S.ErrorMessage>
            )}
          </S.Field>
        </S.FieldGroup>

        <S.FieldGroup>
          <S.Field>
            <label>E-mail *</label>
            <S.Input
              placeholder="E-mail"
              type="email"
              {...register('email', {
                required: 'O e-mail e obrigatorio.',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'E-mail invalido.',
                },
              })}
            />
            {errors.email && (
              <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
            )}
          </S.Field>

          <S.Field>
            <label>Telefone (WhatsApp)</label>
            <S.Input
              placeholder="Telefone"
              {...register('telefone', { required: false })}
            />
          </S.Field>
        </S.FieldGroup>

        <S.Field>
          <label>Quantas contas de e-mail sua empresa utiliza hoje?</label>
          <S.Select {...register('quantidade')}>
            <option>Ate 5</option>
            <option>6 a 10</option>
            <option>11 a 20</option>
            <option>21 a 50</option>
            <option>Mais de 50</option>
          </S.Select>
        </S.Field>

        <S.Field>
          <label>Como é o e-mail da sua empresa hoje?</label>
          <S.Select {...register('situacao', { required: true })}>
            <option>Selecione uma opção</option>
            <option>Nao tenho e-mail</option>
            <option>Outlook sincronizado</option>
            <option>Google Workspace / Microsoft</option>
            <option>Gmail gratuito</option>
            <option>e-mail de hospedagem (tipo Locaweb)</option>
            <option>Outro</option>
          </S.Select>
        </S.Field>

        <S.Field>
          <label>Precisa migrar e-mails antigos?</label>
          <S.Select {...register('migracao', { required: true })}>
            <option value="">Selecione uma opcao</option>
            <option>Sim</option>
            <option>Nao</option>
            <option>Nao sei</option>
          </S.Select>
        </S.Field>

        <S.Field>
          <label>Quando você precisa resolver isso?</label>
          <S.Select {...register('prioridade', { required: true })}>
            <option value="">Selecione uma opcao</option>
            <option>Urgente (essa semana)</option>
            <option>Em breve</option>
            <option>Só estou pesquisando</option>
          </S.Select>
        </S.Field>

        <S.Field>
          <label>O que você quer resolver no seu e-mail?</label>
          <S.TextArea
            rows={3}
            placeholder="Ex: perda de e-mails, lentidão, falta de organização ou melhorar controle da equipe..."
            {...register('problema')}
          />
        </S.Field>

        <S.SubmitRow>
          <CustomButton type="submit" variant="cta" disabled={isSubmitting}>
            Quero uma solução para meu e-mail
          </CustomButton>
        </S.SubmitRow>
      </form>
    </S.FormContainer>
  );
};
