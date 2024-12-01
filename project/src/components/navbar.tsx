import { Bell, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/75 to-transparent px-4 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-netflix-red text-2xl font-bold">
            NETFLIX
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="/tv-shows" className="text-sm text-white hover:text-gray-300">
              TV Shows
            </Link>
            <Link to="/movies" className="text-sm text-white hover:text-gray-300">
              Movies
            </Link>
            <Link to="/new" className="text-sm text-white hover:text-gray-300">
              New & Popular
            </Link>
            <Link to="/my-list" className="text-sm text-white hover:text-gray-300">
              My List
            </Link>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <Search className="h-5 w-5 text-white cursor-pointer" />
          <Bell className="h-5 w-5 text-white cursor-pointer" />
          <User className="h-5 w-5 text-white cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}