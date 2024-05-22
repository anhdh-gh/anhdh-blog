import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'css/custom.css'

import { Space_Grotesk } from 'next/font/google'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, SearchConfig } from 'pliny/search'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'
import Script from 'next/script'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'vi_VN',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={siteMetadata.language}
      className={`${space_grotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link rel="apple-touch-icon" sizes="57x57" href={siteMetadata.siteUrlReplicate + "/apple-icon-57x57.png"} />
      <link rel="apple-touch-icon" sizes="60x60" href={siteMetadata.siteUrlReplicate + "/apple-icon-60x60.png"} />
      <link rel="apple-touch-icon" sizes="72x72" href={siteMetadata.siteUrlReplicate + "/apple-icon-72x72.png"} />
      <link rel="apple-touch-icon" sizes="76x76" href={siteMetadata.siteUrlReplicate + "/apple-icon-76x76.png"} />
      <link rel="apple-touch-icon" sizes="114x114" href={siteMetadata.siteUrlReplicate + "/apple-icon-114x114.png"} />
      <link rel="apple-touch-icon" sizes="120x120" href={siteMetadata.siteUrlReplicate + "/apple-icon-120x120.png"} />
      <link rel="apple-touch-icon" sizes="144x144" href={siteMetadata.siteUrlReplicate + "/apple-icon-144x144.png"} />
      <link rel="apple-touch-icon" sizes="152x152" href={siteMetadata.siteUrlReplicate + "/apple-icon-152x152.png"} />
      <link rel="apple-touch-icon" sizes="180x180" href={siteMetadata.siteUrlReplicate + "/apple-icon-180x180.png"} />
      <link rel="icon" type="image/png" sizes="192x192"  href={siteMetadata.siteUrlReplicate + "/android-icon-192x192.png"} />
      <link rel="icon" type="image/png" sizes="32x32" href={siteMetadata.siteUrlReplicate + "/favicon-32x32.png"} />
      <link rel="icon" type="image/png" sizes="96x96" href={siteMetadata.siteUrlReplicate + "/favicon-96x96.png"} />
      <link rel="icon" type="image/png" sizes="16x16" href={siteMetadata.siteUrlReplicate + "/favicon-16x16.png"} />
      <link rel="manifest" href={siteMetadata.siteUrl + "/manifest.json" }/>
      <meta name="msapplication-TileColor" content="#ffffff"/>
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="icon" href={siteMetadata.siteUrlReplicate + "/favicon.ico"} type="image/x-icon"/> 
      <link rel="shortcut icon" href={siteMetadata.siteUrlReplicate + "/favicon.ico"} type="image/x-icon" /> 
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="google-site-verification" content="yC7xHECeMN1CdOO6AZkU3dRkaWAYeKB55VKfa-oMJUw" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <body className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
        <ThemeProviders>
          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
          <SectionContainer>
            <div className="flex h-screen flex-col justify-between font-sans">
              <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
                <Header />
                <main className="mb-auto">{children}</main>
              </SearchProvider>
              <Footer />
            </div>
          </SectionContainer>
        </ThemeProviders>

        <Script defer src='/static/script/custom.js'/>
      </body>
    </html>
  )
}
