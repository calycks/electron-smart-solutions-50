import { useEffect, useState } from "react";
import { Network, Building, Home as HomeIcon } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import ServiceCard from "@/components/ServiceCard";
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const services = [{
    icon: Network,
    title: "Network Structure Wiring",
    description: "Professional structured cabling solutions using copper and fiber optic cables for enterprise buildings, following international TIA/EIA-568 standards."
  }, {
    icon: Building,
    title: "Smart Buildings Wiring KNX",
    description: "Advanced KNX building automation systems for intelligent control of HVAC, lighting, blinds, and security systems with improved efficiency."
  }, {
    icon: HomeIcon,
    title: "Building and Home Automation",
    description: "Comprehensive automation solutions for lighting, climate, appliances, and security systems with remote control capabilities."
  }];
  return <main>
      {/* Hero Section */}
      <section className="relative">
        <HeroCarousel />
        
        {/* Scroll indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Eelectron specializes in cutting-edge ICT solutions, smart building technologies, 
              and comprehensive automation systems for modern businesses and homes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => <div key={service.title} className={`fade-in-up ${isVisible ? 'animate' : ''}`} style={{
            animationDelay: `${index * 200}ms`
          }}>
                <ServiceCard {...service} />
              </div>)}
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-navy mb-4">
                Ready to Transform Your Infrastructure?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let our expert team help you build intelligent, efficient, and future-ready systems.
              </p>
              <div className="space-x-4">
                <button className="btn-primary">
                  Get Started Today
                </button>
                <button className="btn-outline">
                  View All Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Eelectron Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Eelectron?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              With over 17 years of experience and a team of highly qualified professionals, 
              we deliver excellence in every project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`text-center fade-in-up ${isVisible ? 'animate' : ''}`}>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">17+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Years of Excellence</h3>
              <p className="opacity-80">Established in 2006 with proven track record</p>
            </div>
            
            <div className={`text-center fade-in-up ${isVisible ? 'animate' : ''}`}>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">100%</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Client Satisfaction</h3>
              <p className="opacity-80">Dedicated to exceeding expectations</p>
            </div>
            
            <div className={`text-center fade-in-up ${isVisible ? 'animate' : ''}`}>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">24/7</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="opacity-80">Round-the-clock technical assistance</p>
            </div>
          </div>
        </div>
      </section>
    </main>;
};
export default Home;