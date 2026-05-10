import Image from "next/image";
import { revalidatePath } from "next/cache";

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

  return (
    <main className="min-h-screen bg-[#fafafa] px-6 py-16 md:px-20">
      <div className="flex justify-end mb-8">
        <form
          action={async () => {
            "use server";
            revalidatePath("/demo");
          }}
        >
          <button
            type="submit"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition cursor-pointer"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            Refresh books
          </button>
        </form>
      </div>

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
