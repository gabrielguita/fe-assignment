"use client";

import React, { useState, useEffect } from "react";
import { Container, Card, Title, Text } from "./BookssList.styles";
import { Loading, SearchBar, Button } from "@/components";

import { Book } from "@/types";
import { LOADING, BUTTON_LABEL } from "./constants";

export const BooksList = ({
  books,
  isLoading,
}: {
  books: Book[];
  isLoading: boolean;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState<Book[]>([]);
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (searchQuery) {
      const filtered = books.filter((book) =>
        `${book.title} ${book.author}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase()),
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(books);
    }
  }, [books, searchQuery]);

  const handleSave = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Container>
        {filteredData.map(({ id, title, author, price, stock }: Book) => (
          <Card key={id}>
            <Title>{title}</Title>
            <Text>by {author}</Text>
            <Text>Price: {price}</Text>
            <Text>In stock: {stock}</Text>

            <Button
              type="button"
              disabled={loading}
              onClick={handleSave}
              label={BUTTON_LABEL}
              loading={loading}
            />
          </Card>
        ))}
        {isLoading && <Loading loading={isLoading} label={LOADING} />}
      </Container>
    </>
  );
};
