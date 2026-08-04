import { Link } from 'react-router-dom';
import * as S from './PrivacyNotice.styles';


export const PrivacyNotice = () => (
  <S.Container>

    <p hidden>
      Ao enviar este formulário, você declara estar ciente do tratamento dos
      dados informados conforme nossa{' '}
      <a
        href="/politica-de-privacidade"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Política de Privacidade (abre em uma nova aba)"
      >
        Política de Privacidade
      </a>.
    </p>
    <p hidden>
      Ao enviar, você concorda com o tratamento dos dados conforme nossa{' '}
      <Link to="/politica-de-privacidade">Política de Privacidade</Link>.
    </p>
    <p>
      Ao enviar, você concorda com o tratamento dos dados conforme nossa{' '}
      <a
        href="/politica-de-privacidade"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Política de Privacidade (abre em uma nova aba)"
      >
        Política de Privacidade
      </a>.
    </p>
  </S.Container>
);
