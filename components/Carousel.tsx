"use client";

import React, { useRef, useState, useCallback } from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Chealsea Morgan",
    role: "CEO",
    company: "Subway",
    image: "chealsea.png",
    text: "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim.",
  },
  {
    name: "Nick Cave",
    role: "CMO",
    company: "Nokia",
    image: "nick.png",
    text: "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas.",
  },
  {
    name: "Lana Rosenfeld",
    role: "Senior VP",
    company: "Pinterest",
    image: "lana.png",
    text: "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat.",
  },
  // Additional dummy data
  {
    name: "John Doe",
    role: "Lead Developer",
    company: "Google",
    image: "john.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.",
  },
  {
    name: "Jane Smith",
    role: "Marketing Head",
    company: "Facebook",
    image: "chealsea.png",
    text: "Curabitur fermentum nunc nec justo ullamcorper, et aliquam odio consequat.",
  },
  {
    name: "Alex Johnson",
    role: "Project Manager",
    company: "Amazon",
    image: "nick.png",
    text: "Mauris dapibus risus quis suscipit vulputate. Eget diam non enim bibendum consectetur.",
  },
  {
    name: "Emily Davis",
    role: "Designer",
    company: "Apple",
    image: "chealsea.png",
    text: "Donec in bibendum felis. In condimentum vehicula ligula, ac eleifend ipsum.",
  },
];

const Carousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (carouselRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Adjust scrolling speed (higher value for faster scroll)
    carouselRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (carouselRef.current) {
      e.preventDefault();
      e.stopPropagation(); // Prevents global scroll from being affected
      carouselRef.current.scrollLeft += e.deltaY;
    }
  }, []);

  return (
    <div
      className="carousel flex space-x-4 overflow-hidden cursor-grab w-full bg-slate-50 pb-32"
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onWheel={handleWheel}
      style={{ cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none' }} // Disable text selection
    >
      {testimonials.map((testimonial, index) => (
        <div key={index} className="carousel-item flex-shrink-0 p-4">
          <div className="max-w-sm bg-white shadow-lg rounded-lg border border-gray-200 p-6">
            <div className="text-yellow-500 flex space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600" style={{ userSelect: 'none' }}>{testimonial.text}</p>
            <div className="flex items-center mt-4">
              <img
                className="w-10 h-10 object-cover rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900" style={{ userSelect: 'none' }}>{testimonial.name}</h3>
                <p className="text-sm text-gray-500" style={{ userSelect: 'none' }}>{testimonial.role} at {testimonial.company}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
