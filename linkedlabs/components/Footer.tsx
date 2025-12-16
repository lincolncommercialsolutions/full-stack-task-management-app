export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-gradient-to-b from-gray-950 to-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              LinkedLabs
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transforming complex challenges into elegant software solutions. Your trusted partner for custom development across all industries.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/#about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="/#industries" className="text-gray-400 hover:text-blue-400 transition-colors">Industries</a></li>
              <li><a href="#cta" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="/cookies" className="text-gray-400 hover:text-blue-400 transition-colors">Cookie Policy</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-blue-400 transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} LinkedLabs. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Crafted with <span className="text-red-500">♥</span> by the LinkedLabs Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}