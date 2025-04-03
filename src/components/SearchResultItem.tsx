import Image from 'next/image';
import Link from 'next/link';

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  reviews: number;
  rating: number;
  image: string;
  slug: string;
}

export default function SearchResultItem({ book }: { book: Book }) {
  return (
    <div className="bg-white rounded-xl shadow-custom overflow-hidden">
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
        <p className="text-sm text-text-secondary">by {book.author}</p>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="w-4 h-4">
                <Image 
                  src="/icons/star-icon.svg"
                  width={16}
                  height={16}
                  alt="star"
                  className={i < book.rating ? "text-primary" : "text-gray-300"}
                />
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-500">({book.reviews} reviews)</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-primary">₹{book.price}</span>
          <button className="btn-primary text-sm py-2 px-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
} 