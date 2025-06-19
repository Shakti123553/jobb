import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Alice Thompson",
    location: "Kalimantan",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "Outstanding experience, very professional team.",
  },
  {
    name: "Stanley Mcdonald",
    location: "Sumatra",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Reliable and always available when needed!",
  },
  {
    name: "Anthony Gardner",
    location: "Jakarta",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
    quote: "Loved the attention to detail and quality service.",
  },
  {
    name: "Sophia Lee",
    location: "Bali",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
    quote: "Fantastic results and lovely people.",
  },
  {
    name: "Daniel Craig",
    location: "Java",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
    quote: "Extremely efficient and well-organized.",
  },
  {
    name: "Maya Patel",
    location: "Lombok",
    img: "https://randomuser.me/api/portraits/women/48.jpg",
    quote: "They really understand what I wanted. Impressed!",
  },
];

const Testimonials = () => {
  const CARDS_PER_SLIDE = 3;
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = Math.ceil(testimonials.length / CARDS_PER_SLIDE);

  const currentCards = testimonials.slice(
    activeSlide * CARDS_PER_SLIDE,
    (activeSlide + 1) * CARDS_PER_SLIDE
  );

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));
  };

  const handleBack = () => {
    setActiveSlide((prev) => (prev - 1 < 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <section className="bg-white py-20 px-4 md:px-16">
      <div className="text-center mb-12">
        <p className="text-green-600 text-xl pt-20 pb-7 font-semibold tracking-wide">
          TESTIMONIAL
        </p>
        <h2 className="text-3xl md:text-5xl font-bold pb-5 mt-2">
          What they say about us
        </h2>
      </div>

      {/* Cards */}
      <div className="flex justify-center gap-7 flex-wrap max-w-8xl mx-auto transition-all duration-500">
        {currentCards.map((t, idx) => (
          <div
            key={idx}
            className="bg-gray-100 w-full md:w-[30%] rounded-xl p-10 min-h-[360px] text-center shadow-md"
          >
            <img
              src={t.img}
              alt={t.name}
              className="w-20 h-20 mx-auto rounded-full border-4 border-white shadow mb-6"
            />
            <p className="text-gray-600 text-lg italic mb-6">"{t.quote}"</p>
            <h3 className="text-green-600 text-xl font-bold italic">
              {t.name}
            </h3>
            <p className="text-gray-500 text-md">{t.location}</p>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center mt-8 space-x-3">
        {/* Back Icon */}
        <button
          onClick={handleBack}
          className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition"
          title="Back"
        >
          <FaChevronLeft />
        </button>

        {/* Fixed 3 Dots */}
        <div className="flex space-x-2">
          {[0, 1, 2].map((dotIndex) => {
            const globalIndex = dotIndex;
            return (
              <span
                key={dotIndex}
                className={`w-3 h-3 rounded-full cursor-pointer transition ${
                  activeSlide === globalIndex ? "bg-green-500" : "bg-gray-300"
                }`}
                onClick={() => setActiveSlide(globalIndex)}
              ></span>
            );
          })}
        </div>

        {/* Next Icon */}
        <button
          onClick={handleNext}
          className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition"
          title="Next"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
