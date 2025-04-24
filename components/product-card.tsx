import Image from "next/image"
import Link from "next/link"
import { Code } from "lucide-react"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  // 현재 연도 가져오기
  const currentYear = new Date().getFullYear()
  // 올해 출판된 책인지 확인
  const isNewBook = product.publishedYear === currentYear

  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-all transform hover:-translate-y-1 duration-200 flex flex-col h-full group">
        <div className="relative aspect-[3/4] overflow-hidden border-b border-slate-200 bg-slate-100">
          {isNewBook && (
            <div className="absolute top-0 right-0 bg-slate-900 text-white px-2 py-1 text-xs z-10 rounded-bl-md code-font">
              <span className="text-indigo-400">new</span> Book()
            </div>
          )}
          <Image
            src={product.imageUrl || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex items-start mb-2">
            <Code className="h-4 w-4 text-indigo-500 mt-0.5 mr-2 flex-shrink-0" />
            <h3 className="text-slate-800 font-medium line-clamp-2 text-sm">{product.title}</h3>
          </div>
          <div className="mt-auto pt-2 text-xs text-slate-500 code-font">
            <span className="text-indigo-500">import</span> knowledge
          </div>
        </div>
      </div>
    </Link>
  )
}
