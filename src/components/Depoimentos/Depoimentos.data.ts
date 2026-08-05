import avatar1 from '@/assets/images/Depoimentos/Avatar1.png';
import avatar2 from '@/assets/images/Depoimentos/Avatar2.png';
import avatar3 from '@/assets/images/Depoimentos/Avatar3.png';
import avatar4 from '@/assets/images/Depoimentos/Avatar4.png';
import avatar5 from '@/assets/images/Depoimentos/Avatar5.png';
import avatar6 from '@/assets/images/Depoimentos/Avatar6.png';

export type Testimonial = {
  id: string;
  name: string;
  role?: string;
  company?: string;
  testimonial: string;
  services?: string[];
  avatar?: string;
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
    name: 'Elizeu Condé',
    company: 'JCL Empilhadeiras',
    role: 'Diretor Comercial',
    testimonial:
      'Os equipamentos entregues superaram nossas expectativas. As empilhadeiras trouxeram mais agilidade para a movimentação interna e aumentaram muito nossa produtividade.',
    avatar: avatar1,
    rating: 5,
  },
  {
    id: 'testimonial-02',
    name: 'Ariadina Santos',
    company: 'Catellar Móveis',
    role: 'Gerente de Marketing',
    testimonial:
      'Os maquinários adquiridos melhoraram significativamente nosso processo de produção. Tivemos mais precisão nos cortes e redução no tempo de fabricação.',
    avatar: avatar2,
    rating: 5,
  },
  {
    id: 'testimonial-03',
    name: 'Marcos Silva',
    company: 'Itatiaia Móveis',
    role: 'Gerente Operacional',
    testimonial:
      'A qualidade dos equipamentos e o suporte prestado fizeram toda diferença na nossa operação industrial. Hoje temos mais eficiência e segurança na linha de produção.',
    avatar: avatar3,
    rating: 5,
  },
  {
    id: 'testimonial-04',
    name: 'Simone Teixeira',
    company: 'Modecor',
    role: 'Diretora',
    testimonial:
      'Os equipamentos atenderam perfeitamente às necessidades da nossa fábrica. Conseguimos otimizar processos e aumentar nossa capacidade produtiva.',
    avatar: avatar4,
    rating: 5,
  },
  {
    id: 'testimonial-05',
    name: 'Marcos Silva',
    company: 'Distripack',
    role: 'Gerente Operacional',
    testimonial:
      'Além da excelente qualidade dos maquinários, o atendimento foi rápido e muito profissional. Tivemos um ótimo retorno no desempenho da produção.',
    avatar: avatar5,
    rating: 5,
  },
  {
    id: 'testimonial-06',
    name: 'Rosânela Maria',
    company: 'Paropas',
    role: 'Coordenadora',
    testimonial:
      'As soluções fornecidas ajudaram bastante na organização e movimentação de materiais dentro da fábrica. Equipamentos robustos e extremamente confiáveis.',
    avatar: avatar6,
    rating: 5,
  },
];
