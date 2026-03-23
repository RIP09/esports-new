import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import connectDB from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      router.push('/auth/signin');
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="container-custom py-20 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">Create an Account</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 bg-dark-card border border-gray-700 rounded text-white"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 bg-dark-card border border-gray-700 rounded text-white"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 bg-dark-card border border-gray-700 rounded text-white"
          required
        />
        <button
          type="submit"
          className="w-full bg-accent hover:bg-accent-hover text-white font-semibold py-2 rounded transition"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-gray-400 text-center">
        Already have an account?{' '}
        <Link href="/auth/signin" className="text-accent hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}