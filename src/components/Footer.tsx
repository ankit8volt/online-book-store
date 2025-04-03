import Image from 'next/image';
import Link from 'next/link';

interface FooterLinkGroup {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}

const quickLinks: FooterLinkGroup = {
  title: 'Quick Links',
  links: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Blog', href: '/blog' },
  ]
};

const categoryLinks: FooterLinkGroup = {
  title: 'Categories',
  links: [
    { name: 'Fiction', href: '/categories/fiction' },
    { name: 'Non-Fiction', href: '/categories/non-fiction' },
    { name: 'Children\'s Books', href: '/categories/children' },
    { name: 'Academic', href: '/categories/academic' },
  ]
};

const socialLinks = [
  { name: 'Facebook', icon: '/icons/facebook-icon.svg', href: 'https://facebook.com' },
  { name: 'Twitter', icon: '/icons/twitter-icon.svg', href: 'https://twitter.com' },
  { name: 'Instagram', icon: '/icons/instagram-icon.svg', href: 'https://instagram.com' },
  { name: 'YouTube', icon: '/icons/youtube-icon.svg', href: 'https://youtube.com' }
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/icons/logo.svg" alt="BookBazaar Logo" width={34} height={30} className="invert" />
              <span className="text-2xl font-bold">BookBazaar</span>
            </div>
            <p className="text-text-light">
              India's most loved online bookstore since 2025.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">{quickLinks.title}</h3>
            <ul className="space-y-2">
              {quickLinks.links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-text-light hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">{categoryLinks.title}</h3>
            <ul className="space-y-2">
              {categoryLinks.links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-text-light hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  <Image 
                    src={social.icon} 
                    alt={`${social.name} icon`} 
                    width={24} 
                    height={24} 
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-gray-800 text-center text-text-light">
          <p>&copy; 2025 BookBazaar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 