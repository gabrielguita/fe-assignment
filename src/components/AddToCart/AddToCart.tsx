"use client";

import React, { useState } from "react";
import { Container, Row } from "./AddToCart.styles";

import { Book } from "@/types";

interface addedBooksProps {
  addedBooks: Book;
}

export const AddToCart = ({ addedBooks }: addedBooksProps) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <div onClick={() => setShow(!show)}>
        Add To Cart <div> {addedBooks.length}</div>
      </div>

      <Container
        style={{
          display: !show ? "none" : "inline-block",
        }}
      >
        {addedBooks.map(({ id, title, author }: Book) => (
          <Row key={id}>
            <div>{id}</div>
            <div>{title}</div>
            <div>{author}</div>
          </Row>
        ))}
      </Container>
    </>
  );
};
