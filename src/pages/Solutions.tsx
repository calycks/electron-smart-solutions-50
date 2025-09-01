import { useEffect, useState } from "react";
import { Camera, Lock, Tv, Volume2, Phone, Radio, Building2, CheckCircle } from "lucide-react";
import ipSurveillance from "@/assets/solution-ip-surveillance.jpg";
import electronicLock from "@/assets/solution-electronic-lock.jpg";
import iptv from "@/assets/solution-iptv.jpg";
import paAudio from "@/assets/solution-pa-audio.jpg";
import voip from "@/assets/solution-voip.jpg";
import bms from "@/assets/solution-bms.jpg";

const Solutions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const solutions = [
    {
      icon: Camera,
      title: "IP Surveillance Systems CCTV",
      description: "IP Network Surveillance System or IP Network CCTV is an advanced surveillance and security system that uses network technology to transmit video and images from cameras to display and storage devices. This system is characterized by its ability to continuously monitor and control places and areas, which contributes to increasing security and protection.",
      image: ipSurveillance,
      features: [
        "High-definition video recording",
        "Remote viewing over Internet",
        "Network camera connectivity",
        "Real-time monitoring & control",
        "Event documentation system",
        "24/7 surveillance capability"
      ]
    },
    {
      icon: Lock,
      title: "Online Lock System",
      description: "Online Lock System is a kind of smart lock system that enables remote control and management of locks via the Internet. This technology is used in doors, interior doors, safes and other places where a secure access and lock system is required.",
      image: electronicLock,
      features: [
        "Remote lock control via Internet",
        "Smartphone app integration",
        "User access management",
        "Access logs & tracking",
        "Flexible permission settings",
        "Electronic security components"
      ]
    },
    {
      icon: Tv,
      title: "IPTV",
      description: "IPTV is an acronym for Internet Protocol Television. It is a technology that allows the delivery of TV channels and TV content via the Internet Protocol (IP), i.e. over the World Wide Web. Instead of using traditional broadcasting technologies such as cable or satellite, TV content is transmitted over the Internet.",
      image: iptv,
      features: [
        "Live TV channels streaming",
        "Video on Demand (VOD)",
        "Multi-device compatibility",
        "High-speed Internet delivery",
        "Sports & entertainment content",
        "Flexible viewing experience"
      ]
    },
    {
      icon: Volume2,
      title: "PA Audio System",
      description: "A Public Audio System (PA Audio System) is a system used to transmit audio and advertisements to a large audience in a specified area. This type of system is used in public places such as airports, stations, malls, schools, theaters, stadiums and other public facilities.",
      image: paAudio,
      features: [
        "Large area audio coverage",
        "Public announcements capability",
        "Remote system control",
        "Multi-zone audio management",
        "Emergency alert integration",
        "Clear sound transmission"
      ]
    },
    {
      icon: Phone,
      title: "Voice Over IP",
      description: "Voice over Internet Protocol (VoIP) is a technology that allows the transmission of voice and voice calls over the Internet. Instead of using traditional landline or mobile telephone networks, voices are converted into digital data that is sent over the Internet in the form of data packets.",
      image: voip,
      features: [
        "Internet-based voice calls",
        "Digital data transmission",
        "Video calling capability",
        "Global communication access",
        "Cost-effective solutions",
        "Unified communications platform"
      ]
    },
    {
      icon: Radio,
      title: "GRMS",
      description: "A General Radio Management System (GRMS) is a control system used to manage wireless communication networks within large buildings and facilities. GRMS allows users to easily communicate and coordinate within the building using cordless phones that are distributed in the various locations.",
      image: paAudio,
      features: [
        "Wireless communication networks",
        "Building-wide coverage",
        "Cordless phone integration",
        "Instant communication capability",
        "Work team coordination",
        "Mobile communication solution"
      ]
    },
    {
      icon: Building2,
      title: "BMS",
      description: "A Building Management System (BMS) is an integrated system used for the overall control and management of many systems and equipment within buildings. This system aims to improve the efficiency of use, comfort and safety within the building through central control of various equipment and systems.",
      image: bms,
      features: [
        "Integrated building control",
        "HVAC system management",
        "Lighting control systems",
        "Security system integration",
        "Energy efficiency optimization",
        "Central monitoring platform"
      ]
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center fade-in-up ${isVisible ? 'animate' : ''}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Solutions</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Advanced technology solutions designed to enhance security, communication, and automation for modern businesses and facilities
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Detail Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={solution.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className={`${!isEven ? 'lg:order-2' : ''} fade-in-up ${isVisible ? 'animate' : ''}`}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-4xl font-bold text-navy">{solution.title}</h2>
                    </div>

                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {solution.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {solution.features.map((feature, idx) => (
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

                  {/* Solution Image */}
                  <div className={`${!isEven ? 'lg:order-1' : ''} fade-in-up ${isVisible ? 'animate' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                      <img 
                        src={solution.image} 
                        alt={solution.title}
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex items-end">
                        <div className="p-6 text-white">
                          <Icon className="w-8 h-8 mb-2" />
                          <h3 className="text-lg font-semibold">{solution.title}</h3>
                          <p className="text-sm opacity-90">Advanced Technology Solution</p>
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
            <h2 className="text-4xl font-bold text-navy mb-6">Why Choose Our Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our technology solutions provide comprehensive benefits for your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Enhanced Security", description: "Advanced surveillance and access control systems" },
              { title: "Remote Management", description: "Control and monitor systems from anywhere" },
              { title: "Cost Efficiency", description: "Reduce operational costs through automation" },
              { title: "24/7 Support", description: "Round-the-clock technical assistance and maintenance" }
            ].map((item, index) => (
              <div 
                key={item.title}
                className={`text-center fade-in-up ${isVisible ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
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
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl opacity-90 mb-8">
              Contact our expert team today to discuss which solutions are right for your specific requirements.
            </p>
            <div className="space-x-4">
              <button className="btn-primary">
                Request Consultation
              </button>
              <button className="btn-outline">
                View Our Products
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Solutions;