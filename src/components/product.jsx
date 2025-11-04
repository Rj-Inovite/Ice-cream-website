import React, { useState } from 'react';
import { CheckCircle, MinusCircle, Heart, Milk, Grape, ArrowRight, ShoppingCart } from 'lucide-react';

// --- Product Data Structure ---
const productData = {
  name: 'Strawberry Ice Cream',
  tagline: 'A Scoop of Pure Joy Made from Real Strawberries and Creamy Milk.',
  // Banner image remains the waffle cone
  bannerImage: 'https://img.freepik.com/premium-photo/strawberry-ice-cream-waffle-cone-red-berries-ice-cream-balls-wooden-background_126267-4177.jpg',
  // Main product image remains the rustic wooden table (now used next to description)
  image: 'https://media.istockphoto.com/id/946097778/photo/strawberry-ice-cream-shot-on-rustic-wooden-table.jpg?s=612x612&w=0&k=20&c=OMJv3fSh7QjJLBHi14F8BGl2tkXORRo0fj_7UOTQGHs=',
  // Removed the whyLoveItImage
  mainDescription: "Made with love from hand-picked, sun-ripened strawberries, our Strawberry Ice Cream is the perfect balance of fruity sweetness and creamy indulgence. Every scoop is crafted with 100% pure milk sourced from Kolhapur and blended with real strawberry pulp — no artificial colours, flavours, or preservatives, ever. From the first spoonful, you’ll taste nature’s best — fresh, fragrant, and fabulously pink.",

  features: [
    { icon: Grape, text: 'Made with real strawberries' },
    { icon: Milk, text: 'Crafted using 100% pure milk' },
    { icon: MinusCircle, text: 'No preservatives, no artificial colours or flavours' },
    { icon: Heart, text: 'Smooth, creamy texture that melts in your mouth' },
    { icon: CheckCircle, text: 'Vegetarian-friendly delight' },
  ],

  sizes: [
    { name: '100 ml Cup', description: 'For when you want a small indulgence', price: 115 },
    { name: '500 ml Tub', description: 'Perfect for sharing (or not 😉)', price: 450 },
  ],

  faqs: [
    { question: 'Are real strawberries used in this ice cream?', answer: 'Yes! We use authentic strawberry pulp made from hand-picked strawberries to ensure that every bite bursts with natural fruit flavour.' },
    { question: 'Does it contain artificial flavours or preservatives?', answer: 'Absolutely not. We believe in purity — our ice creams are made using natural ingredients only.' },
    { question: 'How should I store it?', answer: 'Keep it frozen below –18°C for the best creamy texture. Once opened, consume within a few days for the freshest taste.' },
  ],

  // Data for the "Gallery" section with provided images
  alsoAvailableIn: [
    { name: 'Pink Swirl Cone', image: 'https://img.freepik.com/free-photo/top-view-delicious-pink-ice-cream-still-life_23-2150096621.jpg?semt=ais_hybrid&w=740&q=80' },
    { name: 'Strawberry Scoop', image: 'https://i.pinimg.com/736x/3e/4a/eb/3e4aeb9ae05745a252572c1c33e81392.jpg' },
    { name: 'Frozen Popsicle', image: 'https://peanutbutterpluschocolate.com/wp-content/uploads/2020/05/Sugar-Free-Strawberry-Popsicles_0010.jpg' },
  ],
};

// --- Sub-Components for Organization ---

const FeatureCard = ({ icon: Icon, text }) => (
  <div className="flex items-start p-4 bg-pink-50 rounded-xl shadow-md transition duration-300 transform hover:scale-[1.02] hover:shadow-lg border-l-4 border-pink-400">
    <Icon className="w-6 h-6 text-pink-600 mr-3 mt-1 flex-shrink-0" />
    <p className="text-gray-700 font-medium">{text}</p>
  </div>
);

