import heroImage from '@/assets/images/PagesHero-W3ERP.jpg';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { FormContactERP } from '@/components/FormContactERP/FormContactERP';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import { useRef } from 'react';
import {
  FiActivity,
  FiBarChart2,
  FiCheck,
  FiClipboard,
  FiCreditCard,
  FiFileText,
  FiLayers,
  FiPackage,
  FiShoppingBag,
  FiTrendingUp,
  FiUsers,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as S from './W3ERP.styles';

const scrollToElement = (element: HTMLElement | null) => {
  element?.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth',
    block: 'start',
  });
};

const benefits = [
  ['Setores integrados', 'Vendas, estoque, compras, faturamento e financeiro compartilham informações dentro do mesmo sistema.', FiLayers],
  ['Informações em tempo real', 'Indicadores e dados atualizados ajudam gestores e equipes a acompanhar a operação com mais segurança.', FiActivity],
  ['Controle financeiro e operacional', 'Centralize informações importantes e reduza a dependência de planilhas, controles paralelos e conferências manuais.', FiBarChart2],
  ['Processos parametrizados', 'O sistema é configurado conforme regras, fluxos e necessidades específicas da empresa.', FiClipboard],
  ['Estrutura preparada para crescer', 'O W3ERP acompanha a evolução da operação, permitindo ampliar usuários, processos e controles conforme a necessidade.', FiTrendingUp],
  ['Implantação acompanhada', 'A INVETEC participa do diagnóstico, parametrização, treinamento e acompanhamento da equipe.', FiUsers],
] as const;

const faqs = [
  ['O W3ERP funciona pela internet?', 'O acesso e o modelo de uso são definidos conforme a solução contratada e o cenário da empresa. Na análise inicial, a INVETEC orienta sobre os requisitos aplicáveis.'],
  ['Quais áreas da empresa podem ser integradas?', 'O W3ERP pode conectar áreas como vendas, estoque, compras, faturamento, financeiro e gestão, conforme os módulos e processos adotados no projeto.'],
  ['O sistema pode ser adaptado aos processos da empresa?', 'Sim. A implantação considera regras, fluxos e necessidades da operação para configurar o sistema de forma aderente ao negócio.'],
  ['A INVETEC acompanha a implantação?', 'Sim. A INVETEC apoia o diagnóstico, a tradução das necessidades, o acompanhamento técnico, o treinamento e os ajustes do projeto.'],
  ['Existe treinamento para a equipe?', 'O treinamento faz parte do planejamento de implantação, considerando os usuários e as rotinas que serão utilizadas pela empresa.'],
  ['Como é definido o investimento?', 'O investimento é definido após entender os processos, módulos, integrações, usuários e escopo de implantação necessários.'],
  ['O W3ERP pode substituir outro ERP?', 'Pode, quando houver aderência aos processos e um planejamento adequado de migração. A recomendação depende da análise técnica e operacional.'],
  ['O W3ERP pode atender empresas que hoje utilizam TOTVS?', 'Pode, dependendo dos processos, integrações, regras de negócio e objetivos da empresa. A INVETEC possui experiência com ambientes TOTVS e já acompanhou cenário real de migração para o W3ERP.'],
  ['Quanto tempo leva uma implantação?', 'O prazo varia conforme a complexidade, os dados a migrar, as integrações e a participação da equipe. Ele é definido depois do diagnóstico do projeto.'],
] as const;

