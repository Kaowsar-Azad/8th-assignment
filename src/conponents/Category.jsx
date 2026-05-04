"use client";

import { useEffect, useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const c = await fetch("https://pixgen-project-x2ts.vercel.app/category.json");
      const cData = await c.json();
      setCategories(cData);

      const b = await fetch("https://pixgen-project-x2ts.vercel.app/data.json");
      const bData = await b.json();
      setBooks(bData);
      setFilteredBooks(bData);
    };

    getData();
  }, []);

  useEffect(() => {
    const result = books.filter((item) => {
      const matchCategory = category ? item.category.toLowerCase() === category : true;
      const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });

    setFilteredBooks(result);
  }, [search, category, books]);

  if (selectedBook) {
    return (
      <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
        <div className="w-full max-w-4xl bg-white rounded-xl shadow p-6">
          <button
            onClick={() => setSelectedBook(null)}
            className="mb-4 bg-purple-600 text-white px-4 py-2 rounded"
          >
            Back
          </button>

          <img
            src={selectedBook.imageUrl}
            className="w-full h-80 object-cover rounded mb-4"
          />

          <h1 className="text-2xl font-bold mb-2">{selectedBook.title}</h1>
          <p className="text-gray-600 mb-2">{selectedBook.author}</p>
          <p className="mb-4">{selectedBook.description}</p>

          <div className="flex gap-4 text-sm">
            <span>❤️ {selectedBook.likes}</span>
            <span>⬇️ {selectedBook.downloads}</span>
            <span>⭐ {selectedBook.rating}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-6 px-6 py-6 bg-gray-100 min-h-screen">
      <div className="w-64 bg-white p-4 rounded shadow">
        <h2 className="mb-4 font-semibold">Filter</h2>

        <button
          onClick={() => {
            setCategory("");
            setSearch("");
          }}
          className="bg-purple-600 text-white px-4 py-2 rounded w-full mb-3"
        >
          All
        </button>

        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setCategory(c.slug)}
            className={`block w-full text-left mb-2 ${
              category === c.slug ? "text-purple-600" : ""
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="flex-1">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-full mb-6 px-4 py-2 border rounded"
        />

        <div className="grid grid-cols-4 gap-4">
          {filteredBooks.map((b) => (
            <div key={b.id} className="bg-white rounded shadow p-2">
              <img
                src={b.imageUrl}
                className="w-full h-40 object-cover rounded"
              />

              <h3 className="text-sm font-semibold mt-2">{b.title}</h3>
              <p className="text-xs text-gray-500">{b.author}</p>

              <button
                onClick={() => setSelectedBook(b)}
                className="mt-2 w-full bg-purple-600 text-white py-1 rounded"
              >
                Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;