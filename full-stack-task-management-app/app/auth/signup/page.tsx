import SignUpForm from '@/components/SignUpForm';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold">
            Create your account
          </h2>
        </div>
        <SignUpForm />
        <p className="text-center text-sm">
          Already have an account?{' '}
          <Link href="/auth/signin" className="text-blue-500 hover:text-blue-700">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
