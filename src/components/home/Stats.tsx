
const Stats = () => {
  return (
    <section className="bg-school-navy py-16 md:py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 0L20 0L20 20L0 20Z" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Achievements</h2>
          <p className="text-gray-300">We take pride in our accomplishments and continuous journey towards excellence in education.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          <div className="text-center p-6">
            <div className="text-4xl md:text-5xl font-bold text-school-gold mb-2">100+</div>
            <p className="text-white">Years of Excellence</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl md:text-5xl font-bold text-school-gold mb-2">95%+</div>
            <p className="text-white">Board Exam Results</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl md:text-5xl font-bold text-school-gold mb-2">50+</div>
            <p className="text-white">State Rank Holders</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl md:text-5xl font-bold text-school-gold mb-2">75+</div>
            <p className="text-white">Sports Championships</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
