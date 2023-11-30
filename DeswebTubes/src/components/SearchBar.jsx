import React from "react";

function SearchBar() {
  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Cari produk..."
        className="p-2 border border-gray-300 rounded"
      />
      <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
        Cari
      </button>
    </div>
  );
}

export default SearchBar;
