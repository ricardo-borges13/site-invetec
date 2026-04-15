import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import * as S from './FormContactERP.styles';

type FormInputs = {
  nome: string;
  empresa: string;
  telefone: string;
  email: string;
  faturamento: string;
  funcionarios: string;
  possuiERP: string;
  dificuldade: string;
};

export const FormContactERP = () => {
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
      const response = await fetch('https://formspree.io/f/xojyvlrk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success(
          'Mensagem enviada com sucesso! Em breve entraremos em contato.',
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

      <p>
        🔒 Leva menos de 1 minuto. Eu analiso seu cenário e te retorno com a
        melhor solução.
      </p>

      <form onSubmit={handleSubmit(submitHandler)}>
        {/* Nome + Empresa */}
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

        {/* Email + Telefone */}
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
            <label>Telefone</label>
            <S.Input
              placeholder="Telefone"
              {...register('telefone', { required: false })}
            />
          </S.Field>
        </S.FieldGroup>

        {/* Faturamento */}
        <S.Field>
          <label>Faturamento mensal</label>
          <S.Select {...register('faturamento')}>
            <option>Selecione</option>
            <option>Até R$100k</option>
            <option>R$100k a R$500k</option>
            <option>R$500k a R$1M</option>
            <option>Acima de R$1M</option>
          </S.Select>
        </S.Field>

        {/* Funcionários */}
        <S.Field>
          <label>Número de funcionários</label>
          <S.Select {...register('funcionarios')}>
            <option>Selecione</option>
            <option>Até 5</option>
            <option>6 a 20</option>
            <option>21 a 50</option>
            <option>+50</option>
          </S.Select>
        </S.Field>

        {/* Possui ERP */}
        <S.Field>
          <label>Possui ERP atualmente?</label>
          <S.Select {...register('possuiERP')}>
            <option>Selecione</option>
            <option>Sim</option>
            <option>Não</option>
          </S.Select>
        </S.Field>

        {/* Dificuldade */}
        <S.Field>
          <label>Qual seu objetivo com o ERP?</label>
          <S.TextArea
            rows={3}
            placeholder="Ex: organizar financeiro, controlar estoque, faturamento, integrar setores..."
            {...register('dificuldade')}
          />
        </S.Field>

        <CustomButton
          variant="cta"
          type="submit"
          disabled={isSubmitting}
          loading={isSubmitting}
        >
          Solicitar diagnóstico gratuito
        </CustomButton>
      </form>
    </S.FormContainer>
  );
};
