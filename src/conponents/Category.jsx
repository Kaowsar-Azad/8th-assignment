"use client";
import Link from "next/link";
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

  

  return (
    <div className="flex flex-col md:flex-row gap-6 px-4 md:px-6 py-6 bg-gray-100 min-h-screen">
      <div className="w-full md:w-64 bg-white p-4 rounded shadow h-fit">
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

        <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.slug)}
              className={`block whitespace-nowrap md:whitespace-normal w-fit md:w-full text-left p-1 md:p-0 ${
                category === c.slug ? "text-purple-600 font-bold" : ""
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-full mb-6 px-4 py-2 border rounded"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredBooks.map((b) => (
            <div key={b.id} className="bg-white rounded shadow p-2 flex flex-col">
              <img
                src={b.imageUrl}
                className="w-full h-48 md:h-40 object-cover rounded"
              />

              <h3 className="text-sm font-semibold mt-2 line-clamp-1">{b.title}</h3>
              <p className="text-xs text-gray-500">{b.author}</p>

              <Link href={`/all-photos/${b.id}`} className="mt-auto">
                <button className="mt-2 w-full bg-purple-600 text-white py-2 md:py-1 rounded text-sm">
                  Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;