import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoriesSection from '@/components/CategoriesSection';
import FeaturedBooks from '@/components/FeaturedBooks';
import BenefitsSection from '@/components/BenefitsSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <CategoriesSection />
      <FeaturedBooks />
      <BenefitsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
} 