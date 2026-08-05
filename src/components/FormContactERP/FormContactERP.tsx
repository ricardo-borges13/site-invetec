import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { PrivacyNotice } from '../PrivacyNotice/PrivacyNotice';
import * as S from './FormContactERP.styles';

type FormInputs = {
  nome: string;
  empresa: string;
  telefone: string;
  email: string;
  erpAtual: string;
  dificuldade: string;
};

export const FormContactERP = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>({ shouldFocusError: true });

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
      const response = await fetch('https://formspree.io/f/xojyvlrk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success(
            'Recebemos sua solicitação. A INVETEC entrará em contato em breve.',
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

      <p>Seus dados serão usados somente para entender a necessidade da sua empresa e retornar o contato.</p>

      <form onSubmit={handleSubmit(submitHandler)}>
        {/* Nome + Empresa */}
        <S.FieldGroup>
          <S.Field>
            <label htmlFor="erp-nome">Nome *</label>
            <S.Input
              id="erp-nome"
              placeholder="Nome"
              autoComplete="name"
              aria-required="true"
              aria-invalid={Boolean(errors.nome)}
              aria-describedby={errors.nome ? 'erp-nome-erro' : undefined}
              {...register('nome', { required: 'O nome e obrigatorio.' })}
            />
            {errors.nome && (
              <S.ErrorMessage id="erp-nome-erro" role="alert">
                {errors.nome.message}
              </S.ErrorMessage>
            )}
          </S.Field>

          <S.Field>
            <label htmlFor="erp-empresa">Empresa *</label>
            <S.Input
              id="erp-empresa"
              placeholder="Empresa"
              autoComplete="organization"
              aria-required="true"
              aria-invalid={Boolean(errors.empresa)}
              aria-describedby={errors.empresa ? 'erp-empresa-erro' : undefined}
              {...register('empresa', { required: 'A empresa e obrigatoria.' })}
            />
            {errors.empresa && (
              <S.ErrorMessage id="erp-empresa-erro" role="alert">
                {errors.empresa.message}
              </S.ErrorMessage>
            )}
          </S.Field>
        </S.FieldGroup>

        {/* Email + Telefone */}
        <S.FieldGroup>
          <S.Field>
            <label htmlFor="erp-email">E-mail *</label>
            <S.Input
              id="erp-email"
              placeholder="E-mail"
              type="email"
              autoComplete="email"
              inputMode="email"
              aria-required="true"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'erp-email-erro' : undefined}
              {...register('email', {
                required: 'O e-mail e obrigatorio.',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'E-mail invalido.',
                },
              })}
            />
            {errors.email && (
              <S.ErrorMessage id="erp-email-erro" role="alert">
                {errors.email.message}
              </S.ErrorMessage>
            )}
          </S.Field>

          <S.Field>
            <label htmlFor="erp-telefone">Telefone ou WhatsApp *</label>
            <S.Input
              id="erp-telefone"
              placeholder="Telefone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              aria-required="true"
              {...register('telefone', { required: 'O telefone é obrigatório.' })}
            />
          </S.Field>
        </S.FieldGroup>

        <S.Field>
          <label htmlFor="erp-atual">ERP utilizado atualmente</label>
          <S.Select id="erp-atual" defaultValue="" {...register('erpAtual')}>
            <option value="" disabled>Selecione uma opção</option>
            <option>Não utiliza ERP</option>
            <option>Planilhas ou controles manuais</option>
            <option>Bling</option>
            <option>TOTVS</option>
            <option>Outro ERP</option>
            <option>Prefiro informar depois</option>
          </S.Select>
        </S.Field>

        {/* Dificuldade */}
        <S.Field>
          <label htmlFor="erp-dificuldade">Principal necessidade ou problema</label>
          <S.TextArea
            id="erp-dificuldade"
            rows={3}
            placeholder="Ex.: integrar vendas, estoque, faturamento e financeiro; substituir sistema atual; melhorar relatórios; reduzir retrabalho."
            {...register('dificuldade')}
          />
        </S.Field>

        <PrivacyNotice  />
        <CustomButton
          variant="cta"
          type="submit"
          disabled={isSubmitting}
          loading={isSubmitting}
        >
          Solicitar análise do W3ERP
        </CustomButton>
      </form>
    </S.FormContainer>
  );
};
