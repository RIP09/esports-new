import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Article } from '@/data/articles'

interface ArticleCardProps {
  article: Article
  featured?: boolean
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, featured = false }) => {
  return (
    <Link href={`/news/${article.slug}`} className="group">
      <article className={`bg-dark-card rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl border border-gray-800 ${featured ? 'md:flex' : ''}`}>
        <div className={`relative ${featured ? 'md:w-1/2 h-64 md:h-auto' : 'h-48'} overflow-hidden`}>
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        <div className={`p-6 ${featured ? 'md:w-1/2' : ''}`}>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-xs text-gray-500">•</span>
            <span className="text-xs text-gray-500">{article.date}</span>
          </div>
          
          <h2 className={`font-bold text-white group-hover:text-accent transition-colors mb-3 ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
            {article.title}
          </h2>
          
          <p className="text-gray-400 mb-4 line-clamp-2">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">By {article.author}</span>
            <span className="text-accent text-sm font-medium group-hover:underline">
              Read More →
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default ArticleCard