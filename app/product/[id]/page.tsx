"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Code, BookOpen, Terminal, Mail } from "lucide-react"
import { mockProducts } from "@/lib/mock-data"
import { ProductCard } from "@/components/product-card"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = mockProducts.find((p) => p.id === params.id) || mockProducts[0]
  const relatedProducts = mockProducts.filter((p) => p.id !== params.id).slice(0, 4)

  // 현재 연도 가져오기
  const currentYear = new Date().getFullYear()
  // 올해 출판된 책인지 확인
  const isNewBook = product.publishedYear === currentYear

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

      <div className="bg-slate-800 py-3">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-slate-200 flex items-center hover:text-indigo-300 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span className="code-font text-sm">return Home()</span>
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8 border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8">
            <div className="relative aspect-square overflow-hidden rounded-md bg-slate-100 border border-slate-200">
              {isNewBook && (
                <div className="absolute top-0 right-0 bg-slate-900 text-white px-2 py-1 text-xs z-10 rounded-bl-md code-font">
                  <span className="text-indigo-400">new</span> Book()
                </div>
              )}
              <Image src={product.imageUrl || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
            </div>

            <div>
              <h1 className="text-xl md:text-2xl font-bold mb-3 leading-tight text-slate-800">{product.title}</h1>

              <div className="h-px bg-slate-200 my-4"></div>

              <div className="mb-6 bg-slate-50 p-4 rounded-md border border-slate-200 syntax-highlight">
                <p className="text-slate-700">{product.description}</p>
              </div>

              <a
                href="mailto:minju2996@gmail.com"
                className="flex items-center justify-center py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors code-font text-sm"
              >
                <Mail className="h-4 w-4 mr-2" />
                minju2996@gmail.com으로 문의하기
              </a>

              <div className="flex items-center justify-center mt-6 text-sm text-slate-500">
                <BookOpen className="h-4 w-4 mr-2" />
                <span className="code-font">import knowledge from "devbooks"</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <div className="flex items-center justify-center mb-6 space-x-2">
            <Terminal className="h-5 w-5 text-indigo-600" />
            <h2 className="text-xl font-bold text-slate-800">Related Books</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
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
