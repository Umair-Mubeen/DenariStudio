import { Helmet } from "react-helmet-async";

/**
 * SEO component — handles all <head> meta tags per page.
 *
 * Usage:
 *   <SEO
 *     title="About Us"
 *     description="Learn about DenariStudio..."
 *     path="/about"
 *     image="/og-about.jpg"   // optional
 *   />
 */
const SITE_URL  = "https://denari-studio.netlify.app";
const SITE_NAME = "DenariStudio";
const DEFAULT_IMG = `${SITE_URL}/og-default.jpg`;
const DEFAULT_DESC = "Pakistan's premium full-service digital agency. Web development, logo design, SEO, social media marketing, video animation — all in PKR pricing.";

export default function SEO({
  title       = "DenariStudio — Pakistan's Premium Digital Agency",
  description = DEFAULT_DESC,
  path        = "/",
  image       = DEFAULT_IMG,
  type        = "website",
  noIndex     = false,
}) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const fullUrl   = `${SITE_URL}${path}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type"        content={type} />
      <meta property="og:url"         content={fullUrl} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={image} />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:locale"      content="en_PK" />

      {/* Twitter */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:url"         content={fullUrl} />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={image} />

      {/* Pakistan / Local SEO */}
      <meta name="geo.region"   content="PK-SD" />
      <meta name="geo.placename" content="Karachi, Pakistan" />
      <meta name="author"        content={SITE_NAME} />

      {/* Theme color */}
      <meta name="theme-color" content="#37517e" />
    </Helmet>
  );
}
