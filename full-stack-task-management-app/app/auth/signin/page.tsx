import SignInForm from '@/components/SignInForm';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold">
            Sign in to your account
          </h2>
        </div>
        <SignInForm />
        <p className="text-center text-sm">
          Don't have an account?{' '}
          <Link href="/auth/signup" className="text-blue-500 hover:text-blue-700">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
