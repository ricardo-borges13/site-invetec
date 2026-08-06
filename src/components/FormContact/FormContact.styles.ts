import styled from 'styled-components';

export const FormContainer = styled.div`
  background: #fff; padding: clamp(1.25rem, 2.3vw, 1.75rem); border: 1px solid #e5e7eb; border-radius: 16px; box-shadow: 0 14px 28px rgba(0,0,0,.07); width: 100%; max-width: 650px;
  form { display: flex; flex-direction: column; gap: .9rem; }
  label { font-weight: 600; color: ${({ theme }) => theme.colors.black}; display: block; margin-bottom: .3rem; }
  .security { display: flex; align-items: center; gap: .45rem; color: #475569; font-size: .84rem; font-weight: 500; line-height: 1.35; margin: .1rem 0 0; }
  .security svg { color: ${({ theme }) => theme.colors.lightPrimary}; }
  button { width: 100%; min-height: 50px; box-shadow: 0 6px 14px rgba(30,127,79,.16); }
  button:hover:not(:disabled) { box-shadow: 0 9px 18px rgba(30,127,79,.24); }
  @media (max-width: 600px) { padding: 1.2rem; }

  @media (min-width: 1024px) and (max-height: 850px) {
    padding: 1.5rem;
    form { gap: .75rem; }
    .security { margin: 0; }
  }
`;
export const FormHeader = styled.header`
  margin-bottom: .6rem;
  h2 { color: ${({ theme }) => theme.colors.primaryDark}; font-size: clamp(1.35rem, 2.2vw, 1.65rem); line-height: 1.2; margin: 0 0 .3rem; }
  p { color: #64748b; font-size: .9rem; line-height: 1.45; margin: 0; }

  @media (min-width: 1024px) and (max-height: 850px) {
    margin-bottom: .35rem;
    h2 { font-size: 1.45rem; margin-bottom: .25rem; }
    p { line-height: 1.35; }
  }
`;
export const FieldGroup = styled.div`display: flex; gap: .9rem; > div { flex: 1; min-width: 0; } @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { flex-direction: column; gap: .9rem; } @media (min-width: 1024px) and (max-height: 850px) { gap: .75rem; }`;
const control = `width: 100%; background: white; padding: .7rem .8rem; border-radius: 8px; font-size: .95rem; border: 1px solid #e5e7eb; transition: border-color .2s ease, box-shadow .2s ease; &::placeholder { color: #94a3b8; } &:hover:not(:disabled) { border-color: #9fc4ec; } &:focus { outline: none; border-color: #007bff; box-shadow: 0 0 0 3px rgba(0,123,255,.18); } &:disabled { background: #f1f5f9; cursor: not-allowed; }`;
export const Input = styled.input`${control} min-height: 44px;`;
export const TextArea = styled.textarea`${control} min-height: 124px; resize: vertical; @media (min-width: 1024px) and (max-height: 850px) { height: 110px; min-height: 110px; } @media (max-width: 600px) { min-height: 124px; }`;
export const ErrorMessage = styled.span`color: ${({ theme }) => theme.colors.error}; font-size: .85rem; margin-top: .25rem; display: block;`;
export const Assunto = styled.div`display: flex; flex-direction: column;`;
export const Mensagem = styled.div`display: flex; flex-direction: column;`;
