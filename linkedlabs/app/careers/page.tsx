export default function Careers() {
  const openPositions = [
    {
      title: "Full Stack Developer",
      location: "Remote",
      type: "Full-time",
      description: "Join our team building custom software solutions for clients across multiple industries."
    },
    {
      title: "Senior Software Engineer",
      location: "Remote",
      type: "Full-time",
      description: "Lead development of complex, scalable applications for enterprise clients."
    },
    {
      title: "DevOps Engineer",
      location: "Remote",
      type: "Full-time",
      description: "Build and maintain infrastructure for mission-critical applications."
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      type: "Full-time / Contract",
      description: "Design beautiful, intuitive interfaces for web and mobile applications."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black">
      {/* Hero Section */}
      <section className="py-24 px-6 border-b border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Help us build innovative solutions that transform businesses worldwide. We're always looking for talented individuals who are passionate about technology and solving complex problems.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why LinkedLabs?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50">
              <div className="text-blue-400 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                  <path d="M3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Continuous Learning</h3>
              <p className="text-gray-400">Work on diverse projects across multiple industries and learn cutting-edge technologies.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50">
              <div className="text-green-400 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Flexible Schedule</h3>
              <p className="text-gray-400">Remote-first culture with flexible hours. Work from anywhere and maintain work-life balance.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50">
              <div className="text-purple-400 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Collaborative Team</h3>
              <p className="text-gray-400">Work with experienced professionals in a supportive, innovation-driven environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-white mb-2 md:mb-0">{position.title}</h3>
                  <div className="flex gap-4 text-sm">
                    <span className="text-blue-400">{position.location}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-green-400">{position.type}</span>
                  </div>
                </div>
                <p className="text-gray-400 mb-6">{position.description}</p>
                <a
                  href="#apply"
                  className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="apply" className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Submit Your Application</h2>
          <p className="text-gray-400 text-center mb-12">
            Don't see the perfect role? Send us your resume anyway. We're always looking for exceptional talent.
          </p>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2 font-medium">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Position</label>
              <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Full Stack Developer</option>
                <option>Senior Software Engineer</option>
                <option>DevOps Engineer</option>
                <option>UI/UX Designer</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Cover Letter</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about yourself and why you'd be a great fit..."
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Resume (PDF)</label>
              <input
                type="file"
                accept=".pdf"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-4 rounded-lg font-bold transition-all"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
