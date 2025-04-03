'use client';

import { FormEvent, useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Subscribe logic would go here
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };
  
  return (
    <section className="py-16 bg-category-fiction">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-text-secondary mb-8">
            Get updates on new releases, exclusive offers, and reading recommendations!
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-primary"
              required
            />
            <button 
              type="submit"
              className="btn-primary py-3"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 