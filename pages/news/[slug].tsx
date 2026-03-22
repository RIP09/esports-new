import { GetStaticPaths, GetStaticProps } from 'next'
import { articles, Article } from '@/data/articles'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaCalendar, FaUser, FaArrowLeft } from 'react-icons/fa'

interface ArticlePageProps {
  article: Article | null
}

export default function ArticlePage({ article }: ArticlePageProps) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <div className="container-custom py-20 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-dark-card rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-64 bg-dark-card rounded mb-8"></div>
          <div className="h-40 bg-dark-card rounded"></div>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Article Not Found</h1>
        <p className="text-gray-400 mb-8">The article you're looking for doesn't exist.</p>
        <Link href="/" className="inline-flex items-center text-accent hover:underline">
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="container-custom py-8">
      {/* Back Button */}
      <Link href="/" className="inline-flex items-center text-gray-400 hover:text-accent transition-colors mb-6">
        <FaArrowLeft className="mr-2" /> Back to News
      </Link>

      {/* Article Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            {article.category}
          </span>
          <span className="text-gray-500">•</span>
          <div className="flex items-center text-gray-400 text-sm">
            <FaCalendar className="mr-1" size={14} />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <FaUser className="mr-1" size={14} />
            <span>{article.author}</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          {article.title}
        </h1>
      </div>

      {/* Featured Image */}
      <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-10">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto">
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            {article.excerpt}
          </p>
          <div className="text-gray-300 space-y-4">
            {article.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Share Section (Optional) */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">Share this article</p>
          <div className="flex justify-center gap-4 mt-4">
            <button className="text-gray-400 hover:text-accent transition-colors">Twitter</button>
            <button className="text-gray-400 hover:text-accent transition-colors">Facebook</button>
            <button className="text-gray-400 hover:text-accent transition-colors">Reddit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const article = articles.find((a) => a.slug === slug) || null

  return {
    props: {
      article,
    },
  }
}