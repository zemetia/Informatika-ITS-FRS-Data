import { NextSeo, NextSeoProps } from 'next-seo';

type SEOProps = {
  title?: string;
  description?: string;
} & NextSeoProps;

export default function SEO({ title, description, ...rest }: SEOProps) {
  return (
    <NextSeo
      title={title}
      description={description}
      {...rest}
      openGraph={{
        // ! TODO: Change this to your own
        type: 'website',
        url: process.env.NEXT_PUBLIC_URL,
        title: 'IFITS FRS',
        siteName: 'IFITS FRS',
        description:
          "Filtering dan Merancang FRS untuk mahasiswa Teknik Informatika ITS Surabaya.",
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_URL}/images/og-itsexpo.png`,
            width: 1200,
            height: 627,
            alt: 'IFITS FRS',
          },
        ],
      }}
    />
  );
}
