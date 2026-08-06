import ecommerce from '@/assets/images/Card-E-commerce.jpg';
import cloud from '@/assets/images/Cloud-FileServer.webp';
import email from '@/assets/images/Card-E-mail.jpg';
import erpImg from '@/assets/images/Card-W3.jpg';
import web from '@/assets/images/Card-Web.jpg';
import image1 from '@/assets/images/sobre.jpg';
import ti from '@/assets/images/Card-TI.jpg';

import type { SectionInfoProps } from '../../components/Sections/SectionInfo/SectionInfo';
import type { Badge } from '../../components/Sections/ServiceSection/CardService/CardService';

export type ServiceData = {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  path: string;
  badge?: Badge;
  featured?: boolean;
};

export const sobreData: SectionInfoProps = {
  title: 'Sobre a Invetec',
  description: `
    <section>
      <p>
        A <strong>INVETEC</strong> não vende apenas tecnologia. Ajuda empresas a
        tomarem decisões mais seguras sobre como estruturar e evoluir sua operação.
      </p>
      <p>
        Atuamos na escolha e implantação de ERP, infraestrutura, e-mails corporativos,
        sites e soluções digitais — sempre com foco em organização e resultado.
      </p>
      <p class="highlight">
        <strong>Mais de 20 anos ajudando empresas a crescer com tecnologia — da forma certa.</strong>
      </p>
    </section>
  `,
  image1,
  buttonText: 'Entenda como trabalhamos',
  path: '/sobre',
};

export const servicesData: ServiceData[] = [
  {
    image: web,
    imageAlt: 'Ilustração de criação de sites profissionais',
    title: 'Criação de Sites',
    subtitle: 'Sites profissionais com SEO e estrutura para gerar novos clientes.',
    path: '/servicos/criacao-de-sites',
    badge: { label: 'Foco em geração de clientes', variant: 'sites' as const },
    featured: true,
  },
  {
    image: email,
    imageAlt: 'Ilustração de e-mail corporativo',
    title: 'INVETEC Mail',
    subtitle: 'E-mail corporativo com mais controle, segurança e suporte próximo.',
    path: '/servicos/invetec-mail',
    badge: { label: 'Mais procurado', variant: 'popular' as const },
  },
  {
    image: erpImg,
    imageAlt: 'Ilustração de sistema ERP',
    title: 'Sistema ERP',
    subtitle: 'Vendas, estoque e financeiro integrados em um único sistema.',
    path: '/servicos/erp',
  },
  {
    image: cloud,
    imageAlt: 'Ilustração de nuvem com arquivos e proteção de dados',
    title: 'Cloud para Empresas',
    subtitle: 'File Server e backup em nuvem para organizar, acessar e proteger os dados.',
    path: '/servicos/cloud',
    badge: { label: 'Arquivos e proteção', variant: 'cloud' as const },
  },
  {
    image: ecommerce,
    imageAlt: 'Ilustração de loja virtual e e-commerce',
    title: 'E-commerce',
    subtitle: 'Loja virtual integrada a pagamentos e marketplaces, pronta para vender.',
    path: '/servicos/e-commerce',
  },
  {
    image: ti,
    imageAlt: 'Ilustração de gestão de tecnologia da informação',
    title: 'Gestão de TI para Empresas',
    subtitle: 'Suporte, segurança e organização da tecnologia da sua empresa.',
    path: '/servicos/suporte-ti',
  },
];
