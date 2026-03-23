import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/auth/signin');
    if (session?.user?.role === 'admin' || session?.user?.role === 'author') {
      fetch('/api/news')
        .then(res => res.json())
        .then(setArticles);
    }
  }, [session, status]);

  if (status === 'loading') return <div>Loading...</div>;
  if (!session) return null;

  return (
    <div className="container-custom py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <Link
          href="/dashboard/new"
          className="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded"
        >
          Create New Article
        </Link>
      </div>

      <div className="grid gap-4">
        {articles.map(article => (
          <div key={article._id} className="bg-dark-card p-4 rounded flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-white">{article.title}</h2>
              <p className="text-gray-400 text-sm">{article.category} • {article.date}</p>
            </div>
            <div className="space-x-2">
              <Link href={`/dashboard/edit/${article.slug}`} className="text-blue-400 hover:underline">Edit</Link>
              <button
                onClick={() => deleteArticle(article._id)}
                className="text-red-400 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}