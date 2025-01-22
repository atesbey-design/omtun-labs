import { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/blog';
import BlogList from '@/components/blog/BlogList';

export const metadata: Metadata = {
  title: 'Blog | OMTUN Labs',
  description: 'Web geliştirme, yapay zeka ve modern teknolojiler hakkında güncel yazılar, rehberler ve en iyi uygulamalar.',
  keywords: [
    'web development',
    'yapay zeka',
    'next.js',
    'react',
    'web tasarım',
    'teknoloji',
    'yazılım geliştirme',
    'OMTUN Labs'
  ],
  openGraph: {
    title: 'OMTUN Labs Blog',
    description: 'Web geliştirme, yapay zeka ve modern teknolojiler hakkında güncel yazılar.',
    url: 'https://omtunlabs.com/blog',
    siteName: 'OMTUN Labs',
    images: [
      {
        url: 'https://omtunlabs.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OMTUN Labs Blog',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OMTUN Labs Blog',
    description: 'Web geliştirme ve teknoloji üzerine güncel içerikler',
    images: ['https://omtunlabs.com/og-image.jpg'],
    creator: '@omtunlabs',
    site: '@omtunlabs',
  },
  alternates: {
    canonical: 'https://omtunlabs.com/blog',
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
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  return <BlogList posts={posts} />;
} 