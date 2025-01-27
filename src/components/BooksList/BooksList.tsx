"use client";

import React from "react";
import { Container, Card, Title, Text } from "./BookssList.styles";
import { Book } from "@/types";

export const BooksList = ({ books }: { books: Book[] }) => {
  return (
    <Container>
      {books.map(({ id, title, author, price, stock }: Book) => (
        <Card key={id}>
          <Title>{title}</Title>
          <Text>by {author}</Text>
          <Text>Price: {price}</Text>
          <Text>In stock: {stock}</Text>
        </Card>
      ))}
    </Container>
  );
};
