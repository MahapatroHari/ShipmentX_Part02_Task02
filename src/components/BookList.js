import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, updateBookStatus } from '../redux/booksSlice';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  const [filter, setFilter] = useState('All');

  const filteredBooks = books.filter((book) => {
    if (filter === 'All') return true;
    return book.status === filter;
  });

  const handleStatusChange = (id, status) => {
    dispatch(updateBookStatus({ id, status }));
  };

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center text-white">Books List</h2>
      <div className="mb-4 text-center">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded text-black"
        >
          <option value="All">All</option>
          <option value="Read">Read</option>
          <option value="Currently Reading">Currently Reading</option>
          <option value="Want to Read">Want to Read</option>
        </select>
      </div>
      {filteredBooks.length === 0 ? (
        <p className='text-white text-center font-bold'>No books available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-md shadow-md">
            <thead className="bg-gray-400 text-gray-700 rounded-tl-md rounded-tr-md">
              <tr>
                <th className="px-4 py-2 rounded-tl-md">Title</th>
                <th className="px-4 py-2">Author</th>
                <th className="px-4 py-2">Genre</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2 rounded-tr-md">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((book) => (
                <tr key={book.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 text-center">{book.title}</td>
                  <td className="px-4 py-2 text-center">{book.author}</td>
                  <td className="px-4 py-2 text-center">{book.genre}</td>
                  <td className="px-4 py-2 text-center">{book.status}</td>
                  <td className="px-4 py-2 text-center space-x-2">
                    <button
                      onClick={() => handleStatusChange(book.id, 'Read')}
                      className="bg-black text-white px-2 py-1 rounded hover:bg-slate-900"
                    >
                      Read
                    </button>
                    <button
                      onClick={() => handleStatusChange(book.id, 'Currently Reading')}
                      className="bg-black text-white px-2 py-1 rounded hover:bg-slate-900"
                    >
                      Reading
                    </button>
                    <button
                      onClick={() => handleStatusChange(book.id, 'Want to Read')}
                      className="bg-black text-white px-2 py-1 rounded hover:bg-slate-900"
                    >
                      Want to Read
                    </button>
                    <button
                      onClick={() => handleRemove(book.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BookList;
