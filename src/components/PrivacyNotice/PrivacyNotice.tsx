import { Link } from 'react-router-dom';
import * as S from './PrivacyNotice.styles';

// type PrivacyNoticeProps = {
//   showSensitiveDataWarning?: boolean;
// };

export const PrivacyNotice = () => (
  <S.Container>
    {/* {showSensitiveDataWarning && (
      <S.SensitiveDataWarning>
        Não informe senhas, dados bancários ou dados pessoais sensíveis.
      </S.SensitiveDataWarning>
    )} */}
    <p>
      Ao enviar este formulário, você declara estar ciente do tratamento dos
      dados informados conforme nossa{' '}
      <Link to="/politica-de-privacidade">Política de Privacidade</Link>.
    </p>
  </S.Container>
);
