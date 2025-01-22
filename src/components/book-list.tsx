import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadBookDialog } from "@/components/upload-book-dialog";

interface Book {
  id: number;
  title: string;
  author: string;
  coverImage: string;
  fileType: "pdf" | "epub";
}

const books: Book[] = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    coverImage: "/placeholder.svg?height=400&width=300",
    fileType: "pdf",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    coverImage: "/placeholder.svg?height=400&width=300",
    fileType: "epub",
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    coverImage: "/placeholder.svg?height=400&width=300",
    fileType: "pdf",
  },
  {
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverImage: "/placeholder.svg?height=400&width=300",
    fileType: "epub",
  },
];

export function BookList() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-5xl font-bold tracking-tight first:mt-0">
          My Library
        </h2>
        <UploadBookDialog />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <Card key={book.id} className="flex flex-col">
            <CardHeader className="p-0">
              <div className="relative w-full pt-[133%]">
                <Image
                  src={book.coverImage || "/placeholder.svg"}
                  alt={`Cover of ${book.title}`}
                  layout="fill"
                  objectFit="cover"
                  className=""
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-4">
              <CardTitle className="text-xl font-semibold line-clamp-2">
                {book.title}
              </CardTitle>
              <p className="text-md text-muted-foreground mt-1">
                {book.author}
              </p>
              <p className="text-sm text-muted-foreground mt-1 uppercase">
                {book.fileType}
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full text-md">Read Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
