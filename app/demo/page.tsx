// src/app/dashboard/page.tsx
import Image from "next/image";

// Define the type for your book object
interface Book {
  id: string;
  title: string;
  img_url: string;
  author: string;
}

async function getBooks(): Promise<Book[]> {
  const response = await fetch(
    "https://raw.githubusercontent.com/mohsin-al-mamun/static-files/main/assets/demo.json",
    {
      next: { revalidate: 300 }, // This caches the data for 5 minutes (300 seconds)
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch book collection");
  }

  return response.json();
}

export default async function BookDashboard() {
  const books = await getBooks();

  return (
    <main className="min-h-screen bg-[#fafafa] px-6 py-16 md:px-20">
      {/* ... (Header code remains the same) ... */}

      <div className="grid grid-cols-1 gap-y-16 gap-x-12 sm:grid-cols-2 lg:grid-cols-4">
        {books.map((book) => (
          <section key={book.id} className="group">
            <div className="relative aspect-2/3 overflow-hidden bg-slate-200">
              <Image
                src={book.img_url}
                alt={book.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-serif text-slate-800">
                {book.title}
              </h2>
              <p className="text-xs uppercase tracking-widest text-slate-400">
                {book.author}
              </p>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
