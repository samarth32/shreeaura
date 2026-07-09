import { Link } from "react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F8F9FB] border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="ShreeAura"
                className="w-10 h-10 object-contain"
              />
              <div className="font-['Playfair_Display'] font-semibold text-lg">ShreeAura</div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Transforming ideas into scalable digital solutions with innovation and excellence.
            </p>
            <div className="flex gap-3">
              <a href="http://linkedin.com/company/122024230/admin/dashboard/" className="w-10 h-10 rounded-xl bg-white border border-border/40 hover:border-[#A78BFA]/40 hover:bg-[#F5F3FF] shadow-sm hover:shadow-premium-hover flex items-center justify-center text-muted-foreground hover:text-[#4F46E5] hover:-translate-y-1 transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-['Playfair_Display'] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-[#2563EB] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-[#2563EB] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-[#2563EB] transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-[#2563EB] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-['Playfair_Display'] font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Custom Software Development</li>
              <li className="text-sm text-muted-foreground">Web Development</li>
              <li className="text-sm text-muted-foreground">Mobile App Development</li>
              <li className="text-sm text-muted-foreground">UI/UX Design</li>
            </ul>
          </div>

          <div>
            <h3 className="font-['Playfair_Display'] font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="mt-0.5 text-[#2563EB]" />
                <span>info@shreeaura.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="mt-0.5 text-[#2563EB]" />
                <span>+91 9925086981</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 text-[#2563EB]" />
                <span>Science City, Ahmedabad, Gujarat, India</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-4 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 ShreeAura Trade and Solutions LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
