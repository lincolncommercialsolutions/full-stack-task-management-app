export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 pb-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-6 max-w-5xl">
        <div className="mb-6 inline-block">
          <span className="bg-blue-500/20 backdrop-blur-sm text-blue-300 text-sm font-semibold px-4 py-2 rounded-full border border-blue-400/30">
            🚀 LinkedLabs
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-tight">
          <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
            Built to Scale
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            For Global Industries
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Custom software and innovative solutions transforming businesses worldwide.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#cta"
            className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-10 py-5 rounded-lg text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-blue-500/50 hover:scale-105"
          >
            <span className="relative z-10">Get a Free Quote</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
          </a>
          <a
            href="#cta"
            className="group relative border-2 border-blue-400/50 hover:border-blue-400 bg-blue-500/10 backdrop-blur-sm hover:bg-blue-500/20 text-white px-10 py-5 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Book a Consultation
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
        
        {/* Stats bar */}
        <div className="mt-24 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              Global
            </div>
            <div className="text-sm text-gray-400">Reach</div>
          </div>
          <div className="text-center border-x border-blue-500/30">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              10+
            </div>
            <div className="text-sm text-gray-400">Industries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-sm text-gray-400">Support</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}