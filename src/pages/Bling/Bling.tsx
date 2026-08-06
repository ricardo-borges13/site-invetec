import heroImage from '@/assets/images/PagesHeroBling-v2.jpg';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import { SEO } from '@/components/SEO/Seo';
import { useEffect, useRef, useState } from 'react';
import {
  FiBarChart2,
  FiCheck,
  FiChevronDown,
  FiCloud,
  FiDollarSign,
  FiFileText,
  FiPackage,
  FiShoppingBag,
  FiUsers,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as S from './Bling.styles';

const affiliateUrl = 'https://www.bling.com.br/planos-e-precos/INVETEC';

const areas = [
  [
    FiShoppingBag,
    'Vendas e pedidos',
    'Centralize pedidos, clientes e movimentações comerciais.',
  ],
  [
    FiPackage,
    'Estoque',
    'Acompanhe entradas, saídas, saldos e movimentações de produtos.',
  ],
  [
    FiDollarSign,
    'Financeiro',
    'Organize contas a pagar, contas a receber e fluxo financeiro.',
  ],
  [
    FiFileText,
    'Emissão fiscal',
    'Emita documentos fiscais conforme as configurações e regras aplicáveis à empresa.',
  ],
  [
    FiCloud,
    'E-commerce e marketplaces',
    'Conecte canais de venda conforme as integrações disponíveis e o plano contratado.',
  ],
  [
    FiBarChart2,
    'Relatórios e gestão',
    'Acompanhe informações importantes da operação em um único ambiente.',
  ],
] as const;

const faqItems = [
  [
    'O Bling funciona pela internet?',
    'Sim. O Bling é um sistema 100% online e o acesso é feito pelo navegador. A empresa precisa contar com conexão estável para utilizar a plataforma.',
  ],
  [
    'O teste realmente dura 30 dias?',
    'O Bling disponibiliza um período de teste de 30 dias. As condições, funcionalidades e regras aplicáveis ao teste devem seguir as informações apresentadas na página oficial no momento do cadastro.',
  ],
  [
    'Preciso cadastrar cartão para testar?',
    'O processo de cadastro e as exigências podem mudar. O usuário deve verificar as condições apresentadas pelo Bling no momento da criação da conta.',
  ],
  [
    'Quais recursos posso testar?',
    'As funcionalidades disponíveis durante o teste podem variar conforme o plano ou as condições definidas pelo Bling. Antes de iniciar, é importante verificar quais recursos estarão liberados.',
  ],
  [
    'A INVETEC faz a implantação?',
    'A INVETEC pode apoiar a configuração inicial, organização de cadastros, estruturação de rotinas, treinamento e entrada em operação, conforme o escopo contratado.',
  ],
  [
    'O Bling integra com marketplaces?',
    'O Bling possui integrações com canais de venda e marketplaces. A disponibilidade depende das integrações suportadas, do plano contratado e das configurações de cada canal.',
  ],
  [
    'Qual plano devo escolher?',
    'A escolha depende do volume da operação, recursos necessários, usuários, integrações e canais de venda. A INVETEC pode ajudar a avaliar o cenário antes da contratação.',
  ],
  [
    'O Bling é adequado para qualquer empresa?',
    'Não. O Bling costuma atender melhor empresas com processos mais padronizados e menor necessidade de parametrização. Operações mais complexas podem exigir outro modelo de ERP.',
  ],
] as const;

const criteria = [
  'Empresas com processos mais padronizados',
  'Necessidade de emissão fiscal e controle financeiro',
  'Operação com estoque, vendas e pedidos',
  'Negócios que utilizam loja física, e-commerce ou marketplaces',
] as const;

export const Bling = () => {
  const supportRef = useRef<HTMLElement | null>(null);
  const [phone, setPhone] = useState<string>();
  const supportMessage =
    'Olá, quero ajuda para configurar o Bling e começar corretamente.';
  const whatsappUrl = phone
    ? `https://wa.me/${phone}?text=${encodeURIComponent(supportMessage)}`
    : '/contato';

  useEffect(() => {
    fetch('/whatsApp.json')
      .then(response => response.json())
      .then(({ phone: configuredPhone }) => setPhone(configuredPhone))
      .catch(() => undefined);
  }, []);

  const scrollToSupport = () =>
    supportRef.current?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
      block: 'start',
    });

  return (
    <>
      <SEO
        title="ERP Bling para Pequenas Empresas | Teste por 30 Dias | INVETEC"
        description="Organize vendas, estoque, financeiro e emissão fiscal com o Bling. Teste por 30 dias e conte com a INVETEC para apoiar a configuração."
        image="https://www.invetec.com.br/images/SEO-Bling.jpg"
        url="https://www.invetec.com.br/servicos/erp/bling"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map(([name, text]) => ({
            '@type': 'Question',
            name,
            acceptedAnswer: { '@type': 'Answer', text },
          })),
        }}
      />

      <PageHeroSection
        semanticMain={false}
        compactMobile
        brandContent={<S.Eyebrow>ERP PARA OPERAÇÕES MAIS ENXUTAS</S.Eyebrow>}
        title="Organize vendas, estoque, financeiro e emissão fiscal em um único sistema"
        subTitle="Comece com um ERP 100% online, teste por 30 dias e conte com a INVETEC para configurar sua operação corretamente."
        subTitleMaxWidth="760px"
        image={heroImage}
        heroContent={
          <S.HeroContent>
            <S.ActionLink
              href={affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Testar o Bling por 30 dias
            </S.ActionLink>
            <S.HeroSecondary type="button" onClick={scrollToSupport}>
              Quero ajuda para começar
            </S.HeroSecondary>
            <S.Benefits>
              <span>
                <FiCloud aria-hidden="true" />
                Sistema 100% online
              </span>
              <span>
                <FiCheck aria-hidden="true" />
                Teste por 30 dias
              </span>
              <span>
                <FiUsers aria-hidden="true" />
                Apoio opcional da INVETEC
              </span>
            </S.Benefits>
          </S.HeroContent>
        }
      />

      <main>
        <S.Container>
          <S.Section>
            <MotionReveal>
              <S.Intro>
                <S.Eyebrow>OPERAÇÃO MAIS SIMPLES</S.Eyebrow>
                <h2>
                  Uma solução prática para organizar operações mais enxutas
                </h2>
                <p>
                  O Bling é um ERP 100% online indicado para empresas que
                  precisam centralizar vendas, estoque, financeiro, emissão
                  fiscal e canais de venda sem iniciar um projeto complexo de
                  implantação.
                </p>
              </S.Intro>
            </MotionReveal>
            <S.Criteria>
              {criteria.map((item, index) => (
                <MotionReveal
                  key={item}
                  delay={index * 0.08}
                  distance={18}
                  direction="up"
                  duration={0.45}
                >
                  <S.CriteriaCard>
                    <FiCheck aria-hidden="true" />
                    <span>{item}</span>
                  </S.CriteriaCard>
                </MotionReveal>
              ))}
            </S.Criteria>
            <MotionReveal delay={0.32} distance={14} direction="up">
              <S.Note>
                Quando a operação exige regras muito específicas, múltiplos
                setores ou parametrizações mais complexas, outra solução de ERP
                pode ser mais adequada.
              </S.Note>

              <S.TextLink as={Link} to="/servicos/erp">
                Voltar à comparação entre os sistemas →
              </S.TextLink>
            </MotionReveal>
          </S.Section>

          <S.Section>
            <MotionReveal>
              <S.Intro>
                <h2>O que o Bling ajuda a organizar</h2>
              </S.Intro>
            </MotionReveal>
            <S.AreaGrid>
              {areas.map(([Icon, title, description]) => (
                <article key={title}>
                  <Icon aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </S.AreaGrid>
          </S.Section>

          <S.Section id="apoio-invetec" ref={supportRef}>
            <MotionReveal>
              <S.Intro>
                <S.Eyebrow>COMO COMEÇAR</S.Eyebrow>
                <h2>Você pode começar sozinho ou contar com a INVETEC</h2>
                <p>
                  O cadastro e o teste podem ser feitos diretamente no Bling.
                  Para empresas que preferem iniciar com mais segurança, a
                  INVETEC apoia a configuração inicial e a organização das
                  principais rotinas.
                </p>
              </S.Intro>
            </MotionReveal>
            <S.StartGrid>
              <article>
                <h3>Começar por conta própria</h3>
                <S.CheckList>
                  {[
                    'Criar a conta',
                    'Escolher o plano',
                    'Testar os recursos disponíveis',
                    'Configurar a operação com os materiais e orientações do Bling',
                  ].map(item => (
                    <li key={item}>
                      <FiCheck aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </S.CheckList>
                <S.ActionLink
                  href={affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Testar o Bling por 30 dias
                </S.ActionLink>
              </article>
              <article>
                <h3>Começar com apoio da INVETEC</h3>
                <S.CheckList>
                  {[
                    'Análise inicial da necessidade',
                    'Orientação sobre cadastros e permissões',
                    'Apoio na configuração fiscal',
                    'Estruturação de financeiro e estoque',
                    'Orientação sobre vendas e pedidos',
                    'Apoio nas integrações necessárias',
                    'Treinamento inicial',
                    'Suporte na entrada em operação',
                  ].map(item => (
                    <li key={item}>
                      <FiCheck aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </S.CheckList>
                <S.ActionLink
                  href={whatsappUrl}
                  target={phone ? '_blank' : undefined}
                  rel={phone ? 'noopener noreferrer' : undefined}
                >
                  Quero ajuda para configurar o Bling
                </S.ActionLink>
              </article>
            </S.StartGrid>
          </S.Section>

          <S.Section>
            <MotionReveal>
              <S.Intro>
                <S.Eyebrow>DÚVIDAS FREQUENTES</S.Eyebrow>
                <h2>Perguntas sobre o Bling</h2>
              </S.Intro>
            </MotionReveal>
            <S.Faq>
              {faqItems.map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    {question}
                    <FiChevronDown aria-hidden="true" />
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </S.Faq>
          </S.Section>
          <S.FinalCta>
            <MotionReveal>
              <h2>Escolha como deseja começar</h2>
              <p>
                Teste o Bling por 30 dias ou fale com a INVETEC para avaliar o
                apoio necessário na configuração da sua operação.
              </p>
              <S.ActionGroup>
                <S.ActionLink
                  href={affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Testar o Bling por 30 dias
                </S.ActionLink>
                <S.SecondaryLink
                  href={whatsappUrl}
                  target={phone ? '_blank' : undefined}
                  rel={phone ? 'noopener noreferrer' : undefined}
                >
                  Falar com a INVETEC
                </S.SecondaryLink>
              </S.ActionGroup>
            </MotionReveal>
          </S.FinalCta>
        </S.Container>
      </main>
    </>
  );
};
