import { Helmet } from 'react-helmet-async';
import { useLang } from '../i18n/LanguageContext';

const SITE_URL = 'https://www.judoclubizola.com';
const OG_IMAGE = `${SITE_URL}/logo512.png`;
const LOCALE_MAP = { sl: 'sl_SI', en: 'en_US', it: 'it_IT' };

export const SEO = ({ title, description, keywords, path = '/' }) => {
  const { lang } = useLang();
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Judo klub Izola" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content={LOCALE_MAP[lang] || 'sl_SI'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Helmet>
  );
};

export default SEO;
