import { BookList } from "@/components/book-list";
import { UploadBookDialog } from "@/components/upload-book-dialog";

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center"></div>
      <BookList />
    </div>
  );
}
