import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchResultItem from '@/components/SearchResultItem';

// Sample data for search results
const searchResults = [
  {
    id: 1,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    price: 399,
    reviews: 432,
    rating: 5,
    image: '/images/search/book-psychology-of-money.jpg',
    slug: 'the-psychology-of-money'
  },
  {
    id: 2,
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    price: 599,
    reviews: 891,
    rating: 5,
    image: '/images/search/book-thinking-fast-slow.jpg',
    slug: 'thinking-fast-and-slow'
  },
  {
    id: 3,
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 499,
    reviews: 567,
    rating: 5,
    image: '/images/search/book-atomic-habits.jpg',
    slug: 'atomic-habits'
  },
  {
    id: 4,
    title: 'The Power of Habit',
    author: 'Charles Duhigg',
    price: 699,
    reviews: 723,
    rating: 5,
    image: '/images/search/book-power-of-habit.jpg',
    slug: 'the-power-of-habit'
  }
];

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q || 'psychology';
  
  return (
    <>
      <Header />
      <main className="py-8">
        <div className="container-custom">
          <div className="space-y-8">
            {/* Search Results Header */}
            <div>
              <h1 className="text-2xl font-bold text-secondary">Search Results</h1>
              <p className="text-text-secondary">Showing {searchResults.length} results for "{query}"</p>
            </div>
            
            {/* Filters Row */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex gap-4">
                <div className="relative">
                  <select 
                    className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50"
                    defaultValue="all"
                  >
                    <option value="all">All Categories</option>
                    <option value="fiction">Fiction</option>
                    <option value="non-fiction">Non-Fiction</option>
                    <option value="academic">Academic</option>
                    <option value="children">Children</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                <div className="relative">
                  <select 
                    className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50"
                    defaultValue=""
                  >
                    <option value="">Price Range</option>
                    <option value="0-299">₹0 - ₹299</option>
                    <option value="300-499">₹300 - ₹499</option>
                    <option value="500-699">₹500 - ₹699</option>
                    <option value="700+">₹700+</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <select 
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50"
                  defaultValue="relevance"
                >
                  <option value="relevance">Sort by: Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest Arrivals</option>
                  <option value="bestselling">Bestselling</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Search Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {searchResults.map(book => (
                <SearchResultItem key={book.id} book={book} />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-8">
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-text-secondary hover:bg-gray-50">
                <Image src="/icons/arrow-left.svg" width={10} height={16} alt="Previous page" />
              </button>
              
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white">
                1
              </button>
              
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-text-secondary hover:bg-gray-50">
                2
              </button>
              
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-text-secondary hover:bg-gray-50">
                3
              </button>
              
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-text-secondary hover:bg-gray-50">
                <Image src="/icons/arrow-right-pagination.svg" width={10} height={16} alt="Next page" />
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 