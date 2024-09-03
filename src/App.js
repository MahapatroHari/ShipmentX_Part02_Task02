import React from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

const App = () => {
  return (
    <div className="container mx-auto p-4 bg-black">
      <h1 className="text-3xl font-bold mb-6 text-white text-center">
        Personal Library Management
      </h1>
      <BookForm />
      <BookList />
    </div>
  );
};

export default App;
