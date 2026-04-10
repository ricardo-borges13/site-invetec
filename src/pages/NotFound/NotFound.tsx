import { SEO } from "@/components/SEO/Seo";
import { Container, Content, Title, Subtitle, Button } from "./NotFound.styles";
import { useNavigate } from "react-router-dom";

export  const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Página não encontrada (404) | Invetec"
        description="A página que você procura não foi encontrada. Acesse a Invetec e conheça soluções em ERP, TI, sites e e-mail corporativo para empresas."
        image="https://www.invetec.com.br/images/error.jpg"
        url="https://www.invetec.com.br/404"
        noindex={true} // 🔹 Impede o Google de indexar
        nofollow={true} // 🔹 Impede o Google de seguir links desta página
      />

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
    </>
  );
}


