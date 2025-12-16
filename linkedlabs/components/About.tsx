export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background gradient accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About LinkedLabs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              At <span className="text-blue-400 font-semibold">LinkedLabs</span>, we architect solutions that transform how businesses operate. We specialize in tackling complex challenges with custom software that's built specifically for your needs.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our team brings decades of experience across diverse industries. From startups to enterprises, we partner with forward-thinking organizations ready to embrace technology as a competitive advantage.
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
                <div className="text-sm text-gray-400">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-sm text-gray-400">Support Available</div>
              </div>
            </div>
          </div>
          
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 flex items-center justify-center">
            <div className="text-white text-center relative z-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <svg className="w-32 h-32 mx-auto mb-6 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
                <p className="text-2xl font-bold mb-2">Elite Development Team</p>
                <p className="text-sm text-white/80">Building Tomorrow's Solutions Today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}