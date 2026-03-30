import { PageHeroSection } from '@/components/PageHeroSection/PageHeroSection';
import * as S from './Sobre.styles';
import { MotionReveal } from '@/components/Motion/MotionReveal/MotionReveal';
import heroImage from '@/assets/images/PagesHero-Sobre2.jpg';

const diferenciais = [
  {
    title: 'Experiência',
    content:
      'Mais de 20 anos de atuação em Tecnologia da Informação, atendendo empresas de diversos segmentos.',
  },
  {
    title: 'Soluções completas',
    content:
      'ERP, infraestrutura, cloud, e-mail corporativo e desenvolvimento web em um único parceiro.',
  },
  {
    title: 'Atendimento próximo',
    content:
      'Relacionamento direto com o cliente, entendendo a real necessidade de cada negócio.',
  },
  {
    title: 'Parcerias sólidas',
    content:
      'Trabalho conjunto com empresas consolidadas do mercado para entregar soluções confiáveis.',
  },
];

export const Sobre = () => {
  return (
    <PageHeroSection
      title="Sobre a Invetec"
      subTitle="Tecnologia aplicada para transformar negócios"
      image={heroImage}
    >
      <S.Container>
        {/* INTRODUÇÃO */}
        <S.Intro>
          <p>
            A <strong>INVETEC</strong> é especializada em soluções em tecnologia
            para empresas, atuando com ERP, infraestrutura, cloud e
            desenvolvimento web.
          </p>

          <p>
            Nosso objetivo é ajudar empresas a utilizarem a tecnologia de forma
            estratégica, melhorando processos, reduzindo custos e aumentando a
            eficiência operacional.
          </p>

          <S.Highlight>
            +20 anos de experiência em Tecnologia da Informação
          </S.Highlight>
        </S.Intro>

        {/* DIFERENCIAIS */}
        <S.SectionTitle>Diferenciais</S.SectionTitle>

        <S.Grid>
          {diferenciais.map((item, index) => (
            <MotionReveal key={item.title} delay={index * 0.2}>
              <S.Card>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </S.Card>
            </MotionReveal>
          ))}
        </S.Grid>
      </S.Container>
    </PageHeroSection>
  );
};
