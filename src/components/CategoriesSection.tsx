import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { name: 'Fiction', icon: '/icons/fiction-icon.svg', color: 'bg-category-fiction', href: '/categories/fiction' },
  { name: 'Non-Fiction', icon: '/icons/nonfiction-icon.svg', color: 'bg-category-nonfiction', href: '/categories/non-fiction' },
  { name: 'Academic', icon: '/icons/academic-icon.svg', color: 'bg-category-academic', href: '/categories/academic' },
  { name: 'Children', icon: '/icons/children-icon.svg', color: 'bg-category-children', href: '/categories/children' },
  { name: 'Regional', icon: '/icons/regional-icon.svg', color: 'bg-category-regional', href: '/categories/regional' },
  { name: 'Comics', icon: '/icons/comics-icon.svg', color: 'bg-category-comics', href: '/categories/comics' },
];

export default function CategoriesSection() {
  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center text-secondary mb-12">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link href={category.href} key={category.name} className={`category-card ${category.color}`}>
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <Image
                  src={category.icon}
                  alt={`${category.name} icon`}
                  width={30}
                  height={30}
                />
              </div>
              <h3 className="text-base font-semibold text-secondary">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 