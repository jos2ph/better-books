"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircle } from "lucide-react";

export function UploadBookDialog() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (
      selectedFile &&
      (selectedFile.type === "application/pdf" ||
        selectedFile.type === "application/epub+zip")
    ) {
      setFile(selectedFile);
    } else {
      alert("Please select a PDF or EPUB file.");
      setFile(null);
    }
  };

  const handleUpload = () => {
    if (file) {
      // Here you would typically send the file to your backend
      console.log("Uploading file:", file.name);
      // Reset the file state after upload
      setFile(null);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-md font-normal">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Book
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Add New Book</DialogTitle>
          <DialogDescription>
            Upload a PDF or EPUB file to add a new book to your library.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="book-file" className="text-right">
              File
            </Label>
            <Input
              id="book-file"
              type="file"
              accept=".pdf,.epub"
              onChange={handleFileChange}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleUpload} disabled={!file}>
            Upload Book
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
