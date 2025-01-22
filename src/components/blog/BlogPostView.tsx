"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Share2, Bookmark, Heart } from 'lucide-react';
import Comments from '@/components/blog/Comments';
import { getRelatedPosts, type BlogPost } from '@/lib/blog';

interface BlogPostViewProps {
  post: BlogPost;
}

export default function BlogPostView({ post: initialPost }: BlogPostViewProps) {
  const [post, setPost] = useState(initialPost);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      const posts = await getRelatedPosts(post);
      setRelatedPosts(posts);
    };
    fetchRelatedPosts();
  }, [post]);

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    }
  };

  const handleLike = () => {
    setPost(prev => ({
      ...prev,
      likes: prev.isLiked ? (prev.likes || 0) - 1 : (prev.likes || 0) + 1,
      isLiked: !prev.isLiked
    }));
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <time>{new Date(post.date).toLocaleDateString('tr-TR')}</time>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Navigation and Actions */}
          <div className="flex items-center justify-between mb-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Blog'a Dön
            </Link>
            <div className="flex items-center gap-4">
              <button
                onClick={handleLike}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                  post.isLiked
                    ? 'bg-pink-50 border-pink-200 text-pink-500'
                    : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Heart className={`w-4 h-4 ${post.isLiked ? 'fill-current' : ''}`} />
                <span>{post.likes}</span>
              </button>
              <button
                onClick={sharePost}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                title="Paylaş"
              >
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
              <button
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                title="Kaydet"
              >
                <Bookmark className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-8 p-6 bg-gray-50 rounded-xl">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image
                src={post.authorImage}
                alt={post.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 text-lg">{post.author}</h3>
              <p className="text-gray-600">{post.authorTitle}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags && post.tags.map(tag => (
              <Link
                key={tag}
                href={`/blog?tag=${tag}`}
                className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>

          {/* Content */}
          <article 
            className="prose prose-lg max-w-none mb-16
              prose-headings:text-gray-900 prose-headings:font-bold prose-headings:scroll-mt-20
              prose-h1:text-4xl prose-h1:mb-8 prose-h1:font-extrabold prose-h1:tracking-tight
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:font-bold
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:font-semibold
              prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3 prose-h4:font-semibold
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-purple-600 prose-a:no-underline hover:prose-a:text-purple-700 prose-a:font-medium
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-em:text-gray-800 prose-em:italic
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
              prose-li:my-2 prose-li:text-gray-600
              prose-blockquote:border-l-4 prose-blockquote:border-purple-500
              prose-blockquote:bg-purple-50 prose-blockquote:py-2 prose-blockquote:px-6
              prose-blockquote:my-8 prose-blockquote:italic prose-blockquote:text-gray-700
              prose-code:text-purple-600 prose-code:bg-purple-50 prose-code:px-2 prose-code:py-0.5 
              prose-code:rounded-md prose-code:before:content-[''] prose-code:after:content-['']
              prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-xl
              prose-pre:shadow-lg prose-pre:my-8 prose-pre:overflow-x-auto
              prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8 prose-img:mx-auto
              prose-table:w-full prose-table:my-8 prose-table:border-collapse
              prose-th:border prose-th:border-gray-200 prose-th:p-4 prose-th:bg-gray-50 prose-th:font-semibold
              prose-td:border prose-td:border-gray-200 prose-td:p-4
              prose-hr:my-12 prose-hr:border-gray-200
              [&_.anchor-link]:ml-2 [&_.anchor-link]:text-gray-400 hover:[&_.anchor-link]:text-purple-500
              [&_.anchor-icon]:inline-block [&_.anchor-icon]:align-middle [&_.anchor-icon]:opacity-0 hover:[&_.anchor-icon]:opacity-100"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/'/g, '&apos;') }}
          />

          {/* Comments */}
          <Comments postSlug={post.slug} />

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-16 border-t">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">İlgili Yazılar</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group block"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gray-50 rounded-xl overflow-hidden hover:bg-gray-100 transition-all duration-300"
                    >
                      <div className="relative h-48">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="mt-2 text-gray-600 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 