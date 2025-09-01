import { useEffect, useState } from "react";
import { Monitor, Camera, Lock, Headphones, Lightbulb, Phone, ShoppingCart, Eye } from "lucide-react";
import productsShowcase from "@/assets/products-showcase.jpg";
import interactiveScreen from "@/assets/product-interactive-screen.jpg";
import survCamera from "@/assets/product-camera.jpg";
import electronicLock from "@/assets/product-electronic-lock.jpg";
import headphones from "@/assets/product-headphones.jpg";
import smartDevices from "@/assets/product-smart-devices.jpg";
import digitalPhones from "@/assets/product-digital-phones.jpg";
const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const products = [{
    icon: Monitor,
    title: "Interactive Screens",
    description: "High-resolution interactive displays for presentations, digital signage, and collaborative work environments. Perfect for offices, educational institutions, and public spaces.",
    image: interactiveScreen,
    price: "Starting from $2,999",
    features: ["4K Ultra HD Display", "Multi-touch Technology", "Smart OS Integration", "Wireless Connectivity"]
  }, {
    icon: Camera,
    title: "Surveillance Cameras",
    description: "Professional-grade security cameras with advanced features including night vision, motion detection, and cloud storage integration for comprehensive surveillance solutions.",
    image: survCamera,
    price: "Starting from $299",
    features: ["HD/4K Recording", "Night Vision", "Motion Detection", "Cloud Storage"]
  }, {
    icon: Lock,
    title: "Electronic Lock",
    description: "Smart electronic locks with keypad, RFID, and smartphone app control. Ideal for offices, hotels, and residential buildings requiring secure access management.",
    image: electronicLock,
    price: "Starting from $199",
    features: ["Keypad Access", "RFID Support", "App Control", "Access Logs"]
  }, {
    icon: Headphones,
    title: "Headphones",
    description: "Professional audio headphones for communication systems, security operations, and multimedia applications with superior sound quality and comfort.",
    image: headphones,
    price: "Starting from $89",
    features: ["Noise Cancellation", "Comfort Design", "High Fidelity", "Durable Build"]
  }, {
    icon: Lightbulb,
    title: "Smart Attics and Swivels",
    description: "Intelligent lighting and mechanical control systems for automated building management, including smart switches, dimmers, and motorized equipment.",
    image: smartDevices,
    price: "Starting from $149",
    features: ["Smart Controls", "Automation Ready", "Energy Efficient", "Remote Management"]
  }, {
    icon: Phone,
    title: "Digital Phones",
    description: "Modern digital phone systems with VoIP capability, conference calling, and integration with building management systems for comprehensive communication solutions.",
    image: digitalPhones,
    price: "Starting from $129",
    features: ["VoIP Technology", "Conference Calling", "System Integration", "HD Voice Quality"]
  }];
  const categories = [{
    name: "Security Systems",
    count: 2,
    icon: Camera
  }, {
    name: "Communication",
    count: 2,
    icon: Phone
  }, {
    name: "Display Technology",
    count: 1,
    icon: Monitor
  }, {
    name: "Smart Controls",
    count: 1,
    icon: Lightbulb
  }];
  return <main className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={productsShowcase} alt="Products Showcase" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-navy/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center fade-in-up ${isVisible ? 'animate' : ''}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Cutting-edge technology products designed to meet your business needs with reliability, performance, and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 fade-in-up ${isVisible ? 'animate' : ''}`}>
            <h2 className="text-3xl font-bold text-navy mb-4">Product Categories</h2>
            <p className="text-lg text-muted-foreground">Browse our comprehensive range of technology products</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {categories.map((category, index) => {
            const Icon = category.icon;
            return <div key={category.name} className={`bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 fade-in-up ${isVisible ? 'animate' : ''}`} style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} Products</p>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
            <h2 className="text-4xl font-bold text-navy mb-6">Featured Products</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our premium selection of technology products designed for professional use
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {products.map((product, index) => {
            const Icon = product.icon;
            return <div key={product.title} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 fade-in-up ${isVisible ? 'animate' : ''}`} style={{
              animationDelay: `${index * 200}ms`
            }}>
                  <div className="relative h-64">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-navy">{product.title}</h3>
                      
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>)}
                    </div>

                    
                  </div>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
            <h2 className="text-4xl font-bold text-navy mb-6">Why Choose Our Products</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our products are designed with quality, reliability, and performance in mind
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            title: "Premium Quality",
            description: "All products undergo rigorous testing to ensure the highest quality standards",
            icon: "🏆"
          }, {
            title: "Professional Support",
            description: "Expert technical support and installation services available",
            icon: "🛠️"
          }, {
            title: "Warranty Coverage",
            description: "Comprehensive warranty coverage for peace of mind",
            icon: "🔒"
          }].map((item, index) => <div key={item.title} className={`text-center bg-white rounded-2xl p-8 shadow-lg fade-in-up ${isVisible ? 'animate' : ''}`} style={{
            animationDelay: `${index * 200}ms`
          }}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`fade-in-up ${isVisible ? 'animate' : ''}`}>
            <h2 className="text-4xl font-bold mb-6">Ready to Order?</h2>
            <p className="text-xl opacity-90 mb-8">
              Contact our sales team to discuss your requirements and get customized quotes for our products.
            </p>
            <div className="space-x-4">
              <button className="btn-primary">
                Request Catalog
              </button>
              <button className="btn-outline">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>;
};
export default Products;