import React from 'react'
import { FaSearch } from 'react-icons/fa'

interface SearchBarProps {
  searchQuery: string
  onSearchChange: (query: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="relative mb-8">
      <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
      <input
        type="text"
        placeholder="Search articles..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full bg-dark-card border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  )
}

export default SearchBar