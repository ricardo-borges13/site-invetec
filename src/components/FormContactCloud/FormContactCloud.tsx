import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { FaShieldAlt } from 'react-icons/fa';
import { CustomButton } from '../CustomButton/CustomButton';
import { PrivacyNotice } from '../PrivacyNotice/PrivacyNotice';
import * as S from '../FormContact/FormContact.styles';

const cloudServiceOptions = [
  { value: 'file-server', label: 'File Server em Nuvem' },
  { value: 'backup', label: 'Backup em Nuvem' },
  { value: 'file-server-backup', label: 'File Server + Backup' },
  { value: 'unsure', label: 'Ainda não sei qual solução preciso' },
] as const;

export type CloudServiceInterest =
  (typeof cloudServiceOptions)[number]['value'];

type FormInputs = {
  nome: string;
  empresa: string;
  telefone?: string;
  email: string;
  serviceInterest?: CloudServiceInterest;
  mensagem: string;
};

type FormContactCloudProps = {
  serviceInterest?: CloudServiceInterest;
  onServiceInterestChange?: (value: CloudServiceInterest | undefined) => void;
};

export const FormContactCloud = ({
  serviceInterest,
  onServiceInterestChange,
}: FormContactCloudProps) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>();

  useEffect(() => {
    if (serviceInterest) {
      setValue('serviceInterest', serviceInterest, { shouldValidate: true });
    }
  }, [serviceInterest, setValue]);

  const finishSubmission = () => {
    reset();
    onServiceInterestChange?.(undefined);
  };
  const onSubmitMock = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Mensagem enviada com sucesso! (MODO TESTE)', {
        duration: 9000,
      });
      finishSubmission();
    } catch {
      toast.error('Erro ao enviar (MODO TESTE).', { duration: 4000 });
    }
  };
  const onSubmitReal = async (data: FormInputs) => {
    try {
      const payload = new URLSearchParams();

      Object.entries(data).forEach(([name, value]) => {
        if (value !== undefined) {
          payload.append(name, value);
        }
      });
      payload.append('origem', 'cloud');

      const response = await fetch('https://formspree.io/f/xgaeyaeg', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: payload.toString(),
      });
      if (response.ok) {
        toast.success(
          'Mensagem enviada com sucesso! Em breve entraremos em contato',
          { duration: 5000 }
        );
        finishSubmission();
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

  const submitHandler = import.meta.env.DEV ? onSubmitMock : onSubmitReal;
  const inputProps = (name: keyof FormInputs, required?: string) => ({
    ...register(name, required ? { required } : undefined),
    disabled: isSubmitting,
  });
  const serviceInterestField = register('serviceInterest', {
    required: 'Selecione o serviço de interesse.',
  });

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
      <S.FormHeader>
        <h2>Envie sua mensagem</h2>
        <p>
          Preencha os dados para que possamos entender melhor sua necessidade e
          indicar a solução mais adequada.
        </p>
      </S.FormHeader>
      <p className="security">
        <FaShieldAlt aria-hidden="true" /> Seus dados estão seguros e não serão
        compartilhados.
      </p>
      <form onSubmit={handleSubmit(submitHandler)}>
        <S.FieldGroup>
          <div>
            <label htmlFor="cloud-nome">Nome *</label>
            <S.Input
              id="cloud-nome"
              placeholder="Seu nome"
              aria-required="true"
              aria-invalid={Boolean(errors.nome)}
              aria-describedby={errors.nome ? 'cloud-nome-erro' : undefined}
              {...inputProps('nome', 'O nome é obrigatório.')}
            />
            {errors.nome && (
              <S.ErrorMessage id="cloud-nome-erro" role="alert">
                {errors.nome.message}
              </S.ErrorMessage>
            )}
          </div>
          <div>
            <label htmlFor="cloud-empresa">Empresa *</label>
            <S.Input
              id="cloud-empresa"
              placeholder="Nome da empresa"
              aria-required="true"
              aria-invalid={Boolean(errors.empresa)}
              aria-describedby={
                errors.empresa ? 'cloud-empresa-erro' : undefined
              }
              {...inputProps('empresa', 'A empresa é obrigatória.')}
            />
            {errors.empresa && (
              <S.ErrorMessage id="cloud-empresa-erro" role="alert">
                {errors.empresa.message}
              </S.ErrorMessage>
            )}
          </div>
        </S.FieldGroup>
        <S.FieldGroup>
          <div>
            <label htmlFor="cloud-telefone">WhatsApp ou telefone</label>
            <S.Input
              id="cloud-telefone"
              placeholder="(00) 00000-0000"
              type="tel"
              {...inputProps('telefone')}
            />
          </div>
          <div>
            <label htmlFor="cloud-email">E-mail *</label>
            <S.Input
              id="cloud-email"
              placeholder="seuemail@empresa.com.br"
              type="email"
              aria-required="true"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'cloud-email-erro' : undefined}
              {...register('email', {
                required: 'O e-mail é obrigatório.',
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: 'E-mail inválido.',
                },
              })}
              disabled={isSubmitting}
            />
            {errors.email && (
              <S.ErrorMessage id="cloud-email-erro" role="alert">
                {errors.email.message}
              </S.ErrorMessage>
            )}
          </div>
        </S.FieldGroup>
        <S.Assunto>
          <label htmlFor="cloud-servico">Serviço de interesse *</label>
          <S.Select
            id="cloud-servico"
            aria-required="true"
            aria-invalid={Boolean(errors.serviceInterest)}
            aria-describedby={
              errors.serviceInterest ? 'cloud-servico-erro' : undefined
            }
            disabled={isSubmitting}
            {...serviceInterestField}
            onChange={event => {
              serviceInterestField.onChange(event);
              onServiceInterestChange?.(
                event.target.value as CloudServiceInterest
              );
            }}
          >
            <option value="" disabled>
              Selecione uma opção
            </option>
            {cloudServiceOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </S.Select>
          {errors.serviceInterest && (
            <S.ErrorMessage id="cloud-servico-erro" role="alert">
              {errors.serviceInterest.message}
            </S.ErrorMessage>
          )}
        </S.Assunto>
        <S.Mensagem>
          <label htmlFor="cloud-mensagem">Mensagem *</label>
          <S.TextArea
            id="cloud-mensagem"
            placeholder="Conte como os arquivos são armazenados hoje, se já existe servidor ou backup e qual é a principal necessidade da empresa."
            rows={6}
            aria-required="true"
            aria-invalid={Boolean(errors.mensagem)}
            aria-describedby={
              errors.mensagem ? 'cloud-mensagem-erro' : undefined
            }
            {...register('mensagem', {
              required: 'A mensagem é obrigatória.',
              minLength: {
                value: 5,
                message: 'A mensagem deve ter pelo menos 5 caracteres.',
              },
            })}
            disabled={isSubmitting}
          />
          {errors.mensagem && (
            <S.ErrorMessage id="cloud-mensagem-erro" role="alert">
              {errors.mensagem.message}
            </S.ErrorMessage>
          )}
        </S.Mensagem>
        <PrivacyNotice />
        <CustomButton
          text="Enviar mensagem"
          variant="cta"
          type="submit"
          disabled={isSubmitting}
          loading={isSubmitting}
        />
      </form>
    </S.FormContainer>
  );
};
