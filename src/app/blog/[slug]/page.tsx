import { notFound } from 'next/navigation';
import { getBlogPost, getAllBlogSlugs } from '@/lib/blog';
import BlogPostView from '@/components/blog/BlogPostView';
import { Metadata, ResolvingMetadata } from 'next';

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  console.log('Generated slugs:', slugs); // Debug log
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  console.log('Generating metadata for slug:', params.slug); // Debug log
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    console.log('Post not found for slug:', params.slug); // Debug log
    return {
      title: 'Blog Post Not Found | OMTUN Labs',
      description: 'The requested blog post could not be found.',
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${post.title} | OMTUN Labs Blog`,
    description: post.excerpt,
    keywords: [...post.tags, 'OMTUN Labs', 'web development', 'technology'],
    authors: [{ name: post.author, url: 'https://omtunlabs.com/about' }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://omtunlabs.com/blog/${post.slug}`,
      siteName: 'OMTUN Labs Blog',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
        ...previousImages,
      ],
      type: 'article',
      locale: 'tr_TR',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      creator: '@omtunlabs',
      site: '@omtunlabs',
    },
    alternates: {
      canonical: `https://omtunlabs.com/blog/${post.slug}`,
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
}

export default async function BlogPostPage({ params }: Props) {
  console.log('Rendering page for slug:', params.slug); // Debug log
  const post = await getBlogPost(params.slug);

  if (!post) {
    console.log('Post not found, returning 404'); // Debug log
    notFound();
  }

  return <BlogPostView post={post} />;
} 