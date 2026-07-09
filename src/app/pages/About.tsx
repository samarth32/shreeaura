import { motion } from "motion/react";
import { Link } from "react-router";
import { Target, Eye, Shield, Zap, Heart, Award, ArrowRight, Lightbulb, Rocket, TrendingUp, Infinity } from "lucide-react";

function SectionDivider({ dot = false }: { dot?: boolean }) {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className={`section-divider${dot ? " section-divider--dot" : ""}`} />
    </div>
  );
}

export default function About() {
  const values = [
    { icon: Shield, title: "Integrity", description: "We maintain the highest standards of honesty and transparency in all our dealings" },
    { icon: Zap, title: "Innovation", description: "We embrace cutting-edge technologies to deliver forward-thinking solutions" },
    { icon: Heart, title: "Client-Centric", description: "Your success is our success. We prioritize your needs and goals above all else" },
    { icon: Award, title: "Excellence", description: "We deliver nothing less than exceptional quality in every project we take on" },
  ];

  const team = [
    {
      name: "Samarth Patel",
      role: "Founder & Director",
      tagline: "Vision, Leadership & Strategy",
      description: "Passionate about technology and driven by the belief that great software can change how businesses operate. Leads the company's direction, client relationships, and product strategy.",
      gradient: "from-[#2563EB]/10 to-[#2563EB]/5",
      image: "/samarth.jpeg"
    },
    {
      name: "Shreena Patel",
      role: "Co-Founder & Director",
      tagline: "Technology & Development",
      description: "A dedicated technologist with a deep love for clean code and scalable architecture. Oversees all technical development, infrastructure decisions, and engineering excellence.",
      gradient: "from-[#2563EB]/5 to-[#2563EB]/10",
      image: "/shreena.jpeg?v=1"
    },
  ];

  const stats = [
    { value: "Founder-Led", label: "Innovation" },
    { value: "Passionate", label: "About Technology" },
    { value: "Custom-Built", label: "Solutions" },
    { value: "Future-Focused", label: "Development" },
  ];

  const timeline = [
    {
      icon: Lightbulb,
      phase: "The Beginning",
      title: "Idea & Vision",
      description: "A brother and sister, deeply passionate about technology and computer science, began dreaming of building something meaningful — a company that helps businesses grow through the power of modern software.",
    },
    {
      icon: Rocket,
      phase: "Taking the Leap",
      title: "Company Formation",
      description: "ShreeAura Trade and Solutions LLP was officially established. The journey from a shared dream to a registered company began — driven by ambition, dedication, and a genuine belief in technology's potential.",
    },
    {
      icon: Award,
      phase: "Getting to Work",
      title: "Building Our First Solutions",
      description: "We rolled up our sleeves and started delivering. Every project was an opportunity to prove our commitment — building custom software, websites, and IT solutions with care, precision, and purpose.",
    },
    {
      icon: TrendingUp,
      phase: "Growing Together",
      title: "Expanding Our Services",
      description: "With each project completed and each client relationship built, we expanded our capabilities — adding mobile app development, cloud solutions, and AI-powered tools to our growing service portfolio.",
    },
    {
      icon: Infinity,
      phase: "Looking Ahead",
      title: "Future Growth & Innovation",
      description: "We continue to grow — not just as a company, but as learners, builders, and partners. Our journey has only just begun, and we're excited about the problems we'll solve and the businesses we'll help transform.",
    },
  ];

  const industries = [
    "Healthcare", "Finance & Banking", "E-commerce", "Education",
    "Manufacturing", "Logistics", "Real Estate", "Retail"
  ];

  return (
    <main className="pt-20">

      {/* ─── HERO / STATS ─── white bg */}
      <section className="section-white relative py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -right-20 w-[40rem] h-[40rem] bg-[#E0E7FF]/50 rounded-full blur-3xl"
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

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold mb-6">About ShreeAura</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a newly established, founder-driven technology company — built from passion, purpose, and a genuine desire to help businesses grow through modern software solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-[#EFF6FF]/60 border border-[#DBEAFE]/50 shadow-sm hover:bg-white hover:border-[#A78BFA]/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-premium-hover relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF]/0 to-[#F5F3FF]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-xl md:text-2xl font-['Playfair_Display'] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#4F46E5] mb-2 relative z-10">{stat.value}</div>
                <div className="text-sm text-muted-foreground relative z-10">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CORE VALUES ─── blue tint bg */}
      <section className="section-blue-tint py-28 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-white/60 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-widest text-[#2563EB] font-medium mb-3">Principles</p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-border/40 hover:border-[#A78BFA]/40 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-premium-hover relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#F5F3FF]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-[#EFF6FF] to-[#E0E7FF] flex items-center justify-center mb-6 group-hover:from-[#DBEAFE] group-hover:to-[#C7D2FE] group-hover:scale-110 group-hover:shadow-glow transition-all duration-500">
                  <value.icon size={28} className="text-[#2563EB] group-hover:text-[#4F46E5] transition-colors duration-500" />
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* divider: Core Values → Founders */}
      <SectionDivider dot />

      {/* ─── FOUNDERS ─── white bg */}
      <section className="section-white py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-widest text-[#2563EB] font-medium mb-3">The People Behind It</p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-4">Meet the Founders</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group p-10 rounded-2xl bg-gradient-to-br ${member.gradient} border border-border/40 hover:border-[#A78BFA]/40 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-premium-hover relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#F5F3FF]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="w-56 h-72 mx-auto rounded-2xl flex items-center justify-center mb-8 group-hover:-translate-y-2 group-hover:shadow-glow transition-all duration-500 overflow-hidden shadow-xl border-4 border-white/60 relative z-10">
                  <img src={member.image} alt={`${member.name} - ${member.role} at ShreeAura`} className="w-full h-full object-cover object-top" loading="lazy" />
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-1">{member.name}</h3>
                <div className="text-xs uppercase tracking-widest text-[#2563EB] font-medium mb-1">{member.tagline}</div>
                <div className="font-semibold text-foreground/70 mb-4">{member.role}</div>
                <p className="text-muted-foreground leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* divider: Founders → Industries */}
      <SectionDivider />

      {/* divider: Industries → Journey */}
      <SectionDivider dot />
    </main>
  );
}
