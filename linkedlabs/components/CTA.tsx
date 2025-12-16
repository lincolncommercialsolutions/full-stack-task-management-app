export default function CTA() {
  return (
    <section id="cta" className="py-32 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6 inline-block">
          <span className="bg-white/10 backdrop-blur-sm text-cyan-300 text-sm font-semibold px-4 py-2 rounded-full border border-cyan-400/30">
            💡 Let's Build Something Amazing
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Solve Your Unique Challenge?
        </h2>
        <p className="text-xl mb-10 text-blue-100">
          Get a <span className="font-bold text-cyan-300">free quote</span> today or book a <span className="font-bold text-cyan-300">paid consultation</span> with our expert team. No commitment required.
        </p>
        
        <form className="max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 transition-all font-medium"
              required
            />
            <button 
              type="submit" 
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-lg font-bold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-cyan-500/50"
            >
              Get Started
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </form>
        
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-blue-200 mb-6 text-lg">Prefer to talk? We're here for you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:info@linkedlabs.com" 
              className="flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              info@linkedlabs.com
            </a>
            <span className="text-blue-400 hidden sm:block">•</span>
            <a 
              href="tel:+1234567890" 
              className="flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              (123) 456-7890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}