"use client";

import { useState, useEffect } from "react";
import { fetchUsers } from "@/services/books.service";
import { Book, BooksParams } from "@/types";

export const useBooks = (initialParams: BooksParams) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const getBooks = async () => {
      const response = await fetchUsers({
        pageNo: initialParams.pageNo,
        itemsPerPage: initialParams.itemsPerPage,
      });
      setBooks(response.results);
      setIsLoading(false);
    };

    getBooks();
  }, [initialParams.pageNo, initialParams.itemsPerPage]);

  return { books, isLoading };
};
