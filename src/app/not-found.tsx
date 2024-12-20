import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Page Not Found</h2>
        <p className="text-gray-500 mt-2">
          Oops! The page you are looking for does not exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-block px-6 py-3 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-500 transition-all"
          >
            Go Back Home
          </Link>
        </div>

        <Image
          src="/404-illustration.svg"
          alt="Not Found Illustration"
          className="mx-auto mt-10 max-w-md"
        />
      </div>
    </div>
  );
} 

// Add a `/404-illustration.svg` file in your public folder or use a URL for a 404 illustration.
