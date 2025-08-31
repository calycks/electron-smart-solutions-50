import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroNetwork from "@/assets/hero-network.jpg";
import heroSmartBuilding from "@/assets/hero-smart-building.jpg";
import heroHomeAutomation from "@/assets/hero-home-automation.jpg";
const slides = [{
  image: heroNetwork,
  title: "Network Infrastructure Solutions",
  subtitle: "Professional ICT services and network structure wiring"
}, {
  image: heroSmartBuilding,
  title: "Smart Building Systems",
  subtitle: "Advanced KNX technology for intelligent buildings"
}, {
  image: heroHomeAutomation,
  title: "Home Automation Excellence",
  subtitle: "Complete automation solutions for modern living"
}];
const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  useEffect(() => {
    if (isAutoplay) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoplay]);
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000);
  };
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000);
  };
  return <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"}`}>
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="hero-overlay" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
                {slide.subtitle}
              </p>
              <div className="space-x-4 animate-fade-in">
                <button className="btn-primary">
                  Learn More
                </button>
                
              </div>
            </div>
          </div>
        </div>)}

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10">
        <ChevronLeft size={24} />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10">
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/75"}`} />)}
      </div>
    </div>;
};
export default HeroCarousel;