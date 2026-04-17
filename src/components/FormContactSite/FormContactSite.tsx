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

  const onSubmitMock = async (_data: FormInputs) => {
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
          { duration: 5000 }
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
        Leva menos de 1 minuto. Com essas informacoes, consigo entender melhor
        o perfil do seu projeto e te retornar com uma proposta mais alinhada.
      </S.IntroText>

      <form onSubmit={handleSubmit(submitHandler)}>
        <S.FieldGroup>
          <S.Field>
            <label>Nome *</label>
            <S.Input
              placeholder="Nome"
              {...register('nome', { required: 'O nome e obrigatorio.' })}
            />
            {errors.nome && (
              <S.ErrorMessage>{errors.nome.message}</S.ErrorMessage>
            )}
          </S.Field>

          <S.Field>
            <label>Empresa *</label>
            <S.Input
              placeholder="Empresa"
              {...register('empresa', { required: 'A empresa e obrigatoria.' })}
            />
            {errors.empresa && (
              <S.ErrorMessage>{errors.empresa.message}</S.ErrorMessage>
            )}
          </S.Field>
        </S.FieldGroup>

        <S.FieldGroup>
          <S.Field>
            <label>Telefone *</label>
            <S.Input
              placeholder="Telefone"
              {...register('telefone', { required: 'O telefone e obrigatorio.' })}
            />
            {errors.telefone && (
              <S.ErrorMessage>{errors.telefone.message}</S.ErrorMessage>
            )}
          </S.Field>

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
        </S.FieldGroup>

        <S.Field>
          <label>Qual o objetivo principal do site?</label>
          <S.Select {...register('objetivo')}>
            <option>Selecione uma opcao</option>
            <option>Gerar contatos</option>
            <option>Apresentar a empresa</option>
            <option>Mostrar portfolio ou servicos</option>
            <option>Fortalecer a marca</option>
            <option>Ainda estou definindo</option>
          </S.Select>
        </S.Field>

        <S.Field>
          <label>Tem alguma referencia?</label>
          <S.TextArea
            rows={3}
            placeholder="Pode ser um site que voce goste, um concorrente ou alguma ideia de estrutura."
            {...register('referencia')}
          />
        </S.Field>

        <S.Field>
          <label>Como voce imagina o site ideal para sua empresa?</label>
          <S.TextArea
            rows={4}
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
            <S.ErrorMessage>{errors.descricao.message}</S.ErrorMessage>
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
