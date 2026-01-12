'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Board } from '@/components/Board';
import { ThemeToggle } from '@/components/ThemeToggle';
import Link from 'next/link';

export default function BoardPage({ params }: { params: { id: string } }) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/dashboard" className="text-blue-500 hover:text-blue-700">
              ← Back to Dashboard
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <Board boardId={params.id} />
    </div>
  );
}
