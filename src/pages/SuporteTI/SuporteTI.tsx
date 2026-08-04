import { CustomButton } from '@/components/CustomButton/CustomButton';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { SEO } from '@/components/SEO/Seo';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import {
  FiActivity,
  FiAlertCircle,
  FiCheck,
  FiCloud,
  FiCpu,
  FiHeadphones,
  FiLock,
  FiMonitor,
  FiServer,
  FiShield,
  FiUsers,
  FiWifi,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as S from './SuporteTI.styles';
import heroImage from '@/assets/images/PagesHero-Suporte-v2.jpg';

const benefits = [
  [
    FiActivity,
    'Menos problemas recorrentes',
    'Atuação sobre causas, não apenas sobre sintomas.',
  ],
  [
    FiUsers,
    'Mais controle',
    'Organização de equipamentos, usuários, acessos e serviços.',
  ],
  [
    FiShield,
    'Mais segurança',
    'Redução de riscos e melhoria das práticas de proteção.',
  ],
  [
    FiHeadphones,
    'Suporte alinhado ao negócio',
    'Tecnologia analisada conforme o impacto na operação.',
  ],
] as const;
const pains = [
  'Problemas que sempre voltam',
  'Computadores configurados de formas diferentes',
  'Usuários e acessos sem controle',
  'Backups sem validação',
  'Rede instável ou mal documentada',
  'Decisões tomadas apenas quando algo quebra',
];
const services = [
  [
    FiHeadphones,
    'Suporte aos usuários',
    'Atendimento para dúvidas, configurações e problemas do dia a dia.',
  ],
  [
    FiMonitor,
    'Computadores e dispositivos',
    'Padronização, configuração, atualização e orientação sobre substituições.',
  ],
  [
    FiWifi,
    'Redes e conectividade',
    'Organização da rede, identificação de falhas e melhoria da estabilidade.',
  ],
  [
    FiServer,
    'Servidores e serviços em nuvem',
    'Acompanhamento de recursos locais e soluções em nuvem usadas pela empresa.',
  ],
  [
    FiLock,
    'Segurança e controle de acessos',
    'Organização de usuários, permissões e práticas de proteção do ambiente.',
  ],
  [
    FiCloud,
    'Backup e continuidade',
    'Estruturação de rotinas de backup e recuperação de informações.',
  ],
] as const;
const steps = [
  [
    '01',
    'Entendimento do ambiente',
    'Levantamento da estrutura, usuários, equipamentos e principais dificuldades.',
  ],
  [
    '02',
    'Identificação de prioridades',
    'Análise dos riscos, falhas recorrentes e melhorias mais importantes.',
  ],
  [
    '03',
    'Organização e execução',
    'Aplicação das ações aprovadas conforme o escopo definido.',
  ],
  [
    '04',
    'Acompanhamento',
    'Suporte e evolução do ambiente de acordo com o modelo contratado.',
  ],
] as const;
type FormData = {
  nome: string;
  empresa: string;
  telefone: string;
  email: string;
  computadores: string;
  necessidade: string;
  mensagem: string;
  origem: string;
};

export const SuporteTI = () => {
  const formRef = useRef<HTMLElement | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    shouldFocusError: true,
    defaultValues: { origem: 'Página Gestão e Suporte de TI' },
  });
  const scrollForm = () =>
    formRef.current?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
      block: 'start',
    });
  const whatsapp = () =>
    window.open(
      `https://wa.me/5531997101336?text=${encodeURIComponent('Olá, gostaria de saber mais sobre Gestão e Suporte de TI.')}`,
      '_blank',
      'noopener,noreferrer'
    );
  void whatsapp;
  const submit = async (data: FormData) => {
    try {
      const r = await fetch('https://formspree.io/f/xpqkzqaz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!r.ok) throw Error();
      toast.success(
        'Recebemos suas informações. A INVETEC entrará em contato em breve.'
      );
      reset();
    } catch {
      toast.error('Não foi possível enviar agora. Tente novamente mais tarde.');
    }
  };
  return (
    <>
      <SEO
        title="Gestão e Suporte de TI para Empresas | INVETEC"
        description="Organize a tecnologia da sua empresa com gestão e suporte de TI. Mais controle, segurança, estabilidade, prevenção de falhas e acompanhamento técnico."
        image="https://www.invetec.com.br/images/SEO-SuporteTI.jpg"
        url="https://www.invetec.com.br/servicos/suporte-ti"
      />
      <S.Hero $image={heroImage}>
        <S.HeroContent>
          <span>GESTÃO E SUPORTE DE TI PARA EMPRESAS</span>
          <h1><span hidden>
            Tecnologia organizada para sua empresa trabalhar com mais segurança
          </span><span>Tecnologia organizada para uma operação mais segura</span></h1>
          <p hidden>
            A INVETEC ajuda sua empresa a organizar computadores, acessos,
            redes, segurança e serviços essenciais, reduzindo improvisos e
            problemas recorrentes na operação.
          </p><p>A INVETEC organiza infraestrutura, acessos, sistemas e serviços essenciais para reduzir improvisos, riscos e problemas recorrentes na sua empresa.</p>
          <S.Actions>
            <CustomButton variant="cta" onClick={scrollForm}>
              Solicitar avaliação de TI
            </CustomButton>
          </S.Actions>
          <small>
            Atendimento consultivo <b>•</b> Suporte remoto <b>•</b> Soluções de
            acordo com o ambiente
          </small>
        </S.HeroContent>
      </S.Hero>
      <S.Page>
        <S.Benefits>
          {benefits.map(([Icon, title, text]) => (
            <MotionReveal key={title}>
              <article>
                <Icon />
                <div>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </S.Benefits>
        <S.Section>
          <S.Intro>
            <span>ORGANIZAÇÃO E PREVENÇÃO</span>
            <h2>Sua empresa ainda administra a TI no improviso?</h2>
            <p>
              Quando não existem padrões, documentação e acompanhamento,
              pequenos problemas passam a afetar produtividade, segurança e
              continuidade da operação.
            </p>
          </S.Intro>
          <S.Grid>
            {pains.map(item => (
              <article key={item}>
                <FiAlertCircle />
                {item}
              </article>
            ))}
          </S.Grid>
          <S.Note>
            Esses sinais geram retrabalho, interrupções e riscos que poderiam
            ser reduzidos com uma gestão mais organizada.
          </S.Note>
        </S.Section>
        <S.Section>
          <S.Intro>
            <span>GESTÃO DE TI</span>
            <h2>
              Mais do que corrigir problemas: organizar a tecnologia da empresa
            </h2>
            <p>
              O suporte pontual resolve uma ocorrência. A gestão de TI analisa o
              ambiente como um conjunto e acompanha sua evolução.
            </p>
          </S.Intro>
          <S.Compare>
            <article>
              <h3>Suporte apenas reativo</h3>
              {[
                'Atua depois que o problema aparece',
                'Resolve ocorrências isoladas',
                'Mantém dependência de emergências',
                'Pouco conhecimento do ambiente',
                'Falta de planejamento e documentação',
              ].map(x => (
                <p key={x}>
                  <FiCheck />
                  {x}
                </p>
              ))}
            </article>
            <article className="featured">
              <h3>Gestão de TI com a INVETEC</h3>
              {[
                'Identificação de causas recorrentes',
                'Organização de equipamentos e acessos',
                'Documentação do ambiente',
                'Definição de prioridades',
                'Acompanhamento das necessidades da empresa',
                'Recomendações de melhorias',
              ].map(x => (
                <p key={x}>
                  <FiCheck />
                  {x}
                </p>
              ))}
            </article>
          </S.Compare>
        </S.Section>
        <S.Cta>
          <div>
            <h2>Sua empresa enfrenta problemas recorrentes de TI?</h2>
            <p>
              Uma análise inicial pode ajudar a identificar prioridades e os
              pontos que mais afetam a operação.
            </p>
          </div>
          <CustomButton variant="cta" onClick={scrollForm}>
            Solicitar avaliação
          </CustomButton>
        </S.Cta>
        <S.Section>
          <S.Intro>
            <span>ÁREAS DE ATUAÇÃO</span>
            <h2>Como a INVETEC pode apoiar sua empresa</h2>
            <p>
              A estrutura do serviço é definida conforme o ambiente, as
              necessidades e o modelo de atendimento contratado.
            </p>
          </S.Intro>
          <S.ServiceGrid>
            {services.map(([Icon, title, text]) => (
              <MotionReveal key={title}>
                <article>
                  <Icon />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </MotionReveal>
            ))}
          </S.ServiceGrid>
        </S.Section>
        <S.Experience>
          <div>
            <span>EXPERIÊNCIA APLICADA</span>
            <h2>Experiência técnica conectada à operação da empresa</h2>
            <p>
              A INVETEC combina conhecimento técnico com experiência prática em
              ambientes empresariais. Isso permite analisar a tecnologia pelo
              impacto que ela causa na operação, e não apenas pelo equipamento
              ou sistema isolado.
            </p>
            <p>A INVETEC atua além da correção de problemas técnicos.</p>
            <ul>
              {[
                'Infraestrutura e redes',
                'Servidores e serviços em nuvem',
                'ERP e processos empresariais',
                'Usuários, permissões e segurança',
                'Integração entre setores',
                'Continuidade operacional',
              ].map(x => (
                <li key={x}>
                  <FiCheck />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <aside>
            {[
              'Visão técnica',
              'Conhecimento de processos',
              'Análise de riscos',
              'Planejamento de melhorias',
            ].map((x, i) => (
              <article key={x}>
                <b>0{i + 1}</b>
                <span>{x}</span>
              </article>
            ))}
          </aside>
        </S.Experience>
        <S.Section>
          <S.Intro>
            <span>ATENDIMENTO</span>
            <h2>Como funciona o atendimento</h2>
          </S.Intro>
          <S.Steps>
            {steps.map(([n, t, d]) => (
              <article key={n}>
                <b>{n}</b>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </S.Steps>
        </S.Section>
        <S.Section>
          <S.Intro>
            <span>PARA QUEM É INDICADO</span>
            <h2>
              Para empresas que precisam de TI organizada, mesmo sem uma equipe
              interna
            </h2>
          </S.Intro>
          <S.Audience>
            {[
              [
                'Empresas sem profissional interno de TI',
                'Para quem precisa de apoio técnico e organização recorrente.',
              ],
              [
                'Empresas que precisam complementar sua equipe',
                'Apoio especializado em demandas, projetos e infraestrutura.',
              ],
              [
                'Pequenas e médias empresas',
                'Estrutura compatível com a realidade e as prioridades do negócio.',
              ],
            ].map(([t, d]) => (
              <article key={t}>
                <FiCpu />
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </S.Audience>
          <S.Center>
            A gestão de TI não é exclusiva de grandes empresas. Quanto maior a
            dependência da tecnologia, maior a importância de organização e
            prevenção.
          </S.Center>
        </S.Section>
        <S.Related>
          <h2>Soluções que complementam a gestão de TI</h2>
          <div>
            <Link to="/servicos/invetec-mail">INVETEC Mail</Link>
            <Link to="/servicos/erp">ERP para empresas</Link>
            <Link to="/servicos/erp/bling">ERP Bling</Link>
          </div>
        </S.Related>
        <S.FormArea id="avaliacao-ti" ref={formRef}>
          <Toaster position="top-center" />
          <div>
            <span>AVALIAÇÃO DE TI</span>
            <h2>Vamos entender a estrutura de TI da sua empresa</h2>
            <p>
              Envie as informações principais. A INVETEC entrará em contato para
              entender o ambiente e avaliar os próximos passos.
            </p>
          </div>
          <S.FormCard>
            <form onSubmit={handleSubmit(submit)}>
              <input type="hidden" {...register('origem')} />
              <S.FormGrid>
                <label>
                  Nome *
                  <input
                    autoComplete="name"
                    {...register('nome', { required: 'Informe seu nome.' })}
                  />
                  {errors.nome && <em>{errors.nome.message}</em>}
                </label>
                <label>
                  Empresa *
                  <input
                    autoComplete="organization"
                    {...register('empresa', { required: 'Informe a empresa.' })}
                  />
                  {errors.empresa && <em>{errors.empresa.message}</em>}
                </label>
                <label>
                  Telefone ou WhatsApp *
                  <input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    {...register('telefone', {
                      required: 'Informe um telefone.',
                    })}
                  />
                  {errors.telefone && <em>{errors.telefone.message}</em>}
                </label>
                <label>
                  E-mail corporativo *
                  <input
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    {...register('email', {
                      required: 'Informe um e-mail.',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Informe um e-mail válido.',
                      },
                    })}
                  />
                  {errors.email && <em>{errors.email.message}</em>}
                </label>
                <label>
                  Quantidade aproximada de computadores
                  <select {...register('computadores')}>
                    <option value="">Selecione uma opção</option>
                    {[
                      'Até 5',
                      'De 6 a 15',
                      'De 16 a 30',
                      'De 31 a 50',
                      'Mais de 50',
                      'Ainda não sei informar',
                    ].map(x => (
                      <option key={x}>{x}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Principal necessidade
                  <select {...register('necessidade')}>
                    <option value="">Selecione uma opção</option>
                    {[
                      'Suporte para usuários',
                      'Organização da infraestrutura',
                      'Redes e conectividade',
                      'Segurança e controle de acessos',
                      'Backup e serviços em nuvem',
                      'Servidores',
                      'Avaliação geral da TI',
                      'Outro',
                    ].map(x => (
                      <option key={x}>{x}</option>
                    ))}
                  </select>
                </label>
                <label className="full">
                  Mensagem opcional
                  <textarea
                    rows={3}
                    placeholder="Conte um pouco sobre o cenário da sua empresa."
                    {...register('mensagem')}
                  />
                </label>
              </S.FormGrid>
              <p className="privacy">
                Ao enviar, você concorda com o tratamento dos dados conforme a{' '}
                <a
                  href="/politica-de-privacidade"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Política de Privacidade
                </a>
                .
              </p>
              <CustomButton type="submit" variant="cta" loading={isSubmitting}>
                Solicitar avaliação de TI
              </CustomButton>
            </form>
          </S.FormCard>
        </S.FormArea>
      </S.Page>
    </>
  );
};
