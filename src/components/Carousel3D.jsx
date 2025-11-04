import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(Observer);

const images = [
  'https://m.media-amazon.com/images/I/416wet2WcSL._UF1000,1000_QL80_.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1pYG5W5MF-rT6SadbqJiPcS5Di-olcUAaJXXCoN9A9L3yR_GUUXq4C4nPTLN4q5idzy4&usqp=CAU',
  'https://www.glassesindia.com/cdn/shop/products/Cat_Eye_Rimless_Glasses_for_Men_Women.jpg?v=1731061454',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtbNeIprZ_UhBs2aX7DICSfZQ1bP5q-R-RpzG3yUvTUzVGReYdA0YVeNKjmAUoR9N6MA&usqp=CAU',
  'https://i.ebayimg.com/images/g/BcEAAOSwBbBlgPW0/s-l1200.jpg',
  'https://goeye.in/cdn/shop/files/95206MG4428-C1-New-23-may_1.jpg?v=1748076550&width=800',
  'https://i.ebayimg.com/images/g/tGIAAOSwpD5n5Mna/s-l1200.jpg',
  'https://i.pinimg.com/736x/b3/d4/f4/b3d4f45b3aeda8cbd673618e16a8c537.jpg',
];

export default function Carousel3D() {
  const carouselRef = useRef(null);
  const progress = useRef({ value: 0 });

  useEffect(() => {
    const carousel = carouselRef.current;
    const radius = 242;
    const imgs = carousel.querySelectorAll('.carousel-image');

    Observer.create({
      target: carousel,
      type: 'wheel,pointer',
      onPress: () => {
        carousel.style.cursor = 'grabbing';
      },
      onRelease: () => {
        carousel.style.cursor = 'grab';
      },
      onChange: (self) => {
        gsap.killTweensOf(progress.current);
        let p;
        if (self.event.type === 'wheel') {
          p = self.deltaY * -0.0005;
        } else {
          p = self.deltaX * 0.05;
        }
        gsap.to(progress.current, {
          duration: 2,
          ease: 'power4.out',
          value: `+=${p}`,
          onUpdate: () => {
            animate();
          },
        });
      },
    });

    const animate = () => {
      imgs.forEach((image, index) => {
        const theta = index / imgs.length - progress.current.value;
        const x = -Math.sin(theta * Math.PI * 2) * radius;
        const y = Math.cos(theta * Math.PI * 2) * radius;
        image.style.transform = `translate3d(${x}px, 0px, ${y}px) rotateY(${360 * -theta}deg)`;
      });
    };

    animate();

    return () => {
      gsap.ticker.remove(animate);
    };
  }, []);

  return (
    <div
      ref={carouselRef}
      className="carousel w-full"
      style={{
        transform: 'rotateX(-20deg) translateY(-70px)',
        transformStyle: 'preserve-3d',
        perspective: '800px',
        userSelect: 'none',
        cursor: 'grab',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className="carousel-image w-52 h-52 rounded-xl shadow-2xl bg-center bg-cover border-4 border-white/20 transform -translate-x-1/2 -translate-y-1/2"
          style={{ backgroundImage: `url('${src}')`, position: 'absolute', left: '50%', top: '50%', transformOrigin: '50% 50%' }}
        />
      ))}
    </div>
  );
}
