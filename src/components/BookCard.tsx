import React from 'react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <article>
      <img src={book.image_url} alt={book.title} />
      <h2>{book.title}</h2>
    </article>
  );
};

export default BookCard;
