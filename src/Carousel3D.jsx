import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import './Carousel3D.css';

gsap.registerPlugin(Observer);

const Carousel3D = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const images = carouselRef.current.querySelectorAll('.carousel-image');
    const radius = 242;
    const progress = { value: 0 };
    const carousel = carouselRef.current;

    gsap.Observer.create({
      target: carousel,
      type: "wheel,pointer",
      onPress: () => {
        carousel.style.cursor = 'grabbing';
      },
      onRelease: () => {
        carousel.style.cursor = 'grab';
      },
      onChange: (self) => {
        gsap.killTweensOf(progress);

        let p;
        if (self.event.type === 'wheel') {
          p = self.deltaY * -0.0005;
        } else {
          p = self.deltaX * 0.05;
        }

        gsap.to(progress, {
          duration: 2,
          ease: 'power4.out',
          value: `+=${p}`
        });
      }
    });

    const animate = () => {
      images.forEach((image, index) => {
        const theta = index / images.length - progress.value;
        const x = -Math.sin(theta * Math.PI * 2) * radius;
        const y = Math.cos(theta * Math.PI * 2) * radius;
        image.style.transform = `translate3d(${x}px, 0px, ${y}px) rotateY(${360 * -theta}deg)`;
      });
    };

    gsap.ticker.add(animate);

    return () => {
      gsap.ticker.remove(animate);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div ref={carouselRef} className="carousel w-full">
        <div className="carousel-image w-52 h-52 rounded-xl shadow-2xl bg-center bg-cover border-4 border-white/20 transform -translate-x-1/2 -translate-y-1/2" style={{ backgroundImage: "url('https://m.media-amazon.com/images/I/416wet2WcSL._UF1000,1000_QL80_.jpg')" }}></div>
        <div className="carousel-image w-52 h-52 rounded-xl shadow-2xl bg-center bg-cover border-4 border-white/20 transform -translate-x-1/2 -translate-y-1/2" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1pYG5W5MF-rT6SadbqJiPcS5Di-olcUAaJXXCoN9A9L3yR_GUUXq4C4nPTLN4q5idzy4&usqp=CAU')" }}></div>
        <div className="carousel-image w-52 h-52 rounded-xl shadow-2xl bg-center bg-cover border-4 border-white/20 transform -translate-x-1/2 -translate-y-1/2" style={{ backgroundImage: "url('https://www.glassesindia.com/cdn/shop/products/Cat_Eye_Rimless_Glasses_for_Men_Women.jpg?v=1731061454')" }}></div>
        <div className="carousel-image w-52 h-52 rounded-xl shadow-2xl bg-center bg-cover border-4 border-white/20 transform -translate-x-1/2 -translate-y-1/2" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtbNeIprZ_UhBs2aX7DICSfZQ1bP5q-R-RpzG3yUvTUzVGReYdA0YVeNKjmAUoR9N6MA&usqp=CAU')" }}></div>
        <div className="carousel-image w-52 h-52 rounded-xl shadow-2xl bg-center bg-cover border-4 border-white/20 transform -translate-x-1/2 -translate-y-1/2" style={{ backgroundImage: "url('https://i.ebayimg.com/images/g/BcEAAOSwBbBlgPW0/s-l1200.jpg')" }}></div>
        <div className="carousel-image w-52 h-52 rounded-xl shadow-2xl bg-center bg-cover border-4 border-white/20 transform -translate-x-1/2 -translate-y-1/2" style={{ backgroundImage: "url('https://goeye.in/cdn/shop/files/95206MG4428-C1-New-23-may_1.jpg?v=1748076550&width=800')" }}></div>
        <div className="carousel-image w-52 h-52 rounded-xl shadow-2xl bg-center bg-cover border-4 border-white/20 transform -translate-x-1/2 -translate-y-1/2" style={{ backgroundImage: "url('https://i.ebayimg.com/images/g/tGIAAOSwpD5n5Mna/s-l1200.jpg')" }}></div>
        <div className="carousel-image w-52 h-52 rounded-xl shadow-2xl bg-center bg-cover border-4 border-white/20 transform -translate-x-1/2 -translate-y-1/2" style={{ backgroundImage: "url('https://i.pinimg.com/736x/b3/d4/f4/b3d4f45b3aeda8cbd673618e16a8c537.jpg')" }}></div>
      </div>
      <div className="absolute inset-x-0 bottom-10 md:bottom-20 text-center text-gray-400 font-mono text-sm p-4">
        Scroll or drag horizontally on the carousel to rotate.
      </div>
    </div>
  );
};

export default Carousel3D;
