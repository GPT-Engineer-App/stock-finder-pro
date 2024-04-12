import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to a backend service to get stock data
    // Since we cannot use yfinance or any other services, we will just log the search term
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-6">Stock Finder</h1>
        <form className="max-w-md mx-auto" onSubmit={handleSearch}>
          <div className="flex items-center bg-white rounded-md shadow-md">
            <input type="text" className="flex-grow p-2 rounded-l-md focus:outline-none" placeholder="Enter a stock symbol (e.g., AAPL)" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600">
              <FaSearch />
            </button>
          </div>
        </form>
        {/* Display search results here */}
        {/* This would be replaced with actual data rendering */}
        <div className="mt-8">
          <p className="text-center">Search results will be displayed here.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
