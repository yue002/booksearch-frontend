import React, { useState } from 'react';
import axios from 'axios';
import SearchBox from './components/SearchBox';
import BookCard from './components/BookCard';
import { Book } from './types';

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async (query: string) => {
    try {
      const response = await axios.get<Book[]>('/api/books', {
        params: { q: query },
      });
      setBooks(response.data);
    } catch (error) {
      console.error('Failed to fetch books', error);
    }
  };

  const handleSearch = (query: string) => {
    fetchBooks(query);
  };

  return (
    <div className="container">
      <header>
        <h1>Book Search</h1>
        <SearchBox onSearch={handleSearch} />
      </header>
      <main>
        <div className="grid">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
