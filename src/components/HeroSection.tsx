import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-hero-gradient py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary">
              Discover Your Next Favorite Book
            </h1>
            <p className="text-xl text-text-secondary">
              India's largest online bookstore with over 10 million titles across multiple languages and genres.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/shop" className="btn-primary">
                Shop Now
              </Link>
              <Link href="/search?q=bestseller" className="btn-outline">
                Browse Bestsellers
              </Link>
            </div>
          </div>
          <div className="relative h-[350px] md:h-[450px] shadow-hero rounded-lg overflow-hidden">
            <Image 
              src="/images/hero-image.jpg" 
              alt="Books collection" 
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 