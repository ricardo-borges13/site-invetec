import { Container, Content, Title, Subtitle, Button } from "./NotFound.styles";
import { useNavigate } from "react-router-dom";

export  const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Title>404</Title>
        <Subtitle>Página não encontrada</Subtitle>

        <p>
          O conteúdo que você está tentando acessar não existe ou foi movido.
        </p>

        <Button onClick={() => navigate("/")}>
          Voltar para o início
        </Button>
      </Content>
    </Container>
  );
}


