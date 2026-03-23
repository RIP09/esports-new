import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    if (result?.error) {
      setError('Invalid email or password');
    } else {
      router.push('/');
    }
  };

  return (
    <div className="container-custom py-20 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">Sign In</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
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
          Sign In
        </button>
      </form>
      <p className="mt-4 text-gray-400 text-center">
        Don't have an account?{' '}
        <Link href="/auth/signup" className="text-accent hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}