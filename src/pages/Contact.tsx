import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import contactBusiness from "@/assets/contact-business.jpg";
import { toast } from "sonner";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Simulate form submission
    toast.success("Thank you! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center fade-in-up ${isVisible ? 'animate' : ''}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Let's build your smart solutions together. Get in touch with our expert team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className={`fade-in-up ${isVisible ? 'animate' : ''}`}>
              <div className="mb-12">
                <img
                  src={contactBusiness}
                  alt="Business contact and communication"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
              </div>

              <h2 className="text-3xl font-bold text-navy mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Email</h3>
                    <p className="text-muted-foreground">info@eelectron.com.au</p>
                    <p className="text-muted-foreground">support@eelectron.com.au</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Phone</h3>
                    <p className="text-muted-foreground">+61 (0)2 9999 0000</p>
                    <p className="text-muted-foreground">+61 (0)2 9999 0001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Level 12, Technology Tower<br />
                      100 George Street<br />
                      Sydney NSW 2000, Australia
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Emergency support only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`fade-in-up ${isVisible ? 'animate' : ''}`}>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-navy mb-8">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your project requirements..."
                      required
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="btn-primary w-full"
                    >
                      Send Message
                    </button>
                  </div>
                </form>

                <div className="mt-8 p-6 bg-accent rounded-lg">
                  <h3 className="font-semibold text-navy mb-2">Quick Response Guarantee</h3>
                  <p className="text-sm text-muted-foreground">
                    We typically respond to all inquiries within 2-4 business hours. 
                    For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 fade-in-up ${isVisible ? 'animate' : ''}`}>
            <h2 className="text-3xl font-bold text-navy mb-6">Visit Our Office</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Sydney's business district, we're easily accessible 
              by public transport and offer visitor parking.
            </p>
          </div>

          <div className={`bg-primary/10 rounded-2xl h-96 flex items-center justify-center fade-in-up ${isVisible ? 'animate' : ''}`}>
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-2">Interactive Map</h3>
              <p className="text-muted-foreground">
                Sydney CBD Location - Technology Tower<br />
                Easy access via train, bus, or car
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;