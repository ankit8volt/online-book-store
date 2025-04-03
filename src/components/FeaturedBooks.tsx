import Image from 'next/image';
import Link from 'next/link';

const featuredBooks = [
  {
    id: 1,
    title: 'The Hidden Palace',
    author: 'Amish Tripathi',
    price: 499,
    image: '/images/book1.jpg',
    slug: 'the-hidden-palace'
  },
  {
    id: 2,
    title: 'The Silent Echo',
    author: 'Sudha Murty',
    price: 399,
    image: '/images/book2.jpg',
    slug: 'the-silent-echo'
  },
  {
    id: 3,
    title: 'Midnight\'s Children',
    author: 'Salman Rushdie',
    price: 599,
    image: '/images/book3.jpg',
    slug: 'midnights-children'
  },
  {
    id: 4,
    title: 'Zero to One',
    author: 'Peter Thiel',
    price: 699,
    image: '/images/book4.jpg',
    slug: 'zero-to-one'
  }
];

export default function FeaturedBooks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-secondary">Featured Books</h2>
          <Link href="/search" className="flex items-center text-primary gap-1 hover:underline">
            <span>View All</span>
            <Image src="/icons/arrow-right.svg" alt="Arrow right" width={14} height={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <div className="relative h-64 w-full">
                <Image 
                  src={book.image} 
                  alt={book.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-4 space-y-3">
                <h3 className="text-xl font-bold text-secondary">{book.title}</h3>
                <p className="text-text-secondary">by {book.author}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary">₹{book.price}</span>
                  <button className="btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 