import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Code2, Smartphone, Globe, Brain, Sparkles, Layout } from "lucide-react";

/** Reusable gradient-fade divider — invisible at edges, hair-thin at centre */
function SectionDivider({ dot = false }: { dot?: boolean }) {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className={`section-divider${dot ? " section-divider--dot" : ""}`} />
    </div>
  );
}

export default function Home() {
  const services = [
    { icon: Code2, title: "Custom Software", description: "Tailored solutions built to your exact specifications", href: "/services" },
    { icon: Smartphone, title: "Mobile Apps", description: "Native and cross-platform mobile experiences", href: "/services" },
    { icon: Globe, title: "Web Development", description: "Modern, responsive web applications.", href: "/services" },
    { icon: Layout, title: "UI/UX Design", description: "User-centered design that creates stunning digital experiences.", href: "/services" }
  ];

  const reasons = [
    { number: "01", title: "Proven Process", description: "A streamlined methodology that guarantees results." },
    { number: "02", title: "Expert Team", description: "Highly skilled professionals dedicated to your success." },
    { number: "03", title: "Modern Tech", description: "Using the latest tools to build future-proof solutions." },
    { number: "04", title: "Dedicated Support", description: "We stand by our work long after the project is deployed." },
  ];

  return (
    <div className="pt-20">

      {/* ─── HERO ─── white bg */}
      <section className="section-white relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -left-10 w-[40rem] h-[40rem] bg-[#E0E7FF]/50 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-10 right-10 w-[35rem] h-[35rem] bg-[#CCFBF1]/40 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-[#DBEAFE]/40 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent leading-tight">
              Transforming Ideas<br />Into Scalable Digital<br />Solutions
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Custom software development and IT solutions that drive innovation and empower businesses to achieve their full potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group px-8 py-4 rounded-xl bg-gradient-to-br from-[#EFF6FF] to-[#F8FAFC] border border-[#BFDBFE]/60 text-[#2563EB] hover:from-[#DBEAFE] hover:to-[#E0E7FF] hover:-translate-y-1 transition-all duration-300 shadow-premium hover:shadow-premium-hover flex items-center justify-center gap-2 font-medium"
              >
                Start a Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 rounded-xl border border-border/60 hover:border-[#A78BFA]/50 hover:bg-[#F5F3FF]/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 font-medium text-foreground/80 hover:text-[#7C3AED] shadow-sm hover:shadow-premium-hover"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* divider: Hero → Services */}
      <SectionDivider />

      {/* ─── SERVICES ─── soft bg */}
      <section className="section-soft py-28 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 right-20 w-[30rem] h-[30rem] bg-gradient-to-br from-[#EFF6FF]/60 to-[#F5F3FF]/60 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-widest text-[#2563EB] font-medium mb-3">What We Do</p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-border/40 hover:border-[#A78BFA]/40 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-premium-hover flex flex-col relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#F5F3FF]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-[#EFF6FF] to-[#E0E7FF] flex items-center justify-center mb-6 group-hover:from-[#DBEAFE] group-hover:to-[#C7D2FE] group-hover:scale-110 group-hover:shadow-glow transition-all duration-500">
                  <service.icon size={28} className="text-[#2563EB] group-hover:text-[#4F46E5] transition-colors" />
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-3 relative z-10">{service.title}</h3>
                <p className="text-sm text-muted-foreground flex-1 relative z-10">{service.description}</p>
                <Link
                  to={service.href}
                  className="relative z-10 inline-flex items-center gap-1 text-sm text-[#2563EB] mt-5 opacity-0 group-hover:opacity-100 transition-all duration-500 font-medium translate-y-2 group-hover:translate-y-0"
                >
                  Learn More <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-[#2563EB] transition-colors duration-300 group"
            >
              Explore all services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* divider: Services → Process */}
      <SectionDivider dot />

      {/* ─── WHY CHOOSE US ─── blue tint bg */}
      <section className="section-blue-tint py-28 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-[40rem] h-[40rem] bg-white/60 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-widest text-[#2563EB] font-medium mb-3">Our Advantage</p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering excellence through experience and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group hover:-translate-y-2 transition-transform duration-500 p-6 rounded-2xl hover:bg-white/40 hover:shadow-premium-hover border border-transparent hover:border-[#BFDBFE]/30"
              >
                <div className="text-6xl font-['Playfair_Display'] font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#BFDBFE] to-[#A78BFA] mb-4 group-hover:from-[#93C5FD] group-hover:to-[#8B5CF6] transition-all duration-500">{reason.number}</div>
                <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-3 group-hover:text-[#4F46E5] transition-colors duration-500">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
                {index < reasons.length - 1 && (
                  <div className="hidden md:block absolute top-14 -right-4 w-8 h-px bg-border/50 group-hover:bg-[#A78BFA]/50 transition-colors duration-500" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