export const W3ERP = () => {
  const formRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLElement | null>(null);
  const whatsappUrl = 'https://wa.me/5531997101336?text=Olá%2C%20gostaria%20de%20avaliar%20o%20W3ERP%20para%20minha%20empresa.';

  return (
    <>
      <SEO title="W3ERP | ERP Integrado para Empresas | INVETEC" description="Integre vendas, estoque, faturamento e financeiro com o W3ERP. Implantação acompanhada, processos parametrizados e suporte da INVETEC." image="https://www.invetec.com.br/images/SEO-W3ERP.jpg" url="https://www.invetec.com.br/servicos/erp/w3erp" />
      <PageHeroSection compactMobile brandContent={<S.HeroEyebrow>ERP PARA OPERAÇÕES ESTRUTURADAS</S.HeroEyebrow>} title="Integre vendas, estoque, financeiro e faturamento em um único sistema" subTitle="Tenha mais controle sobre sua operação com um ERP parametrizado conforme os processos da empresa e implantação acompanhada pela INVETEC." image={heroImage} overlayOpacity={0.62} heroContent={<S.HeroContent><S.HeroActions><CustomButton variant="cta" onClick={() => scrollToElement(formRef.current)}>Solicitar análise da operação</CustomButton><S.HeroSecondary type="button" onClick={() => scrollToElement(videoRef.current)}>Assistir ao vídeo de 1 minuto</S.HeroSecondary></S.HeroActions><S.Credibility><span><FiCheck aria-hidden="true" />Integração entre setores</span><span><FiCheck aria-hidden="true" />Implantação acompanhada</span><span><FiCheck aria-hidden="true" />Sistema preparado para crescer</span></S.Credibility></S.HeroContent>}>
        <S.Container>
          <S.VideoSection ref={videoRef} id="video-w3erp">
            <MotionReveal direction="left"><S.SectionLead><S.Eyebrow>VISÃO GERAL DA SOLUÇÃO</S.Eyebrow><h2>Entenda o W3ERP em 1 minuto</h2><p>Veja como um sistema de gestão integrado pode ajudar sua empresa a organizar processos, conectar setores e melhorar o controle da operação.</p><p className="support">O vídeo apresenta uma visão geral da solução. Abaixo, você encontra os recursos, benefícios e detalhes da implantação.</p><S.QuickPoints><li>Informações centralizadas</li><li>Setores trabalhando de forma integrada</li><li>Mais controle para decisões operacionais e gerenciais</li></S.QuickPoints><S.TextButton type="button" onClick={() => scrollToElement(formRef.current)}>Quero avaliar o W3ERP para minha empresa</S.TextButton></S.SectionLead></MotionReveal>
            <MotionReveal direction="right"><S.VideoWrapper><iframe src="https://www.youtube-nocookie.com/embed/-ljZXEjkMpE" title="Visão geral do W3ERP em um minuto" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></S.VideoWrapper></MotionReveal>
          </S.VideoSection>

          <S.PainSection>
            <MotionReveal direction="left"><div><S.Eyebrow>DESAFIOS OPERACIONAIS</S.Eyebrow><h2>A operação cresceu, mas as informações continuam separadas?</h2><p>Quando vendas, estoque, faturamento e financeiro trabalham em sistemas ou controles diferentes, a empresa perde tempo, aumenta o retrabalho e toma decisões com menos segurança.</p></div></MotionReveal>
            <MotionReveal direction="right"><S.PainGrid><S.PainList><h3>Onde surgem os gargalos</h3>{['Informações espalhadas', 'Retrabalho entre setores', 'Estoque sem atualização confiável', 'Financeiro desconectado da operação', 'Faturamento sem integração com vendas', 'Relatórios produzidos manualmente', 'Dificuldade para acompanhar resultados em tempo real'].map(item => <li key={item}>{item}</li>)}</S.PainList><S.Solution><FiLayers aria-hidden="true" /><h3>O W3ERP conecta essas áreas em uma única operação</h3><p>O sistema centraliza informações, reduz atividades duplicadas e melhora a visibilidade sobre os processos da empresa.</p></S.Solution></S.PainGrid></MotionReveal>
          </S.PainSection>

          <S.IntegrationSection><MotionReveal><S.SectionLead><S.Eyebrow>VISÃO INTEGRADA</S.Eyebrow><h2>Um ERP integrado à realidade da sua empresa</h2><p>O W3ERP é um sistema de gestão empresarial que conecta áreas como vendas, estoque, compras, faturamento, financeiro e gestão. A implantação é parametrizada conforme os processos, regras e necessidades de cada operação.</p></S.SectionLead></MotionReveal><S.IntegrationGrid>{[[FiShoppingBag, 'Vendas'], [FiPackage, 'Estoque'], [FiClipboard, 'Compras'], [FiFileText, 'Faturamento'], [FiCreditCard, 'Financeiro'], [FiBarChart2, 'Gestão e indicadores']].map(([Icon, label], index) => { const AreaIcon = Icon as typeof FiShoppingBag; return <MotionReveal key={label as string} delay={index * 0.05}><article><AreaIcon aria-hidden="true" /><span>{label as string}</span></article></MotionReveal>; })}</S.IntegrationGrid></S.IntegrationSection>

          <S.Section><MotionReveal><S.SectionLead><S.Eyebrow>BENEFÍCIOS NA PRÁTICA</S.Eyebrow><h2>O que muda na operação com o W3ERP</h2></S.SectionLead></MotionReveal><S.BenefitGrid>{benefits.map(([title, text, Icon], index) => <MotionReveal key={title} delay={index * 0.05}><S.BenefitCard><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></S.BenefitCard></MotionReveal>)}</S.BenefitGrid></S.Section>

          <S.Authority><MotionReveal><div><S.Eyebrow>ROBUSTEZ E EXPERIÊNCIA</S.Eyebrow><h2>Robustez para operações que exigem mais do ERP</h2><p>O W3ERP atende empresas que precisam integrar setores, parametrizar regras de negócio e acompanhar operações mais estruturadas. Dependendo do cenário, pode ser uma alternativa para empresas que também avaliam plataformas de maior porte.</p></div><S.AuthorityCard><h3>Experiência prática em projetos de ERP</h3><p>A INVETEC reúne experiência em implantação, suporte e acompanhamento de sistemas de gestão. O responsável técnico pelos projetos trabalhou por aproximadamente 15 anos com ambientes TOTVS e utiliza esse conhecimento para avaliar processos, aderência, riscos de implantação e necessidades reais de cada empresa.</p><strong>Há também experiência real em migração de uma operação que utilizava TOTVS para o W3ERP.</strong></S.AuthorityCard><small>A escolha entre plataformas deve considerar aderência aos processos, complexidade da operação, integrações, implantação, suporte e custo total do projeto.</small></MotionReveal></S.Authority>

          <S.FitSection><MotionReveal><S.SectionLead><S.Eyebrow>ANÁLISE CONSULTIVA</S.Eyebrow><h2>O W3ERP faz sentido para sua empresa?</h2></S.SectionLead><S.FitGrid><S.FitCard><h3>Costuma ser indicado quando a empresa</h3>{['possui operação distribuída entre vários setores', 'precisa integrar vendas, estoque, faturamento e financeiro', 'enfrenta retrabalho ou informações desencontradas', 'precisa adaptar regras e fluxos do sistema', 'está crescendo e precisa estruturar a gestão', 'precisa de maior visibilidade operacional e gerencial'].map(item => <li key={item}><FiCheck aria-hidden="true" />{item}</li>)}</S.FitCard><S.FitCard><h3>Uma solução mais simples pode ser suficiente quando</h3>{['a operação possui poucos processos', 'a necessidade está concentrada em emissão fiscal e controles básicos', 'a empresa possui poucos usuários e baixa complexidade', 'não existe disponibilidade para revisar processos e participar da implantação'].map(item => <li key={item}><FiCheck aria-hidden="true" />{item}</li>)}</S.FitCard></S.FitGrid><p className="conclusion">A INVETEC avalia o cenário antes de recomendar a solução. Quando o W3ERP não for adequado, a orientação deve ser transparente.</p></MotionReveal></S.FitSection>

          <S.Implementation><MotionReveal><S.SectionLead><S.Eyebrow>IMPLANTAÇÃO ACOMPANHADA</S.Eyebrow><h2>Um bom ERP depende de uma implantação bem conduzida</h2><p>Mesmo um sistema robusto pode gerar frustração quando é implantado sem análise dos processos, parametrização adequada, treinamento e acompanhamento da equipe.</p><p className="support">É nesse ponto que a INVETEC atua: entendendo a operação, apoiando a configuração do sistema e acompanhando a empresa durante a implantação.</p></S.SectionLead><S.StepGrid>{[['01', 'Diagnóstico do negócio', 'Antes da proposta, são analisados os processos, dificuldades e objetivos da empresa.'], ['02', 'Tradução das necessidades', 'As demandas da operação são transformadas em regras e configurações aplicáveis ao sistema.'], ['03', 'Intermediação técnica', 'A INVETEC acompanha o relacionamento com a W3ERP e ajuda a garantir que o escopo seja compreendido.'], ['04', 'Acompanhamento contínuo', 'A empresa recebe apoio durante implantação, treinamento, ajustes e evolução da operação.']].map(([number, title, text]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{text}</p></article>)}</S.StepGrid></MotionReveal></S.Implementation>

          <S.Process><MotionReveal><S.SectionLead><S.Eyebrow>JORNADA DO PROJETO</S.Eyebrow><h2>Como funciona um projeto de W3ERP</h2></S.SectionLead><ol>{[['Diagnóstico inicial', 'A empresa informa seu cenário, sistemas atuais e principais dificuldades.'], ['Mapeamento dos processos', 'A INVETEC analisa setores, fluxos, regras e necessidades de integração.'], ['Definição do escopo', 'São alinhados módulos, prioridades, configurações e etapas do projeto.'], ['Implantação e treinamento', 'O sistema é parametrizado e a equipe recebe orientação para a entrada em operação.'], ['Acompanhamento e evolução', 'A operação é acompanhada para apoiar ajustes e próximos passos.']].map(([title, text], index) => <li key={title}><b>0{index + 1}</b><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></MotionReveal></S.Process>

          <S.CaseSection><MotionReveal><S.Eyebrow>APLICAÇÃO REAL</S.Eyebrow><h2>Integração que apoia a rotina da operação</h2><blockquote>“O W3ERP trouxe uma mudança importante para a nossa empresa. Conseguimos integrar faturamento, estoque, financeiro e comercial em um único sistema, melhorando o controle das informações e a organização dos processos. Com o suporte e as soluções da INVETEC, nossas operações passaram a fluir de forma mais tranquila no dia a dia.”</blockquote><Link to="/cases/jpm">Conhecer o caso completo</Link><S.Migration><h3>Experiência real de migração</h3><p>A INVETEC também acompanhou uma operação que migrou de um ambiente TOTVS para o W3ERP, utilizando experiência técnica para analisar processos, riscos e aderência da nova solução.</p></S.Migration></MotionReveal></S.CaseSection>

          <S.IntermediateCta><MotionReveal><div><h2>Quer entender se o W3ERP se adapta à sua operação?</h2><p>A análise inicial considera seus processos, sistemas atuais, setores envolvidos e objetivos de gestão.</p></div><S.CtaActions><CustomButton variant="cta" onClick={() => scrollToElement(formRef.current)}>Solicitar análise do W3ERP</CustomButton><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a></S.CtaActions></MotionReveal></S.IntermediateCta>

          <S.FormArea id="analise-w3erp" ref={formRef}><MotionReveal><S.SectionLead><S.Eyebrow>PRÓXIMO PASSO</S.Eyebrow><h2>Conte brevemente como funciona sua operação</h2><p>A INVETEC analisa seu cenário e entra em contato para entender se o W3ERP é adequado para sua empresa.</p></S.SectionLead><FormContactERP /></MotionReveal></S.FormArea>

          <S.FaqSection><MotionReveal><S.SectionLead><S.Eyebrow>DÚVIDAS FREQUENTES</S.Eyebrow><h2>Perguntas sobre o W3ERP</h2></S.SectionLead><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></MotionReveal></S.FaqSection>
        </S.Container>
        <S.FinalCta><MotionReveal><h2>Organize sua operação com um ERP preparado para o seu negócio</h2><p>Converse com a INVETEC para avaliar processos, integrações e o modelo de implantação mais adequado para sua empresa.</p><S.CtaActions><CustomButton variant="cta" onClick={() => scrollToElement(formRef.current)}>Solicitar análise</CustomButton><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a></S.CtaActions></MotionReveal></S.FinalCta>
      </PageHeroSection>
    </>
  );
};
