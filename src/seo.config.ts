// @SEE https://www.npmjs.com/package/next-seo#default-seo-configuration

import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: '',
    siteName: 'SiteName',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  titleTemplate: '%s IFITS FRS',
  description: 'this is a description',
  defaultTitle: 'IFITS FRS',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
};

export default config;
