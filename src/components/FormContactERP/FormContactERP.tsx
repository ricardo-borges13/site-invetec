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
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success('Diagnóstico enviado com sucesso! (MODO TESTE)');
    reset();
  };

  const onSubmitReal = async (data: FormInputs) => {
    try {
      const response = await fetch('https://formspree.io/f/xaqdqqnk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Recebido! Vou analisar e te retornar em breve 🚀');
        reset();
      } else {
        toast.error('Erro ao enviar. Tente novamente.');
      }
    } catch {
      toast.error('Erro de conexão.');
    }
  };

  const isDev = import.meta.env.DEV;
  const submitHandler = isDev ? onSubmitMock : onSubmitReal;

  return (
    <S.FormContainer>
      <Toaster />

      <p>🔒 Leva menos de 1 minuto. Eu analiso seu cenário e te retorno com a melhor solução.</p>

      <form onSubmit={handleSubmit(submitHandler)}>
        {/* Nome + Empresa */}
        <S.FieldGroup>
          <div>
            <label>Nome *</label>
            <S.Input {...register('nome', { required: true })} />
          </div>

          <div>
            <label>Empresa *</label>
            <S.Input {...register('empresa', { required: true })} />
          </div>
        </S.FieldGroup>

        {/* Email + Telefone */}
        <S.FieldGroup>
          <div>
            <label>E-mail *</label>
            <S.Input type="email" {...register('email', { required: true })} />
          </div>

          <div>
            <label>Telefone *</label>
            <S.Input {...register('telefone', { required: true })} />
          </div>
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
