import { useEffect, useState } from 'react';
import ArticleCard from '@/components/ArticleCard';
import CategoryFilter from '@/components/CategoryFilter';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => setArticles(data));
  }, []);


  const categories = useMemo(() => {
    const cats = new Set(articles.map(article => article.category))
    return Array.from(cats).sort()
  }, [])

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesCategory = selectedCategory ? article.category === selectedCategory : true
      const matchesSearch = searchQuery
        ? article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        : true
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const featuredArticle = filteredArticles[0]
  const remainingArticles = filteredArticles.slice(1)

  return (
    <div className="container-custom py-8">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Latest Esports <span className="text-accent">News</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Stay updated with tournament results, roster changes, and exclusive insights from the competitive gaming world.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* Featured Article */}
      {filteredArticles.length > 0 && (
        <div className="mb-12">
          <ArticleCard article={featuredArticle} featured />
        </div>
      )}

      {/* Article Grid */}
      {remainingArticles.length > 0 ? (
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">More News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}