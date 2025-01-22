"use client";

import { useState } from 'react';


interface Comment {
  id: string;
  name: string;
  email: string;
  content: string;
  date: string;
  likes: number;
  isLiked?: boolean;
}

interface CommentsProps {
  postSlug: string;
}

export default function Comments({ postSlug }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      name: 'Ahmet Yılmaz',
      email: 'ahmet@example.com',
      content: 'Harika bir yazı olmuş, özellikle Next.js 14\'ün yeni özellikleri çok etkileyici!',
      date: '2024-01-22',
      likes: 5,
      isLiked: false
    }
  ]);
  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    content: ''
  });
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Yeni yorum ekle
    const comment: Comment = {
      id: Date.now().toString(),
      ...newComment,
      date: new Date().toISOString(),
      likes: 0,
      isLiked: false
    };

    setComments(prev => [comment, ...prev]);
    setNewComment({ name: '', email: '', content: '' });
    setShowForm(false);
  };

  const handleLike = (commentId: string) => {
    setComments(prev => prev.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
          isLiked: !comment.isLiked
        };
      }
      return comment;
    }));
  };

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-8 text-gray-900">Yorumlar</h3>
      <div className="bg-gray-50 p-6 rounded-xl">
        {/* Burada Giscus veya başka bir yorum sistemi entegrasyonu yapılabilir */}
        <div 
          className="giscus"
          data-repo="omtunlabs/website-comments"
          data-repo-id="R_kgDOK5Q5ZQ"
          data-category="Comments"
          data-category-id="DIC_kwDOK5Q5Zc4CcDsX"
          data-mapping="pathname"
          data-strict="0"
          data-reactions-enabled="1"
          data-emit-metadata="0"
          data-input-position="bottom"
          data-theme="light"
          data-lang="tr"
          data-loading="lazy"
          data-mapping-url={`https://omtunlabs.com/blog/${postSlug}`}
        ></div>
      </div>
    </div>
  );
} 