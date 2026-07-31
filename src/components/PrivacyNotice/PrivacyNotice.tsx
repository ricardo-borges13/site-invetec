import { Link } from 'react-router-dom';
import * as S from './PrivacyNotice.styles';


export const PrivacyNotice = () => (
  <S.Container>

    <p>
      Ao enviar este formulário, você declara estar ciente do tratamento dos
      dados informados conforme nossa{' '}
      <Link to="/politica-de-privacidade">Política de Privacidade</Link>.
    </p>
  </S.Container>
);
