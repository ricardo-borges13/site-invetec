import avatar2 from '@/assets/images/Depoimentos/Junior.webp';
import avatar3 from '@/assets/images/Depoimentos/Heitor.webp';
import avatar4 from '@/assets/images/Depoimentos/Renata.webp';
import avatar1 from '@/assets/images/Depoimentos/Borges.png';

export type Testimonial = {
  id: string;
  name: string;
  role?: string;
  company?: string;
  testimonial: string;
  services?: string[];
  avatar?: string;
  avatarWidth?: number;
  avatarHeight?: number;
  companyLogo?: string;
  imageAlt?: string;
  rating?: number;
  videoUrl?: string;
  featured?: boolean;
};

// TODO: substituir estes depoimentos temporários pelos quatro depoimentos reais e autorizados de clientes da INVETEC antes da publicação em produção.
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-01',
    name: 'Borges',
    company: 'Datron Tecnologia e Locação',
    role: 'Gerente de TI',
    testimonial:
      '“A INVETEC cuida da nossa área de tecnologia desde 2005. Ao longo desses anos, implantou e passou a acompanhar diferentes soluções na empresa, como ERP, e-mail corporativo, servidores em nuvem, infraestrutura e suporte de TI. Essa parceria nos dá mais segurança e tranquilidade para manter a operação funcionando no dia a dia.”',
    avatar: avatar1,
    avatarWidth: 300,
    avatarHeight: 300,
    rating: 5,
  },
  {
    id: 'testimonial-02',
    name: 'Júnior Marliere',
    company: 'JPM Borrachas e Materiais Elétricos',
    role: 'Gerente Comercial',
    testimonial:
      'O W3ERP trouxe uma mudança importante para a nossa empresa. Conseguimos integrar faturamento, estoque, financeiro e comercial em um único sistema, melhorando o controle das informações e a organização dos processos. Com as soluções e o suporte da INVETEC, nossas operações passaram a fluir de forma mais tranquila no dia a dia.',
    avatar: avatar2,
    avatarWidth: 398,
    avatarHeight: 611,
    rating: 5,
  },
  {
    id: 'testimonial-03',
    name: 'Robson Heitor',
    company: 'Consulter Soluções',
    role: 'Diretor Comercial',
    testimonial:
      'A INVETEC trouxe mais organização e segurança para nossa operação. Com o INVETEC Mail, melhoramos a comunicação da equipe; o File Server em Nuvem facilitou o acesso e o compartilhamento dos arquivos; e o suporte de TI nos atende com agilidade sempre que precisamos. Hoje temos uma estrutura mais confiável e centralizada para trabalhar.',
    avatar: avatar3,
    avatarWidth: 319,
    avatarHeight: 425,
    rating: 5,
  },
  {
    id: 'testimonial-04',
    name: 'Renata B. Soares',
    company: 'Revele Semijoias',
    role: 'Diretora',
    testimonial:
      'A INVETEC desenvolveu nosso site institucional e uma página voltada para conversão de vendas, deixando nossa presença digital mais profissional e organizada. Sempre que precisamos, também contamos com um suporte rápido e próximo.',
    avatar: avatar4,
    avatarWidth: 203,
    avatarHeight: 257,
    rating: 5,
  },

];
