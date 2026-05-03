// src/app/dashboard/page.tsx
import Image from "next/image";
import books from "@/data/books.json";

export default function ImageDashboard() {
  return (
    <div className="min-h-screen bg-white p-8 md:p-16">
      <header className="mb-12 border-b border-gray-100 pb-6">
        <h1 className="text-4xl font-serif tracking-tight text-gray-900">
          Library Audit
        </h1>
        <p className="text-gray-500 mt-2 font-sans">
          Quickly verify image links and metadata integrity.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {books.map((book) => (
          <div key={book.id} className="group flex flex-col space-y-4">
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 border border-gray-100">
              <Image
                src={book.img_url}
                alt={book.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>

            <div className="space-y-1">
              <h3 className="font-serif text-xl text-gray-800">{book.title}</h3>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-medium">
                {book.author}
              </p>
              <div className="pt-2">
                <span className="text-[10px] px-2 py-1 bg-gray-100 text-gray-600 rounded">
                  {book.id}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
