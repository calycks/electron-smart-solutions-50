import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="service-card bg-white rounded-xl p-6 shadow-lg border border-gray-100"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center w-16 h-16 bg-accent rounded-lg mb-4">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-navy mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
      <div className="mt-4">
        <button className="text-primary font-medium hover:text-primary-glow transition-colors duration-200">
          Learn More →
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;