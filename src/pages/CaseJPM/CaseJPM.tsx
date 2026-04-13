import beforeImage from '@/assets/images/ControlePedido_JPM.jpg';
import heroImage from '@/assets/images/PagesHeroJPM.jpg';
import afterImage from '@/assets/images/PedidoVenda_JPM.jpg';
import { FormContactERP } from '@/components/FormContactERP/FormContactERP';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import * as S from './CaseJPM.styles';

export const CaseJPM = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <>
      <SEO
        title="Case JPM: Implantação de ERP e organização da empresa | Invetec"
        description="Veja como a JPM saiu do controle manual com planilhas e organizou toda operação com ERP: estoque, vendas, financeiro e faturamento integrados."
        image="https://www.invetec.com.br/images/SEO-Case-JPM.jpg"
        url="https://www.invetec.com.br/cases/jpm"
      />
      <PageHeroSection
        title="Como a JPM saiu do controle manual e organizou a operação com ERP"
        subTitle="Mais controle, menos erros e decisões mais seguras no dia a dia"
        image={heroImage}
      >
        <S.Container>
          {/* 🔥 CONTEXTO */}
          <S.Section>
            <MotionReveal>
              <h2>Sobre a empresa</h2>
              <p>
                A JPM atua no comércio de borrachas e materiais elétricos, com
                operação focada em vendas, controle de estoque e gestão
                financeira.
              </p>
            </MotionReveal>
          </S.Section>

          {/* ❌ ANTES */}
          <S.Section>
            <MotionReveal>
              <h2>Como funcionava antes</h2>

              <p>
                Antes da implantação do ERP, a operação era totalmente manual e
                dependia de controles paralelos. Isso gerava retrabalho
                constante, falta de controle e risco de erros nas operações.
              </p>

              <ul>
                <li>❌ Sistema sem integração entre setores</li>
                <li>❌ Vendedores registravam pedidos em planilhas Excel</li>
                <li>❌ Financeiro lançava vendas manualmente</li>
                <li>
                  ❌ Controle de pedidos, estoque e expedição feito em planilhas
                </li>
                <li>❌ Alto risco de erro e retrabalho constante</li>
              </ul>
            </MotionReveal>
          </S.Section>

          {/* ⚙️ SOLUÇÃO */}

          <S.SectionTitle>O que foi feito na prática</S.SectionTitle>
          <S.AccordionWrapper>
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Implantação do sistema W3ERP
                </Accordion.Header>
                <Accordion.Body>
                  Implementação completa do sistema, desde a parametrização
                  inicial até a entrada em operação, garantindo uma base sólida,
                  organizada e alinhada às necessidades do negócio.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Estruturação dos processos comerciais
                </Accordion.Header>
                <Accordion.Body>
                  Revisão e padronização dos fluxos de vendas, desde o
                  atendimento inicial até o faturamento, trazendo mais controle,
                  agilidade e previsibilidade nas operações comerciais.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Integração dos módulos de vendas, estoque e financeiro
                </Accordion.Header>
                <Accordion.Body>
                  Unificação das informações entre os setores, eliminando
                  retrabalho e inconsistências, além de proporcionar uma visão
                  integrada e em tempo real das operações da empresa.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Capacitação da equipe operacional
                </Accordion.Header>
                <Accordion.Body>
                  Treinamento prático dos colaboradores para utilização
                  eficiente do sistema, garantindo autonomia, redução de erros e
                  melhor aproveitamento dos recursos disponíveis.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </S.AccordionWrapper>

          {/* 📊 RESULTADOS */}
          <S.Highlight>
            <MotionReveal>
              <h2>Resultados reais após a implantação</h2>
              <p>Resultados reais após a implantação</p>

              <S.Grid>
                <S.Card>
                  <h3>📦 Controle de estoque</h3>
                  <p>
                    Visão precisa de entradas, saídas e disponibilidade em tempo
                    real.
                  </p>
                </S.Card>

                <S.Card>
                  <h3>💰 Gestão financeira</h3>
                  <p>
                    Contas a pagar, receber e fluxo de caixa integrados
                    automaticamente.
                  </p>
                </S.Card>

                <S.Card>
                  <h3>🛒 Vendas organizadas</h3>
                  <p>
                    Pedidos integrados com estoque, faturamento e financeiro.
                  </p>
                </S.Card>

                <S.Card>
                  <h3>📊 Indicadores gerenciais</h3>
                  <p>
                    Relatórios e dashboards para decisões rápidas e
                    estratégicas.
                  </p>
                </S.Card>

                <S.Card>
                  <h3>📦 Suprimentos integrados</h3>
                  <p>
                    Compras vinculadas ao pedido de venda, controlando todo o
                    processo até a entrega.
                  </p>
                </S.Card>

                <S.Card>
                  <h3>☁️ Sistema 100% web</h3>
                  <p>
                    Acesso de qualquer lugar, sem necessidade de servidor ou
                    estrutura interna.
                  </p>
                </S.Card>

                <S.Card>
                  <h3>🧾 Gestão fiscal</h3>
                  <p>
                    Informações organizadas para envio à contabilidade com
                    rapidez e segurança.
                  </p>
                </S.Card>

                <S.Card>
                  <h3>📨 Faturamento automatizado</h3>
                  <p>
                    Emissão de NF-e com envio automático de XML e DANFE, CC-e e
                    comunicação com cliente.
                  </p>
                </S.Card>
              </S.Grid>
            </MotionReveal>
          </S.Highlight>

          {/* 🖥️ NA PRÁTICA */}
          <S.Section>
            <S.Highlight>
              <MotionReveal>
                <h2>Como funciona hoje com o W3ERP</h2>

                <p>
                  Hoje a operação é totalmente integrada, eliminando retrabalho
                  e automatizando processos.
                </p>

                <ul>
                  <li>✔ Pedido de venda gera automaticamente o financeiro</li>
                  <li>✔ Pedido gera solicitação de compra e ordem de compra</li>
                  <li>✔ Recebimento já atualiza estoque e contas a pagar</li>
                  <li>✔ Venda gera separação para expedição</li>
                  <li>✔ Baixa automática de estoque</li>
                  <li>✔ Emissão de NF-e integrada</li>
                  <li>✔ Envio automático de DANFE por e-mail</li>
                  <li>✔ Geração automática de contas a receber</li>
                  <li>✔ Cadastro único de clientes, fornecedores e produtos</li>
                  <li>✔ Relatórios e dashboards em tempo real</li>
                </ul>
              </MotionReveal>
            </S.Highlight>
          </S.Section>

          <S.BeforeAfter>
            <MotionReveal>
              <h2>Antes e depois na prática</h2>

              <p>
                A mudança não foi apenas no sistema, mas na forma como a empresa
                opera no dia a dia.
              </p>

              <S.CompareGrid>
                {/* ANTES */}
                <S.CompareCard>
                  <h3>❌ Antes (planilhas e retrabalho)</h3>

                  <img
                    src={beforeImage}
                    alt="Controle em Planilha"
                    onClick={() => setSelectedImage(beforeImage)}
                    style={{ cursor: 'zoom-in' }}
                  />

                  <ul>
                    <li>Pedidos controlados em Excel</li>
                    <li>Vendedores não registravam no sistema</li>
                    <li>Financeiro lançado manualmente</li>
                    <li>Alto risco de erro e perda de informação</li>
                  </ul>
                </S.CompareCard>

                {/* DEPOIS */}
                <S.CompareCard $highlight>
                  <h3>✔ Depois (W3ERP integrado)</h3>

                  <img
                    src={afterImage}
                    alt="Sistema W3ERP Integrado"
                    onClick={() => setSelectedImage(afterImage)}
                    style={{ cursor: 'zoom-in' }}
                  />

                  <ul>
                    <li>Pedidos registrados diretamente no sistema</li>
                    <li>Integração automática com financeiro</li>
                    <li>Controle de estoque em tempo real</li>
                    <li>Processos padronizados e sem retrabalho</li>
                  </ul>
                </S.CompareCard>
              </S.CompareGrid>
            </MotionReveal>
          </S.BeforeAfter>

          {/* 🧠 DIFERENCIAL */}
          <S.Warning>
            <MotionReveal>
              <h2>O sistema não é o problema — a implantação é</h2>

              <p>
                Muitas empresas já utilizam sistemas, mas continuam com
                dificuldades por falta de organização dos processos.
              </p>

              <p>
                O resultado vem quando o sistema é bem configurado e alinhado
                com a realidade da operação.
              </p>

              <p>
                Foi esse acompanhamento que garantiu uma implantação eficiente,
                alinhada à operação e com resultado real na JPM.
              </p>
            </MotionReveal>
          </S.Warning>

          {/* 🚀 CTA */}

          <S.FormArea>
            <MotionReveal>
              <h2>Quer esse nível de controle na sua empresa?</h2>
              <p>
                Preencha o diagnóstico e eu analiso seu cenário para mostrar
                como aplicar isso na sua realidade.
              </p>

              <FormContactERP />
            </MotionReveal>
          </S.FormArea>
        </S.Container>

        {selectedImage && (
          <S.Lightbox>
            <S.CloseButton onClick={() => setSelectedImage(null)}>
              ✕
            </S.CloseButton>

            <img src={selectedImage} alt="Preview" />
          </S.Lightbox>
        )}
      </PageHeroSection>
    </>
  );
};
