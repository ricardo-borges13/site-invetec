import beforeImage from '@/assets/images/ControlePedido_JPM.webp';
import heroImage from '@/assets/images/PagesHeroJPM.jpg';
import afterImage from '@/assets/images/PedidoVenda_JPM.webp';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import { useEffect, useRef, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { IconType } from 'react-icons';
import { FiArchive, FiBarChart2, FiCheck, FiCloud, FiFileText, FiGlobe, FiMail, FiMonitor, FiPackage, FiShield, FiShoppingCart, FiTrendingUp, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as S from './CaseJPM.styles';

type IconItem = { icon: IconType; title: string; text?: string };
type LightboxImage = { src: string; alt: string };

const solutionAreas: IconItem[] = [
  { icon: FiBarChart2, title: 'ERP e gestão' },
  { icon: FiMonitor, title: 'Gestão e suporte de TI' },
  { icon: FiMail, title: 'INVETEC Mail' },
  { icon: FiArchive, title: 'File Server em Nuvem' },
  { icon: FiCloud, title: 'Backup em Nuvem' },
  { icon: FiGlobe, title: 'Site institucional e SEO' },
];

const previousProblems: IconItem[] = [
  { icon: FiUsers, title: 'Setores sem integração' },
  { icon: FiFileText, title: 'Pedidos registrados em planilhas' },
  { icon: FiBarChart2, title: 'Financeiro alimentado manualmente' },
  { icon: FiPackage, title: 'Estoque e expedição controlados em paralelo' },
  { icon: FiShield, title: 'Alto risco de inconsistências e retrabalho' },
];

const additionalSolutions: IconItem[] = [
  { icon: FiMonitor, title: 'Gestão e suporte de TI', text: 'Acompanhamento tecnológico, suporte aos usuários e manutenção do ambiente necessário para manter a operação estável.' },
  { icon: FiMail, title: 'INVETEC Mail', text: 'Comunicação corporativa profissional, com organização, controle administrativo e suporte direto da INVETEC.' },
  { icon: FiArchive, title: 'File Server e Backup em Nuvem', text: 'Centralização dos arquivos, acesso compartilhado e rotinas de backup para proteger dados e apoiar a continuidade da empresa.' },
  { icon: FiGlobe, title: 'Site institucional e SEO', text: 'Modernização do site, reorganização de produtos e eventos, responsividade, navegação mais clara e otimização do conteúdo para mecanismos de busca.' },
];

const outcomes: IconItem[] = [
  { icon: FiTrendingUp, title: 'Processos integrados', text: 'Vendas, estoque, compras, financeiro e faturamento conectados em um único fluxo.' },
  { icon: FiPackage, title: 'Controle de estoque', text: 'Entradas, saídas e disponibilidade acompanhadas com mais precisão.' },
  { icon: FiBarChart2, title: 'Gestão financeira', text: 'Contas a pagar, receber e fluxo financeiro integrados à operação.' },
  { icon: FiCheck, title: 'Menos retrabalho', text: 'Redução de lançamentos duplicados, controles paralelos e inconsistências.' },
  { icon: FiShield, title: 'Dados e arquivos protegidos', text: 'File Server e Backup em Nuvem apoiando organização, acesso e continuidade.' },
  { icon: FiGlobe, title: 'Site e SEO modernizados', text: 'Estrutura institucional mais clara, responsiva e preparada para busca orgânica.' },
];

const flowSteps: IconItem[] = [
  { icon: FiShoppingCart, title: 'Pedido de venda', text: 'O pedido é registrado diretamente no sistema.' },
  { icon: FiFileText, title: 'Necessidade de compra', text: 'O sistema gera a solicitação e a ordem de compra quando necessário.' },
  { icon: FiPackage, title: 'Recebimento', text: 'A entrada atualiza estoque e contas a pagar.' },
  { icon: FiArchive, title: 'Separação e expedição', text: 'A venda gera a separação dos produtos para envio.' },
  { icon: FiCheck, title: 'Faturamento', text: 'A emissão de NF-e, XML e DANFE ocorre de forma integrada.' },
  { icon: FiBarChart2, title: 'Integração financeira', text: 'As contas a receber são geradas automaticamente.' },
  { icon: FiPackage, title: 'Atualização de estoque', text: 'Entradas, saídas e baixas são atualizadas ao longo da operação.' },
  { icon: FiTrendingUp, title: 'Relatórios e indicadores', text: 'Cadastros, informações e dashboards ficam centralizados.' },
];

export const CaseJPM = () => {
  const [selectedImage, setSelectedImage] = useState<LightboxImage | null>(null);
  const openingButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const openLightbox = (image: LightboxImage, button: HTMLButtonElement) => {
    openingButtonRef.current = button;
    setSelectedImage(image);
  };
  const closeLightbox = () => setSelectedImage(null);

  useEffect(() => {
    if (!selectedImage) return;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'Tab' && closeButtonRef.current) {
        event.preventDefault();
        closeButtonRef.current.focus();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    requestAnimationFrame(() => closeButtonRef.current?.focus());
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      openingButtonRef.current?.focus();
    };
  }, [selectedImage]);

  return (
    <>
      <SEO title="Case Grupo JPM | ERP, TI, Cloud, Site e SEO | INVETEC" description="Conheça o projeto do Grupo JPM com ERP, gestão de TI, INVETEC Mail, File Server, Backup em Nuvem, modernização do site institucional e SEO." image="https://www.invetec.com.br/images/SEO-Case-JPM.jpg" url="https://www.invetec.com.br/cases/jpm" />
      <PageHeroSection title="Processos integrados para organizar toda a operação" subTitle="ERP, gestão de TI, INVETEC Mail, File Server, Backup em Nuvem, site institucional e SEO aplicados à realidade da empresa." image={heroImage} compactMobile overlayOpacity={0.6} brandContent={<S.Eyebrow>Case Grupo JPM</S.Eyebrow>}>
        <S.Container>
          <S.PartnerGrid>
            <MotionReveal direction="left"><S.CopyBlock><h2>Sobre o Grupo JPM</h2><p>O Grupo JPM atua no comércio de borrachas industriais e materiais elétricos, com uma operação que envolve vendas, compras, estoque, expedição, faturamento e gestão financeira.</p></S.CopyBlock></MotionReveal>
            <MotionReveal direction="right"><S.PartnerPanel><h2>O desafio da operação</h2><p>O crescimento da empresa exigia substituir controles paralelos por processos integrados, reduzir retrabalho e criar uma base tecnológica capaz de apoiar diferentes áreas do negócio.</p></S.PartnerPanel></MotionReveal>
          </S.PartnerGrid>

          <S.Section><MotionReveal direction="up"><S.SectionHeading><h2>Soluções aplicadas</h2><p>O projeto reuniu diferentes soluções da INVETEC para integrar processos, organizar a infraestrutura, proteger informações e modernizar a presença institucional do Grupo JPM.</p></S.SectionHeading></MotionReveal><S.SolutionStrip>{solutionAreas.map(({ icon: Icon, title }, index) => <MotionReveal key={title} direction="up" delay={index * 0.04}><S.SolutionItem><Icon aria-hidden="true" /><span>{title}</span></S.SolutionItem></MotionReveal>)}</S.SolutionStrip></S.Section>

          <S.PreviousScenario><MotionReveal direction="up"><S.ScenarioGrid><div><h2>Processos dependentes de planilhas e lançamentos manuais</h2><p>Antes da implantação do ERP, a operação dependia de controles paralelos, planilhas e lançamentos manuais. Isso gerava retrabalho, falta de integração entre setores e maior risco de inconsistências.</p></div><S.ProblemList>{previousProblems.map(({ icon: Icon, title }) => <li key={title}><Icon aria-hidden="true" /><span>{title}</span></li>)}</S.ProblemList></S.ScenarioGrid></MotionReveal></S.PreviousScenario>

          <S.PracticeSection><MotionReveal direction="up"><S.SectionHeading><h2>O que foi feito na prática</h2><p>A implantação envolveu organização de processos, configuração do sistema, integração entre áreas e acompanhamento da equipe.</p></S.SectionHeading></MotionReveal><S.AccordionWrapper><Accordion flush defaultActiveKey="0"><Accordion.Item eventKey="0"><Accordion.Header>Implantação do sistema W3ERP</Accordion.Header><Accordion.Body>Implementação completa do sistema, desde a parametrização inicial até a entrada em operação, garantindo uma base sólida, organizada e alinhada às necessidades do negócio.</Accordion.Body></Accordion.Item><Accordion.Item eventKey="1"><Accordion.Header>Estruturação dos processos comerciais</Accordion.Header><Accordion.Body>Revisão e padronização dos fluxos de vendas, desde o atendimento inicial até o faturamento, trazendo mais controle, agilidade e previsibilidade nas operações comerciais.</Accordion.Body></Accordion.Item><Accordion.Item eventKey="2"><Accordion.Header>Integração dos módulos de vendas, estoque e financeiro</Accordion.Header><Accordion.Body>Unificação das informações entre os setores, eliminando retrabalho e inconsistências, além de proporcionar uma visão integrada e em tempo real das operações da empresa.</Accordion.Body></Accordion.Item><Accordion.Item eventKey="3"><Accordion.Header>Capacitação da equipe operacional</Accordion.Header><Accordion.Body>Treinamento prático dos colaboradores para utilização eficiente do sistema, garantindo autonomia, redução de erros e melhor aproveitamento dos recursos disponíveis.</Accordion.Body></Accordion.Item><Accordion.Item eventKey="4"><Accordion.Header>Acompanhamento após a implantação</Accordion.Header><Accordion.Body>Suporte contínuo para ajustes, dúvidas dos usuários e evolução dos processos conforme as necessidades da empresa.</Accordion.Body></Accordion.Item></Accordion></S.AccordionWrapper></S.PracticeSection>

          <S.Section><MotionReveal direction="up"><S.SectionHeading><h2>Soluções além do ERP</h2><p>A atuação da INVETEC também envolve suporte tecnológico, comunicação corporativa, arquivos em nuvem, proteção de dados e presença institucional.</p></S.SectionHeading></MotionReveal><S.SolutionsGrid>{additionalSolutions.map(({ icon: Icon, title, text }, index) => <MotionReveal key={title} direction="up" delay={index * 0.06}><S.SolutionCard><S.CardHeader><Icon aria-hidden="true" /><h3>{title}</h3></S.CardHeader><p>{text}</p></S.SolutionCard></MotionReveal>)}</S.SolutionsGrid></S.Section>

          <S.Results><MotionReveal direction="up"><S.SectionHeading><h2>Melhorias alcançadas</h2><p>As soluções aplicadas integraram processos, reduziram retrabalho e melhoraram a organização tecnológica e institucional da empresa.</p></S.SectionHeading></MotionReveal><S.ResultsGrid>{outcomes.map(({ icon: Icon, title, text }, index) => <MotionReveal key={title} direction="up" delay={index * 0.05}><S.ResultCard><S.CardHeader><Icon aria-hidden="true" /><h3>{title}</h3></S.CardHeader><p>{text}</p></S.ResultCard></MotionReveal>)}</S.ResultsGrid></S.Results>

          <S.Section><MotionReveal direction="up"><S.SectionHeading><h2>Operação integrada na prática</h2><p>Hoje os principais processos da empresa trabalham de forma conectada, reduzindo controles paralelos e automatizando etapas operacionais.</p></S.SectionHeading></MotionReveal><S.FlowGrid>{flowSteps.map(({ icon: Icon, title, text }, index) => <MotionReveal key={title} direction="up" delay={index * 0.04}><S.FlowStep><S.FlowHeader><span>{index + 1}</span><Icon aria-hidden="true" /><h3>{title}</h3></S.FlowHeader><p>{text}</p></S.FlowStep></MotionReveal>)}</S.FlowGrid></S.Section>

          <S.BeforeAfter><MotionReveal direction="up"><S.SectionHeading><h2>Antes e depois na prática</h2><p>A mudança não ocorreu apenas no sistema, mas na forma como os processos passaram a funcionar no dia a dia.</p></S.SectionHeading></MotionReveal><S.CompareGrid><S.CompareCard><h3>Antes: planilhas e retrabalho</h3><S.ImageButton type="button" aria-label="Ampliar imagem do controle em planilha" onClick={event => openLightbox({ src: beforeImage, alt: 'Controle de pedidos em planilha' }, event.currentTarget)}><img src={beforeImage} alt="Controle de pedidos em planilha" width={1000} height={400} /></S.ImageButton><ul><li>Pedidos controlados em Excel</li><li>Vendedores sem registro direto no sistema</li><li>Financeiro alimentado manualmente</li><li>Alto risco de erro e perda de informação</li></ul></S.CompareCard><S.CompareCard $highlight><h3>Depois: W3ERP integrado</h3><S.ImageButton type="button" aria-label="Ampliar imagem do sistema W3ERP integrado" onClick={event => openLightbox({ src: afterImage, alt: 'Pedidos registrados no sistema W3ERP' }, event.currentTarget)}><img src={afterImage} alt="Pedidos registrados no sistema W3ERP" width={1000} height={400} /></S.ImageButton><ul><li>Pedidos registrados diretamente no sistema</li><li>Integração automática com o financeiro</li><li>Controle de estoque em tempo real</li><li>Processos padronizados e com menos retrabalho</li></ul></S.CompareCard></S.CompareGrid></S.BeforeAfter>

          <S.Conclusion><MotionReveal direction="up"><h2>Tecnologia alinhada aos processos da empresa</h2><p>O resultado do projeto não veio apenas da implantação do sistema. Foi necessário organizar processos, integrar setores, capacitar a equipe e manter acompanhamento contínuo.</p><p>Com ERP, suporte de TI, comunicação corporativa, cloud, site e SEO trabalhando em conjunto, o Grupo JPM passou a operar com uma estrutura mais organizada e preparada para evoluir.</p></MotionReveal></S.Conclusion>
          <S.CTA><MotionReveal direction="up"><div><h2>Sua empresa também precisa organizar processos e tecnologia?</h2><p>Converse com a INVETEC para avaliar quais soluções podem melhorar a operação, a infraestrutura e a gestão da sua empresa.</p></div><Link to="/contato">Entre em contato</Link></MotionReveal></S.CTA>
        </S.Container>
        {selectedImage && <S.Lightbox role="dialog" aria-modal="true" aria-label="Imagem ampliada do caso Grupo JPM" onMouseDown={event => { if (event.target === event.currentTarget) closeLightbox(); }}><S.CloseButton ref={closeButtonRef} type="button" aria-label="Fechar imagem ampliada" onClick={closeLightbox}>×</S.CloseButton><img src={selectedImage.src} alt={selectedImage.alt} width={1000} height={400} onMouseDown={event => event.stopPropagation()} /></S.Lightbox>}
      </PageHeroSection>
    </>
  );
};
