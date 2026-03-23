import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/lib/db';
import Article from '@/models/Article';
import { getSession } from 'next-auth/react';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (!session) return res.status(401).json({ error: 'Unauthorized' });

  await connectDB();

  if (req.method === 'GET') {
    const articles = await Article.find({}).sort({ createdAt: -1 });
    return res.status(200).json(articles);
  }

  if (req.method === 'POST') {
    if (session.user.role !== 'admin' && session.user.role !== 'author') {
      return res.status(403).json({ error: 'Forbidden' });
    }
    const { title, excerpt, content, image, category } = req.body;
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const article = await Article.create({
      title,
      slug,
      excerpt,
      content,
      image,
      category,
      author: session.user.name,
    });
    return res.status(201).json(article);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}