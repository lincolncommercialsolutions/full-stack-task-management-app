export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive software development services tailored to your needs.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-2xl"></div>
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors">
                Custom Software Development
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Custom applications engineered from the ground up to solve your exact needs. Web, mobile, desktop, or cloud. We build it all.
            </p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span> Full stack development
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span> API and microservices
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span> Database architecture
              </li>
            </ul>
          </div>
          
          <div className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-2xl"></div>
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-purple-400 transition-colors">
                Expert Consultation
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Strategic guidance from seasoned developers and architects. Get expert insights to refine your ideas and optimize your tech stack.
            </p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="flex items-center gap-2">
                <span className="text-purple-400">✓</span> Technical architecture review
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">✓</span> Code audits
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">✓</span> Technology recommendations
              </li>
            </ul>
          </div>
          
          <div className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-t-2xl"></div>
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-green-400 transition-colors">
                Scalable Solutions
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Built to grow with your business. Our solutions are designed for performance, reliability, and seamless scaling as your needs evolve.
            </p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Cloud infrastructure
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Performance optimization
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Continuous integration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}