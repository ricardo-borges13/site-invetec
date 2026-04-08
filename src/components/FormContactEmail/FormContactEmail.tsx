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
    formState: { isSubmitting },
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    try {
      const response = await fetch('https://formspree.io/f/xaqdqqnk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Recebido! Vou analisar e te retorno.');
        reset();
      } else {
        toast.error('Erro ao enviar.');
      }
    } catch {
      toast.error('Erro de conexão.');
    }
  };

  return (
    <S.FormContainer>
      <Toaster />

      <form onSubmit={handleSubmit(onSubmit)}>

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
            <option>Outlook com dados no computador</option>
            <option>Outlook sincronizado (IMAP)</option>
            <option>Gmail / Google Workspace</option>
            <option>Outro</option>
            <option>Não tenho e-mail corporativo</option>
          </S.Select>
        </div>

        <div>
          <label>Precisa migrar e-mails antigos?</label>
          <S.Select {...register('migracao')}>
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
