import Image from 'next/image';

const benefits = [
  {
    title: 'Free Shipping',
    description: 'On orders above ₹499 across India',
    icon: '/icons/shipping-icon.svg',
  },
  {
    title: 'Easy Returns',
    description: '10-day return policy',
    icon: '/icons/returns-icon.svg',
  },
  {
    title: '24/7 Support',
    description: 'Customer service round the clock',
    icon: '/icons/support-icon.svg',
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center text-secondary mb-12">
          Why Choose BookBazaar?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Image 
                  src={benefit.icon} 
                  alt={`${benefit.title} icon`} 
                  width={30} 
                  height={24} 
                />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">{benefit.title}</h3>
              <p className="text-text-secondary">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 