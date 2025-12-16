export default function Features() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-gray-950 to-gray-900 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Why Choose LinkedLabs
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We combine technical excellence with business insight to deliver solutions that exceed expectations.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="group flex flex-col items-center text-center relative">
            <div className="relative mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl group-hover:shadow-blue-500/50">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors">
              Tailored Solutions
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Built specifically for your unique challenges. Every solution is crafted with your business goals at the forefront.
            </p>
          </div>
          
          <div className="group flex flex-col items-center text-center relative">
            <div className="relative mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-green-600 to-emerald-800 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl group-hover:shadow-green-500/50">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="absolute inset-0 bg-green-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-green-400 transition-colors">
              Rapid Development
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Agile methodology meets cutting-edge technology. We deliver production-ready solutions faster without sacrificing quality or scalability.
            </p>
          </div>
          
          <div className="group flex flex-col items-center text-center relative">
            <div className="relative mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-800 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl group-hover:shadow-purple-500/50">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-purple-400 transition-colors">
              Transparent Pricing
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Free initial quotes and affordable expert consultations. Clear, honest pricing with no surprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}