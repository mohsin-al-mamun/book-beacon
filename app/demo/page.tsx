// src/app/dashboard/page.tsx
import Image from "next/image";
import { revalidatePath } from "next/cache"; // Import the revalidation utility

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
      next: { revalidate: 300 },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch book collection");
  }

  return response.json();
}

export default async function BookDashboard() {
  const books = await getBooks();

  // This is the Server Action
  async function refreshData() {
    "use server";
    revalidatePath("/demo");
  }

  return (
    <main className="min-h-screen bg-[#fafafa] px-6 py-16 md:px-20">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-3xl font-serif text-slate-900">Book Shelf</h1>

        {/* Manual Revalidation Button */}
        <form action={refreshData}>
          <button
            type="submit"
            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 active:bg-slate-100"
          >
            Refresh Collection
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 gap-y-16 gap-x-12 sm:grid-cols-2 lg:grid-cols-4">
        {books.map((book) => (
          <section key={book.id} className="group">
            <div className="relative aspect-[2/3] overflow-hidden bg-slate-200">
              <Image
                src={book.img_url}
                alt={book.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
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
