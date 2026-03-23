import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: String,
  content: String,
  image: String,
  category: String,
  date: { type: String, default: () => new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) },
  author: { type: String, required: true }, // could reference User model
  published: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Article || mongoose.model('Article', ArticleSchema);