const SizeOption = ({ name, description, price }) => (
  <div className="flex justify-between items-center p-5 bg-white rounded-xl shadow-lg border border-pink-100 transition duration-300 transform hover:ring-2 hover:ring-pink-500 hover:shadow-xl">
    <div>
      <h4 className="text-xl font-bold text-gray-800">{name}</h4>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
    </div>
    <div className="flex items-center space-x-4">
      <span className="text-2xl font-extrabold text-pink-600">₹{price}</span>
      <button className="flex items-center bg-pink-500 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-pink-600 transition duration-200">
        <ShoppingCart className="w-4 h-4 mr-2" /> Buy
      </button>
    </div>
  </div>
);

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    // Updated container: uses a light pink background and subtle scale-up when open
    <div className={`border-b border-pink-200 py-4 cursor-pointer transition-all duration-300 rounded-lg
                    ${isOpen ? 'bg-pink-50' : 'bg-white'}`}
    >
      <div
        onClick={toggleOpen}
        className="flex justify-between items-center px-4 transition duration-300 hover:text-pink-600"
      >
        <h5 className={`text-lg text-gray-800 transition duration-300 ${isOpen ? 'font-bold text-pink-700' : 'font-semibold'}`}>
          Q{index+1}. {question}
        </h5>
        <ArrowRight className={`w-5 h-5 text-pink-500 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`} />
      </div>
      <div
        // Accordion content visibility transition
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 px-4 pt-1 pb-2">{answer}</p>
      </div>
    </div>
  );
};

// --- Main Application Component ---
export default function App() {
  const { name, tagline, bannerImage, image, mainDescription, features, sizes, faqs, alsoAvailableIn } = productData;

  // --- JSX Structure ---
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-100 to-white font-sans text-gray-900">

      {/* Product Hero Section with Background Image */}
      <header
        className="relative py-12 md:py-20 text-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-white"> {/* Ensure text is above overlay */}
          <h1 className="text-6xl font-extrabold transition duration-500 hover:tracking-wide drop-shadow-lg">
            {name}
          </h1>
          <p className="text-2xl font-light mt-2 italic drop-shadow-md">{tagline}</p>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto p-4 sm:p-8 lg:p-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Image & Description (Left Column) */}
          <div className="md:sticky md:top-8 space-y-8">
            {/* Increased hover scale from 1.02 to 1.05 */}
            <div className="rounded-3xl shadow-2xl overflow-hidden transition duration-500 transform hover:shadow-3xl hover:-translate-y-1 hover:scale-[1.05]">
              <img
                src={image} // This is now the rustic table image
                alt={name}
                // Removed aspect-[4/3] to make the image larger (taller)
                className="w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Taste of Freshness Section - Shadow Removed */}
            <section className="p-6 bg-white rounded-2xl border border-pink-100">
              <h2 className="text-3xl font-bold text-pink-600 mb-4 border-b pb-2">The Taste of Freshness</h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">{mainDescription}</p>

            </section>
          </div>

          {/* Features, Sizes, & CTA (Right Column) */}
          <div className="space-y-12">

            {/* Why You’ll Love It (Features) */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why You’ll Love It</h2>
              {/* Removed the extra image block from here */}
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <FeatureCard key={index} icon={feature.icon} text={feature.text} />
                ))}
              </div>
            </section>

            {/* Available Sizes */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Available Sizes</h2>
              <div className="space-y-4">
                {sizes.map((size) => (
                  <SizeOption key={size} {...size} />
                ))}
              </div>
            </section>

            {/* Gallery Section */}
            <section>
              <h2 className="text-3xl font-bold text-pink-700 mb-6">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {alsoAvailableIn.map((flavor) => (
                  <div
                    key={flavor.name}
                    className="relative w-full aspect-square overflow-hidden rounded-xl shadow-md group cursor-pointer
                               transform transition duration-300 hover:scale-[1.05] hover:shadow-xl"
                  >
                    <img
                      src={flavor.image}
                      alt={flavor.name}
                      className="w-full h-full object-cover transition duration-300 group-hover:brightness-90"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-lg font-bold text-center drop-shadow-md">{flavor.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* FAQs (Full Width) - Shadow Removed from the container */}
        <div className="mt-16 bg-white p-8 rounded-3xl border border-pink-100">
          <section className="mb-12">
            <h2 className="text-4xl font-extrabold text-pink-700 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-1">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
              ))}
            </div>
          </section>
        </div>
      </main>

    </div>
  );
}
