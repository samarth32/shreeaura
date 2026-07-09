import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/80"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="ShreeAura"
              className="w-12 h-12 object-contain"
            />
            <div className="hidden sm:block">
              <div className="font-['Playfair_Display'] font-semibold text-lg text-foreground">ShreeAura</div>
              <div className="text-xs text-muted-foreground -mt-1">Trade & Solutions LLP</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Subtle text-link CTA — no heavy blue fill */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium text-[#2563EB] bg-gradient-to-r from-[#EFF6FF] to-[#F8FAFC] border border-[#BFDBFE]/60 hover:from-[#DBEAFE] hover:to-[#E0E7FF] hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-premium-hover"
            >
              Let's Talk
              <ArrowUpRight
                size={15}
                className="opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl"
        >
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${isActive(link.path)
                  ? "text-[#2563EB]"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile: subtle outlined CTA instead of filled blue */}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2563EB] py-2"
            >
              Let's Talk <ArrowUpRight size={14} />
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
