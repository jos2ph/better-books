import Link from "next/link";
import { BookOpen, Library, Settings, Star } from "lucide-react";

export function Sidebar() {
  return (
    <div className="w-64 bg-card text-card-foreground h-full p-4 space-y-4 border-r">
      <div className="text-4xl font-extrabold tracking-tight lg:text-5xl my-6">
        Better Books
      </div>
      <nav className="space-y-2 text-md">
        <Link
          href="/"
          className="flex items-center space-x-2 px-2 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground"
        >
          <BookOpen size={24} />
          <span>My Books</span>
        </Link>
        <Link
          href="/library"
          className="flex items-center space-x-2 px-2 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground"
        >
          <Library size={24} />
          <span>Library</span>
        </Link>
        <Link
          href="/favorites"
          className="flex items-center space-x-2 px-2 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground"
        >
          <Star size={24} />
          <span>Favorites</span>
        </Link>
        <Link
          href="/settings"
          className="flex items-center space-x-2 px-2 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground"
        >
          <Settings size={24} />
          <span>Settings</span>
        </Link>
      </nav>
    </div>
  );
}
