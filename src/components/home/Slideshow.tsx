import { useState, useEffect } from 'react';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      url: '/slideshow/sl1.png',
      title: 'Principal Office'
    },
    {
      url: '/slideshow/sl3.png',
      title: 'Mathematics Lecture'
    },
    {
      url: '/slideshow/sl4.png',
      title: 'Biology Lab'
    },
    {
      url: '/slideshow/sl5.png',
      title: 'Hindi Lecture'
    },
    {
      url: '/slideshow/sl6.png',
      title: 'Commerce Lecture'
    },
    {
      url: '/slideshow/sl8.png',
      title: 'Agriculture Lecture'
    },
    {
      url: '/slideshow/sl2.png',
      title: 'English Lecture'
    },
    {
      url: '/slideshow/sl7.png',
      title: 'Security Lab'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-xl">
      <div className="aspect-video md:aspect-[21/9] lg:aspect-[21/8]">
        {slides.map((slide, index) => (
          <div
            key={slide.url}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={slide.url}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h3 className="text-white text-lg md:text-xl font-semibold">{slide.title}</h3>
            </div>
          </div>
        ))}
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all
                ${index === currentSlide ? 'bg-school-gold w-4' : 'bg-white'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;