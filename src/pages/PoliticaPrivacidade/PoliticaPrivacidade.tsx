import heroImage from '@/assets/images/PagesHero-PoliticaPrivacidade.webp';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import * as S from './PoliticaPrivacidade.styles';

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <MotionReveal>
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  </MotionReveal>
);

export const PoliticaPrivacidade = () => (
  <>
    <SEO
      title="Política de Privacidade | INVETEC"
      description="Saiba como a INVETEC coleta, utiliza, armazena e protege os dados enviados por formulários, canais de contato e serviços digitais."
      image="https://www.invetec.com.br/images/SEO-Politica-Seguranca.jpg"
      url="https://www.invetec.com.br/politica-de-privacidade"
    />
    <PageHeroSection
      title="Política de Privacidade"
      subTitle="Entenda como a INVETEC coleta, utiliza e protege as informações enviadas por meio de seus canais digitais."
      image={heroImage}
      overlayOpacity={0.7}
    >
      <S.Container>
        <Section title="Apresentação">
          <p>
            A INVETEC valoriza a privacidade e a segurança das informações de
            clientes, visitantes e usuários de seus canais digitais.
          </p>
          <p>
            Esta Política de Privacidade explica quais informações podem ser
            coletadas por meio do site da INVETEC, como esses dados são
            utilizados e quais direitos podem ser exercidos pelos titulares.
          </p>
        </Section>
        <Section title="Responsável pelo tratamento dos dados">
          <S.ContactDetails>
            INVETEC — Investindo em Tecnologia
            <br />
            CNPJ: 46.261.182/0001-55
            <br />
            Site: <a href="https://www.invetec.com.br/">www.invetec.com.br</a>
            <br />
            E-mail:{' '}
            <a href="mailto:comercial@invetec.com.br">
              comercial@invetec.com.br
            </a>
          </S.ContactDetails>
        </Section>
        <Section title="Dados que podem ser coletados">
          <p>Dependendo do formulário utilizado, podem ser coletados:</p>
          <ul>
            <li>nome, empresa, telefone, e-mail, assunto e mensagem;</li>
            <li>objetivo do contato e informações sobre ERP;</li>
            <li>número de funcionários e faixa de faturamento empresarial;</li>
            <li>quantidade e situação de contas de e-mail;</li>
            <li>URL e situação do site atual; e</li>
            <li>
              referências e informações necessárias para diagnóstico ou
              orçamento.
            </li>
          </ul>
          <p>
            Não envie senhas, dados bancários, números de cartão, documentos
            pessoais desnecessários, informações médicas, dados pessoais
            sensíveis ou informações confidenciais sem relação com o
            atendimento.
          </p>
        </Section>
        <Section title="Como os dados são coletados">
          <p>
            Os dados podem ser enviados por formulário geral, formulário de ERP,
            formulário de criação de sites, formulário do INVETEC Mail,
            WhatsApp, e-mail, links e canais externos.
          </p>
        </Section>
        <Section title="Finalidades">
          <p>
            Os dados podem ser utilizados para responder contatos, fornecer
            informações, elaborar diagnósticos, preparar propostas e orçamentos,
            qualificar demandas comerciais, prestar suporte, manter histórico de
            atendimento, cumprir obrigações legais e prevenir fraudes e uso
            indevido.
          </p>
        </Section>
        <Section title="Formspree">
          <p>
            Os formulários do site utilizam o Formspree para processar e
            encaminhar os dados à INVETEC. O Formspree pode tratar metadados
            técnicos, como endereço IP, navegador, data e horário, conforme suas
            próprias políticas.
          </p>
        </Section>
        <Section title="Serviços de terceiros">
          <p>
            O site pode conter integrações ou links para Formspree, WhatsApp,
            Instagram, Facebook, YouTube, parceiros e ferramentas externas. Após
            o redirecionamento, também se aplicam as políticas do respectivo
            fornecedor.
          </p>
        </Section>
        <Section title="YouTube">
          <p>
            A página W3ERP pode exibir conteúdo incorporado do YouTube em modo
            de privacidade aprimorada. Ainda assim, a interação com o conteúdo
            pode transmitir dados técnicos ao YouTube.
          </p>
        </Section>
        <Section title="Cookies e tecnologias semelhantes">
          <p>
            Na configuração atual, o site não possui código próprio de Google
            Analytics, Google Tag Manager, Google Ads, Meta Pixel, Clarity,
            Hotjar, localStorage, sessionStorage, IndexedDB ou fingerprinting.
            Serviços externos podem utilizar tecnologias próprias. Esta seção
            será atualizada quando ferramentas de medição ou publicidade forem
            implementadas.
          </p>
        </Section>
        <Section title="Compartilhamento">
          <p>
            A INVETEC não comercializa dados pessoais. O compartilhamento pode
            ocorrer apenas quando necessário com prestadores de tecnologia,
            Formspree, hospedagem e infraestrutura, parceiros diretamente
            envolvidos no serviço ou autoridades públicas, quando exigido
            legalmente.
          </p>
        </Section>
        <Section title="Retenção">
          <p>
            Os dados serão mantidos pelo período necessário para atendimento,
            histórico comercial, cumprimento de obrigações legais, prevenção de
            fraudes e exercício de direitos.
          </p>
        </Section>
        <Section title="Segurança">
          <p>
            A INVETEC adota medidas técnicas e administrativas razoáveis para
            proteger os dados contra acesso não autorizado, perda, alteração,
            divulgação ou destruição.
          </p>
        </Section>
        <Section title="Direitos do titular">
          <p>
            O titular pode solicitar confirmação de tratamento, acesso,
            correção, eliminação quando aplicável, informação sobre
            compartilhamento, oposição e esclarecimentos sobre o uso dos dados.
            Para isso, entre em contato pelo e-mail{' '}
            <a href="mailto:comercial@invetec.com.br">
              comercial@invetec.com.br
            </a>
            .
          </p>
        </Section>
        <Section title="Crianças e adolescentes">
          <p>
            Os serviços são destinados principalmente a empresas e
            profissionais. O site não busca coletar intencionalmente dados de
            crianças.
          </p>
        </Section>
        <Section title="Alterações nesta política">
          <p>
            Esta política poderá ser atualizada com novas ferramentas, mudanças
            nos formulários, Google Tag Manager, Google Ads, analytics ou
            alterações legais.
          </p>
        </Section>
        <Section title="Contato">
          <p>
            Para dúvidas sobre esta política ou sobre o tratamento de dados,
            escreva para{' '}
            <a href="mailto:comercial@invetec.com.br">
              comercial@invetec.com.br
            </a>
            .
          </p>
        </Section>
        <S.Update>Última atualização: julho de 2026.</S.Update>
      </S.Container>
    </PageHeroSection>
  </>
);
