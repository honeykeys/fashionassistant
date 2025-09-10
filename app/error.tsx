'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-purple-600">500</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mt-4">Something went wrong!</h2>
        <p className="text-gray-600 mt-2 max-w-md mx-auto">
          An unexpected error occurred. Please try again.
        </p>
        <div className="mt-6 space-x-4">
          <button
            onClick={() => reset()}
            className="inline-block rounded-md bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-500"
          >
            Try again
          </button>
          <a 
            href="/" 
            className="inline-block rounded-md bg-gray-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-500"
          >
            Go back home
          </a>
        </div>
      </div>
    </div>
  )
}