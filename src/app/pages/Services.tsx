import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Code2, Smartphone, Globe, Brain, Cloud, Database,
  Shield, Cog, Layout, GitBranch, ArrowRight, ArrowUpRight, CheckCircle2
} from "lucide-react";

function SectionDivider({ dot = false }: { dot?: boolean }) {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className={`section-divider${dot ? " section-divider--dot" : ""}`} />
    </div>
  );
}

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your unique business requirements and scale with your growth.",
      features: ["Requirement Analysis", "Agile Development", "Quality Assurance", "Deployment & Support"]
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies for optimal performance.",
      features: ["React/Next.js Apps", "Progressive Web Apps", "E-commerce Solutions", "CMS Development"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android Apps", "React Native", "Flutter Development", "App Store Deployment"]
    },
    {
      icon: GitBranch,
      title: "API Integrations",
      description: "Seamless integration of third-party services and custom API development for connected systems.",
      features: ["REST/GraphQL APIs", "Third-party Integration", "Microservices", "API Security"]
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive, engaging, and visually stunning digital experiences.",
      features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing"]
    },
    {
      icon: Cog,
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support to keep your systems running smoothly.",
      features: ["24/7 Support", "Performance Monitoring", "Bug Fixes & Updates", "Feature Enhancements"]
    }
  ];

  const process = [
    { step: "01", title: "Consultation", description: "We understand your needs and goals" },
    { step: "02", title: "Planning", description: "We create a detailed roadmap" },
    { step: "03", title: "Development", description: "We build your solution" },
    { step: "04", title: "Delivery", description: "We launch and support" }
  ];

  return (
    <main className="pt-20">

      {/* ─── HERO ─── white bg */}
      <section className="section-white relative py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-10 w-[40rem] h-[40rem] bg-[#E0E7FF]/50 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-10 -left-10 w-[35rem] h-[35rem] bg-[#CCFBF1]/40 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-[#DBEAFE]/40 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-widest text-[#2563EB] font-medium mb-4">What We Offer</p>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to transform your business and drive digital innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* divider: Hero → Services Grid */}
      <SectionDivider />

      {/* ─── SERVICES GRID ─── soft bg */}
      <section className="section-soft py-28 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[40rem] h-[40rem] bg-gradient-to-br from-[#EFF6FF]/60 to-[#F5F3FF]/60 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-border/40 hover:border-[#A78BFA]/40 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-premium-hover flex flex-col relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#F5F3FF]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start gap-6 flex-1 relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#EFF6FF] to-[#E0E7FF] flex items-center justify-center group-hover:from-[#DBEAFE] group-hover:to-[#C7D2FE] group-hover:scale-110 group-hover:shadow-glow transition-all duration-500 flex-shrink-0">
                    <service.icon size={32} className="text-[#2563EB] group-hover:text-[#4F46E5] transition-colors duration-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['Playfair_Display'] text-2xl font-semibold mb-3 group-hover:text-[#4F46E5] transition-colors duration-500">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 size={16} className="text-[#8B5CF6] flex-shrink-0 group-hover:scale-110 transition-transform duration-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
