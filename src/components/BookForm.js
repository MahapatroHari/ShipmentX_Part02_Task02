import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';

const BookForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [status, setStatus] = useState('Want to Read');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && author && genre) {
            dispatch(addBook({
                id: Date.now(),
                title,
                author,
                genre,
                status,
            }));
            setTitle('');
            setAuthor('');
            setGenre('');
            setStatus('Want to Read');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-lg bg-white">
            <h2 className="text-xl font-bold mb-4">Add New Book</h2>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-black"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Author</label>
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-black"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Genre</label>
                <input
                    type="text"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-black"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Status</label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-black"
                >
                    <option value="Want to Read">Want to Read</option>
                    <option value="Currently Reading">Currently Reading</option>
                    <option value="Read">Read</option>
                </select>
            </div>
            <div className="flex justify-center">
                <button
                    type="submit"
                    className="bg-black text-white px-4 py-2 rounded hover:bg-slate-900"
                >
                    Add Book
                </button>
            </div>
        </form>
    );
};

export default BookForm;
