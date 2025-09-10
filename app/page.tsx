import { Search, Heart, ShoppingCart } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-purple-600">Fashion Voice Find</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-purple-600">
                <Search className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-600 hover:text-purple-600">
                <Heart className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-600 hover:text-purple-600">
                <ShoppingCart className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-6xl">
            AI-Powered Fashion Discovery
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Experience the future of fashion shopping with voice descriptions, 
            semantic search, and intelligent recommendations powered by AI.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="rounded-md bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">
              Explore Collection
            </button>
            <button className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              🎤
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Voice Descriptions</h3>
            <p className="text-gray-600">
              Get natural, conversational descriptions of products using AI-powered voice synthesis.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              🔍
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Semantic Search</h3>
            <p className="text-gray-600">
              Find products by meaning, not just keywords, using advanced vector search technology.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              🛒
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Shopping</h3>
            <p className="text-gray-600">
              Intelligent recommendations and seamless shopping experience with cart and wishlist.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}