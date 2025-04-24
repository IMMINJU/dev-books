import { ProductCard } from "@/components/product-card"
import { mockProducts } from "@/lib/mock-data"
import { Code, BookOpen, Terminal } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white py-4 px-4 shadow-md">
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <Code className="h-6 w-6 mr-2 text-indigo-400" />
            <h1 className="text-2xl font-bold">
              <span className="text-indigo-400">Dev</span>Books
            </h1>
          </div>
          <div className="flex justify-center mt-1 text-xs text-slate-400 code-font">
            <span>{"{"}</span>
            <span className="mx-1">technical_library: true, version: "1.0.0"</span>
            <span>{"}"}</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 mt-4">
        <div className="flex items-center justify-center mb-6 space-x-2">
          <Terminal className="h-5 w-5 text-indigo-600" />
          <h2 className="text-xl font-bold text-slate-800">Essential Programming Books</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <footer className="bg-slate-900 py-6 mt-10">
        <div className="container mx-auto px-4 text-center text-sm text-slate-400">
          <div className="flex items-center justify-center mb-2">
            <BookOpen className="h-4 w-4 mr-2" />
            <p className="code-font">npm install --save knowledge</p>
          </div>
          <p>© 2025 DevBooks. All rights reserved.</p>
          <p className="mt-2">Contact: minju2996@gmail.com</p>
        </div>
      </footer>
    </div>
  )
}
