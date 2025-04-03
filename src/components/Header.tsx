'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const focusSearchInput = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Image src="/icons/logo.svg" alt="BookBazaar Logo" width={34} height={30} />
                <span className="text-2xl font-bold text-secondary">BookBazaar</span>
              </div>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-text-secondary hover:text-primary transition-colors">Home</Link>
            <Link href="/categories" className="text-text-secondary hover:text-primary transition-colors">Categories</Link>
            <Link href="/new-releases" className="text-text-secondary hover:text-primary transition-colors">New Releases</Link>
            <Link href="/best-sellers" className="text-text-secondary hover:text-primary transition-colors">Best Sellers</Link>
            <Link href="/contact" className="text-text-secondary hover:text-primary transition-colors">Contact</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <form onSubmit={handleSearch} className="relative hidden md:block">
              <input 
                ref={searchInputRef}
                type="text" 
                placeholder="Search books..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white border border-gray-300 text-gray-500 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 -translate-y-1/2"
                onClick={focusSearchInput}
              >
                <Image src="/icons/search-icon.svg" alt="Search" width={16} height={16} />
              </button>
            </form>
            
            <div className="flex items-center gap-3">
              <Link href="/account" className="text-text-secondary">
                <Image src="/icons/user-icon.svg" alt="Account" width={18} height={20} />
              </Link>
              <Link href="/cart" className="text-text-secondary">
                <Image src="/icons/cart-icon.svg" alt="Cart" width={22} height={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 