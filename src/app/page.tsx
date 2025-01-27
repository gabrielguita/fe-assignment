"use client";
import { useBooks } from "@/hooks";
import { Header, BooksList } from "@/components";
import { HOME_HEADER_TITLE } from "@/constants";

export default function BookPage() {
  const { books, isLoading } = useBooks({ pageNo: 1, itemsPerPage: 4 });
  return (
    <>
      <Header title={HOME_HEADER_TITLE} />
      <BooksList books={books} isLoading={isLoading} />
    </>
  );
}
