import { useEffect, useState } from "react";
import aboutTeam from "@/assets/about-team.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center fade-in-up ${isVisible ? 'animate' : ''}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Eelectron</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Your trusted partner in Information and Communication Technology solutions since 2006
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`fade-in-up ${isVisible ? 'animate' : ''}`}>
              <img
                src={aboutTeam}
                alt="Eelectron team of professionals"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            
            <div className={`fade-in-up ${isVisible ? 'animate' : ''}`}>
              <h2 className="text-4xl font-bold text-navy mb-6">Our Journey</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-navy">Eelectron</strong> is an Information and Communication Technology Company 
                  founded in Australia in 2006 with expertise in system integration. Established by experienced 
                  professionals, we specialize in IP Network Design and System Integration.
                </p>
                
                <p>
                  Our highly qualified engineering and technical team develops state-of-the-art technologies 
                  and tools to ensure success for ourselves and our clients worldwide. With over 17 years 
                  of experience, we have built a reputation for excellence and innovation.
                </p>

                <p>
                  We pride ourselves on staying at the forefront of technological advancement, continuously 
                  updating our expertise to provide cutting-edge solutions that meet the evolving needs 
                  of modern businesses and smart buildings.
                </p>
              </div>

              <div className="mt-8 space-x-4">
                <button className="btn-primary">
                  Our Services
                </button>
                <button className="btn-outline">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className={`fade-in-up ${isVisible ? 'animate' : ''}`}>
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white text-2xl font-bold">M</span>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver innovative ICT solutions that transform businesses and enhance 
                  people's lives through smart technology integration. We strive to be the 
                  leading partner for organizations seeking reliable, efficient, and 
                  future-ready automation systems.
                </p>
              </div>
            </div>

            <div className={`fade-in-up ${isVisible ? 'animate' : ''}`}>
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white text-2xl font-bold">V</span>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the world's most trusted provider of intelligent building solutions 
                  and network infrastructure, creating connected environments that are 
                  sustainable, efficient, and enhance the quality of life for users worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
            <h2 className="text-4xl font-bold text-navy mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and define our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Innovation", description: "Constantly pushing boundaries with cutting-edge solutions" },
              { title: "Quality", description: "Uncompromising standards in every project we deliver" },
              { title: "Reliability", description: "Dependable systems and unwavering client support" },
              { title: "Partnership", description: "Building lasting relationships through collaboration" }
            ].map((value, index) => (
              <div 
                key={value.title}
                className={`text-center fade-in-up ${isVisible ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">
                    {value.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;