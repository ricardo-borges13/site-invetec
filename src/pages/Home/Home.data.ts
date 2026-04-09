import image1 from '@/assets/images/Escudo-IT-500x500.png';
import erpImg from '@/assets/images/Card-W3.jpg';
import email from '@/assets/images/Card-E-mail.jpg';
import ecommerce from '@/assets/images/Card-E-commerce.jpg';
import web from '@/assets/images/Card-Web.jpg';
import digital from '@/assets/images/Card-Digital.jpg';
import ti from '@/assets/images/Card-TI.jpg';

import type { SectionInfoProps } from '../../components/Sections/SectionInfo/SectionInfo';

export const sobreData: SectionInfoProps = {
  title: 'Sobre a Invetec',
  description: `
    <section>

  <p>
    A <strong>INVETEC</strong> é especializada em
    <strong>soluções em tecnologia para empresas</strong>,
    atuando com <strong>ERP</strong>, infraestrutura,
    <strong>cloud</strong> e desenvolvimento web.
  </p>

  <p class="highlight">
    <strong>+20 anos ajudando empresas a crescer com tecnologia.</strong>
  </p>
</section>
  `,
  image1,
  buttonText: 'Saiba mais',
  path: '/sobre',
};

export const servicesData = [
  {
    image: erpImg,
    title: 'Sistema ERP',
    subtitle: 'Controle total da empresa em um único sistema',
    path: '/servicos/erp',
  },
  {
    image: email,
    title: 'E-mail Corporativo',
    subtitle: 'E-mails profissionais com segurança e comunicação profissional',
    path: '/servicos/zimbra',
  },
  {
    image: ecommerce,
    title: 'E-commerce',
    subtitle: 'Integrada com pagamentos, marketplaces e pronta para vender.',
    path: '/servicos/e-commerce',
  },
  {
    image: web,
    title: 'Criação de Sites',
    subtitle: 'Sites institucionais focados em geração de clientes',
    path: '/servicos/criacao-de-sites',
  },
  {
    image: digital,
    title: 'Marketing Digital',
    subtitle: 'Gestão de redes e campanhas para atrair clientes',
    path: '/servicos/marketing-digital',
  },
  {
    image: ti,
    title: 'Gestão de TI para Empresas',
    subtitle: 'Organização, segurança e suporte contínuo',
    path: '/servicos/suporte-ti',
  },
];
