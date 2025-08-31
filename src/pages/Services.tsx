import { useEffect, useState } from "react";
import { Network, Building, Home, CheckCircle } from "lucide-react";
import networkWiring from "@/assets/service-network-wiring.jpg";
import smartBuilding from "@/assets/service-smart-building.jpg";
import homeAutomation from "@/assets/service-home-automation.jpg";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Network,
      title: "Network Structure Wiring",
      description: "Structural wiring is a modular system for designing and connecting wires and cables in enterprise buildings. Copper and fiber optic cables are used for data transmission. Implemented using international standards like TIA/EIA-568.",
      image: networkWiring,
      features: [
        "Cat6/Cat6A structured cabling",
        "Fiber optic installations",
        "Data center infrastructure",
        "TIA/EIA-568 compliance",
        "Network testing & certification",
        "Cable management systems"
      ]
    },
    {
      icon: Building,
      title: "Smart Buildings Wiring KNX",
      description: "KNX is an open standard system for smart building automation, controlling HVAC, lighting, blinds, and more. Improves energy efficiency, comfort, and safety.",
      image: smartBuilding,
      features: [
        "KNX/EIB system integration",
        "HVAC control systems",
        "Intelligent lighting control",
        "Automated blinds & shading",
        "Energy management systems",
        "Security system integration"
      ]
    },
    {
      icon: Home,
      title: "Building and Home Automation",
      description: "Intelligent control of lighting, climate, appliances, and security systems. Provides improved comfort, safety, and energy savings through automation and remote control.",
      image: homeAutomation,
      features: [
        "Smart lighting systems",
        "Climate control automation",
        "Security & access control",
        "Audio/video integration",
        "Mobile app control",
        "Energy monitoring"
      ]
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center fade-in-up ${isVisible ? 'animate' : ''}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Comprehensive ICT solutions and automation systems designed to transform your business infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className={`${!isEven ? 'lg:order-2' : ''} fade-in-up ${isVisible ? 'animate' : ''}`}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-4xl font-bold text-navy">{service.title}</h2>
                    </div>

                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-x-4">
                      <button className="btn-primary">
                        Get Quote
                      </button>
                      <button className="btn-outline">
                        Learn More
                      </button>
                    </div>
                  </div>

                  {/* Service Image */}
                  <div className={`${!isEven ? 'lg:order-1' : ''} fade-in-up ${isVisible ? 'animate' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex items-end">
                        <div className="p-6 text-white">
                          <Icon className="w-8 h-8 mb-2" />
                          <h3 className="text-lg font-semibold">{service.title}</h3>
                          <p className="text-sm opacity-90">Professional Installation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
            <h2 className="text-4xl font-bold text-navy mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From consultation to completion, we ensure every project meets the highest standards
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Understanding your specific requirements and challenges" },
              { step: "02", title: "Design", description: "Creating detailed system architecture and implementation plan" },
              { step: "03", title: "Installation", description: "Professional installation by certified technicians" },
              { step: "04", title: "Support", description: "Ongoing maintenance and 24/7 technical support" }
            ].map((item, index) => (
              <div 
                key={item.step}
                className={`text-center fade-in-up ${isVisible ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`fade-in-up ${isVisible ? 'animate' : ''}`}>
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl opacity-90 mb-8">
              Contact our expert team today for a free consultation and quote tailored to your specific needs.
            </p>
            <div className="space-x-4">
              <button className="btn-primary">
                Request Quote
              </button>
              <button className="btn-outline">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;