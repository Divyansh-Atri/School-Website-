
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1487252665478-49b61b47f302?q=80&w=1200" 
}) => {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-school-navy/95 to-school-navy/85 mix-blend-multiply" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="bg-school-navy/40 backdrop-blur-sm p-8 rounded-lg inline-block max-w-4xl shadow-2xl border border-white/10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">{title}</h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-light leading-relaxed animate-fade-in drop-shadow-md" 
               style={{ animationDelay: "0.2s" }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
