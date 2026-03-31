import heroImage from '@/assets/images/PagesHero-Sobre2.jpg';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import * as S from './Sobre.styles';
import { Link } from 'react-router-dom';

const diferenciais = [
  {
    title: 'Experiência real de gestão',
    content:
      'Mais de 20 anos atuando dentro da mesma empresa como responsável por toda a área de TI.',
  },
  {
    title: 'Visão de negócio',
    content:
      'Entendimento completo dos processos empresariais: financeiro, fiscal, logística e comercial.',
  },
  {
    title: 'Soluções completas',
    content:
      'ERP, cloud, infraestrutura, e-mail corporativo e desenvolvimento web em um único parceiro.',
  },
  {
    title: 'Atendimento próximo',
    content:
      'Relacionamento direto, rápido e focado na realidade de cada cliente.',
  },
];

export const Sobre = () => {
  return (
    <PageHeroSection
      title="Sobre a Invetec"
      subTitle="Mais de 20 anos ajudando empresas a crescer com tecnologia"
      image={heroImage}
    >
      <S.Container>
        {/* INTRO */}
        <S.Intro>
          <MotionReveal>
            <h2>Transformando tecnologia em resultado</h2>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <p>
              A <strong>INVETEC</strong> é uma empresa especializada em
              transformar a tecnologia em resultados práticos para empresas.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.3}>
            <p>
              Atuamos na estruturação, otimização e suporte de ambientes de TI,
              sempre com foco em eficiência, segurança e crescimento do negócio.
            </p>
          </MotionReveal>

          <S.Highlight>
            +20 anos de experiência em Tecnologia da Informação
          </S.Highlight>
        </S.Intro>

        {/* EXPERIÊNCIA */}
        <S.Block>
          <MotionReveal>
            <S.SectionTitle>Experiência que vai além do técnico</S.SectionTitle>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <p>
              A INVETEC nasceu da vivência real de mercado. Seu fundador possui
              sólida experiência como gestor de TI, sendo responsável por toda a
              operação tecnológica de uma empresa por mais de 20 anos.
            </p>
          </MotionReveal>

          <S.List>
            <li>Implantação e gestão de ERP (TOTVS RM e W3 ERP)</li>
            <li>Administração de redes e servidores (Windows e Linux)</li>
            <li>Gestão de ambientes corporativos (AD, DNS, DHCP)</li>
            <li>Segurança da informação (GPO, firewall, políticas)</li>
            <li>Integração entre áreas: financeiro, fiscal e logística</li>
          </S.List>
        </S.Block>

        {/* SOLUÇÕES */}
        <S.Block>
          <MotionReveal>
            <S.SectionTitle>Soluções completas</S.SectionTitle>
          </MotionReveal>

          <S.Grid3>
            <S.SolutionCard>
              <strong>ERP em nuvem</strong>
              <p>Implantação, suporte e otimização do W3 ERP</p>
            </S.SolutionCard>

            <S.SolutionCard>
              <strong>Infraestrutura e Cloud</strong>
              <p>Servidores, backup e ambientes escaláveis</p>
            </S.SolutionCard>

            <S.SolutionCard>
              <strong>E-mail corporativo</strong>
              <p>Segurança, antispam e alta disponibilidade</p>
            </S.SolutionCard>

            <S.SolutionCard>
              <strong>Backup em nuvem</strong>
              <p>Proteção total dos dados da empresa</p>
            </S.SolutionCard>

            <S.SolutionCard>
              <strong>Desenvolvimento Web</strong>
              <p>Sites profissionais e sistemas sob medida</p>
            </S.SolutionCard>

            <S.SolutionCard>
              <strong>Suporte especializado</strong>
              <p>Atendimento rápido e direto</p>
            </S.SolutionCard>
          </S.Grid3>
        </S.Block>

        {/* DIFERENCIAIS */}
        <S.Block>
          <S.SectionTitle>Diferenciais</S.SectionTitle>

          <S.Grid3>
            {diferenciais.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.2}>
                <S.Card>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </S.Card>
              </MotionReveal>
            ))}
          </S.Grid3>
        </S.Block>

        {/* CTA FINAL */}
        <S.CTA>
          <h2>Sua empresa está pronta para evoluir com tecnologia?</h2>
          <p>
            Fale agora e descubra como melhorar sua estrutura de TI com
            segurança e eficiência.
          </p>

          <Link to="/contato">Falar com especialista</Link>
        </S.CTA>
      </S.Container>
    </PageHeroSection>
  );
};
