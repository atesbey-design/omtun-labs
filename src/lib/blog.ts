'use server';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeStringify from 'rehype-stringify';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypeRaw from 'rehype-raw';
import remarkToc from 'remark-toc';
import { visit } from 'unist-util-visit';
import { Element } from 'hast';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorImage: string;
  authorTitle: string;
  image: string;
  tags: string[];
  readTime: string;
  category: string;
  content: string;
  likes?: number;
  isLiked?: boolean;
}

const postsDirectory = path.join(process.cwd(), 'public/blog');

export const getAllBlogSlugs = cache(async () => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => fileName.replace(/\.md$/, ''));
});

export const getAllBlogPosts = cache(async () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      id: slug,
      slug,
      ...data,
      likes: 0,
      isLiked: false,
    } as BlogPost;
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
});

export const getBlogPost = cache(async (slug: string) => {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkToc, {
        heading: 'İçindekiler',
        maxDepth: 2,
        tight: true,
        ordered: true,
        prefix: 'toc-'
      })
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings, {
        behavior: 'append',
        properties: { className: ['anchor-link'] },
        content: {
          type: 'element',
          tagName: 'span',
          properties: { className: ['anchor-icon'] },
          children: [{ type: 'text', value: ' #' }]
        }
      })
      .use(rehypeSanitize, {
        ...defaultSchema,
        attributes: {
          ...defaultSchema.attributes,
          code: [['className']],
          span: [['className']],
          div: [['className']],
        },
      })
      .use(rehypeStringify, { allowDangerousHtml: true })
      .use(() => (tree) => {
        visit(tree, 'element', (node: Element) => {
          if (node.tagName === 'pre') {
            const codeNode = node.children[0] as Element;
            if (codeNode?.tagName === 'code') {
              const className = codeNode.properties?.className || [];
              if (Array.isArray(className)) {
                const language = className.find(
                  (name) => typeof name === 'string' && name.startsWith('language-')
                );
                if (language) {
                  node.properties = node.properties || {};
                  node.properties.className = ['code-block', language];
                }
              }
            }
          }
        });
      })
      .process(content);

    const contentHtml = processedContent.toString();

    return {
      id: slug,
      slug,
      ...data,
      content: contentHtml,
      likes: 0,
      isLiked: false,
    } as BlogPost;
  } catch (error) {
    console.error('Error processing blog post:', error);
    return null;
  }
});

export const getRelatedPosts = async (post: BlogPost): Promise<BlogPost[]> => {
  const allPosts = await getAllBlogPosts();
  return allPosts
    .filter((p: BlogPost) => {
      // Check if both posts have tags before comparing
      const hasMatchingTags = p.tags && Array.isArray(p.tags) && 
                             post.tags && Array.isArray(post.tags) &&
                             p.tags.some((tag: string) => post.tags.includes(tag));
      
      return p.slug !== post.slug && 
             (p.category === post.category || hasMatchingTags);
    })
    .slice(0, 2);
}; 