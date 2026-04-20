import { Helmet } from 'react-helmet-async';

type SEOProps = {
  title: string;
  description: string;
  image?: string;
  url?: string;
  keywords?: string;
  noindex?: boolean;
  nofollow?: boolean;
};

export const SEO = ({
  title,
  description,
  image = 'https://www.invetec.com.br/og-banner.jpg',
  url = 'https://www.invetec.com.br/',
  keywords,
  noindex,
  nofollow,
}: SEOProps) => {
  const robotsContent =
    noindex || nofollow
      ? `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`
      : undefined;

  return (
    <Helmet>
      {/* Título */}
      <title>{title}</title>

      {/* Básico */}
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Robots */}
      {robotsContent && (
        <meta name="robots" content={robotsContent} />
      )}
    </Helmet>
  );
};
