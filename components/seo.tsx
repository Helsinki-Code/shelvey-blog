import Head from 'next/head'

interface SEOProps {
  title: string
  description: string
  ogImage?: string
}

export function SEO({ title, description, ogImage }: SEOProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shelvey.com'
  const fullTitle = `${title} | ShelVey`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="ShelVey" />
      <meta property="og:url" content={siteUrl} />
      {ogImage && <meta property="og:image" content={`${siteUrl}${ogImage}`} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />}
    </Head>
  )
}

