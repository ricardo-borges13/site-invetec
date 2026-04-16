import MOOVIN from '@/assets/images/moovin.jpg';
import PENSO from '@/assets/images/PENSO.jpg';
import TAGPLUS from '@/assets/images/TagPlus.jpg';
import W3ERP from '@/assets/images/w3erp.jpg';
import * as S from './BusinessPartner.styles';

type Partner = {
  name: string;
  src: string;
  url: string;
};

const partners: Partner[] = [
  { name: 'W3 ERP', src: W3ERP, url: 'https://www.w3erp.com.br' },
  { name: 'Penso', src: PENSO, url: 'https://www.penso.com.br' },
  {
    name: 'TagPlus',
    src: TAGPLUS,
    url: 'https://sistema.tagplus.com.br/checkout/?ref=sistema_parceiros&id_funcionario=1464',
  },
  { name: 'Moovin', src: MOOVIN, url: 'https://partner.moovin.app/invetec' },
];

export const BusinessPartner = () => {
  return (
    <S.Section id="partners">
      <S.Title>Nossos Parceiros</S.Title>

      <S.Grid>
        {partners.map(partner => (
          <S.Link
            key={partner.name}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.Logo src={partner.src} alt={`Logo ${partner.name}`} />
          </S.Link>
        ))}
      </S.Grid>
    </S.Section>
  );
};
