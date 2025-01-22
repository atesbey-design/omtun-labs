"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Filter, Calendar, Clock, User, Tag } from 'lucide-react';
import { BlogPost } from '@/lib/blog';

const POSTS_PER_PAGE = 9;

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const allCategories = useMemo(() => {
    return Array.from(new Set(posts.map(post => post.category)));
  }, [posts]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach(post => {
      if (post.tags && Array.isArray(post.tags)) {
        post.tags.forEach(tag => tags.add(tag));
      }
    });
    return Array.from(tags);
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = searchQuery === '' || (
        (post.title?.toLowerCase().includes(searchQuery.toLowerCase()) || false) ||
        (post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) || false)
      );
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      const matchesTags = selectedTags.length === 0 || 
                         (post.tags && selectedTags.every(tag => post.tags.includes(tag)));
      
      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [posts, searchQuery, selectedCategory, selectedTags]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-16"
        >
          <h1 className="text-6xl font-black mb-6 text-black">
            Blog
          </h1>
          <div className="w-24 h-1 bg-black mb-6"></div>
          <p className="text-lg text-black max-w-2xl text-center">
            OMTUN Labs ekibinin teknoloji, yazılım geliştirme ve dijital dönüşüm hakkındaki yazıları
          </p>
        </motion.div>

        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Blog yazılarında ara..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all text-lg"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:w-auto w-full px-6 py-3 flex items-center justify-center gap-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              <Filter className="h-5 w-5" />
              <span>Filtrele</span>
            </button>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
                      <select
                        value={selectedCategory || ''}
                        onChange={(e) => {
                          setSelectedCategory(e.target.value || null);
                          setCurrentPage(1);
                        }}
                        className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                      >
                        <option value="">Tüm Kategoriler</option>
                        {allCategories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Etiketler</label>
                    <div className="flex flex-wrap gap-2">
                      {allTags.map(tag => (
                        <button
                          key={tag}
                          onClick={() => handleTagToggle(tag)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            selectedTags.includes(tag)
                              ? 'bg-purple-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString('tr-TR')}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex justify-center gap-3"
          >
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-6 py-3 rounded-full bg-white border-2 border-gray-200 text-gray-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:border-purple-500 hover:text-purple-600 transition-all"
            >
              Önceki
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-12 h-12 rounded-full font-medium transition-all ${
                  currentPage === page
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-purple-500 hover:text-purple-600'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-6 py-3 rounded-full bg-white border-2 border-gray-200 text-gray-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:border-purple-500 hover:text-purple-600 transition-all"
            >
              Sonraki
            </button>
          </motion.div>
        )}
      </div>
    </main>
  );
}