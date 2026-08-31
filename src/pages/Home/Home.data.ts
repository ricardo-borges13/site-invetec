import ecommerce from '@/assets/images/Card-E-commerce.webp';
import cloud from '@/assets/images/Cloud-FileServer.webp';
import email from '@/assets/images/Card-E-mail.webp';
import erpImg from '@/assets/images/Card-W3.webp';
import web from '@/assets/images/Card-Web.webp';
import image1 from '@/assets/images/sobre.webp';
import ti from '@/assets/images/Card-TI.webp';

import type { SectionInfoProps } from '../../components/Sections/SectionInfo/SectionInfo';
import type { Badge } from '../../components/Sections/ServiceSection/CardService/CardService';

export type ServiceData = {
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
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
    imageWidth: 160,
    imageHeight: 160,
    title: 'Criação de Sites',
    subtitle: 'Sites profissionais com SEO e estrutura para gerar novos clientes.',
    path: '/servicos/criacao-de-sites',
    badge: { label: 'Foco em geração de clientes', variant: 'sites' as const },
    featured: true,
  },
  {
    image: email,
    imageAlt: 'Ilustração de e-mail corporativo',
    imageWidth: 160,
    imageHeight: 160,
    title: 'INVETEC Mail',
    subtitle: 'E-mail corporativo com mais controle, segurança e suporte próximo.',
    path: '/servicos/invetec-mail',
    badge: { label: 'Mais procurado', variant: 'popular' as const },
  },
  {
    image: erpImg,
    imageAlt: 'Ilustração de sistema ERP',
    imageWidth: 160,
    imageHeight: 160,
    title: 'Sistema ERP',
    subtitle: 'Vendas, estoque e financeiro integrados em um único sistema.',
    path: '/servicos/erp',
  },
  {
    image: cloud,
    imageAlt: 'Ilustração de nuvem com arquivos e proteção de dados',
    imageWidth: 300,
    imageHeight: 200,
    title: 'Cloud para Empresas',
    subtitle: 'File Server e backup em nuvem para organizar, acessar e proteger os dados.',
    path: '/servicos/cloud',
    badge: { label: 'Arquivos e proteção', variant: 'cloud' as const },
  },
  {
    image: ecommerce,
    imageAlt: 'Ilustração de loja virtual e e-commerce',
    imageWidth: 160,
    imageHeight: 160,
    title: 'E-commerce',
    subtitle: 'Loja virtual integrada a pagamentos e marketplaces, pronta para vender.',
    path: '/servicos/e-commerce',
  },
  {
    image: ti,
    imageAlt: 'Ilustração de gestão de tecnologia da informação',
    imageWidth: 160,
    imageHeight: 160,
    title: 'Gestão de TI para Empresas',
    subtitle: 'Suporte, segurança e organização da tecnologia da sua empresa.',
    path: '/servicos/suporte-ti',
  },
];
