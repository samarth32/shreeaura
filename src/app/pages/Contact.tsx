import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send, Calendar } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import emailjs from "@emailjs/browser";

function SectionDivider({ dot = false }: { dot?: boolean }) {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className={`section-divider${dot ? " section-divider--dot" : ""}`} />
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    location: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const cleanedPhone = formData.phone.replace(/\D/g, "");

    if (cleanedPhone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      // STEP 1: Send inquiry to Web3Forms
      const web3Response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: "d931902b-f5e9-4fa9-9336-bf6ee39cb602",
            subject: "New Inquiry from ShreeAura Website",
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company || "N/A",
            location: formData.location,
            service: formData.service,
            message: formData.message,
          }),
        }
      );

      const web3Result = await web3Response.json();

      if (!web3Result.success) {
        alert("Failed to submit inquiry.");
        return;
      }

      console.log("Web3Forms Success");

      // STEP 2: Send auto reply via EmailJS
      try {
        const emailResponse = await emailjs.send(
          "service_bi13bug", // Replace with your actual Service ID
          "template_iwux8ck", // Replace with your actual Template ID
          {
            to_email: formData.email,

            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company || "N/A",
            location: formData.location,
            service: formData.service,
          },
          "TfnILLvjdeLSliWGF" // Replace with your actual Public Key
        );

        console.log("EmailJS Success:", emailResponse);
      } catch (emailError: any) {
        console.error("EmailJS Error:", emailError);
        console.log("Status:", emailError?.status);
        console.log("Message:", emailError?.text);

        alert(
          `Auto reply failed.\nStatus: ${emailError?.status}\n${emailError?.text}`
        );
      }

      alert("Thank you! Your inquiry has been submitted successfully.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        location: "",
        message: "",
      });
    } catch (error) {
      console.error("Submit Error:", error);
      alert("Something went wrong.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, title: "Email", value: "info@shreeaura.com" },
    { icon: Phone, title: "Phone", value: "+91 99250 86981" },
    { icon: MapPin, title: "Office", value: "Science City, Ahmedabad, Gujarat, India" },
    { icon: Clock, title: "Business Hours", value: "Mon – Sat: 9:00 AM – 6:00 PM", link: null }
  ];

  const services = [
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "Other"
  ];

  return (
    <div className="pt-20">

      {/* ─── HERO ─── white bg */}
      <section className="section-white relative py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-0 w-[40rem] h-[40rem] bg-[#E0E7FF]/50 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-10 left-0 w-[35rem] h-[35rem] bg-[#CCFBF1]/40 rounded-full blur-3xl"
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
            <p className="text-xs uppercase tracking-widest text-[#2563EB] font-medium mb-4">Reach Out</p>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business with innovative solutions? Let's start a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* divider: Hero → Contact Form */}
      <SectionDivider />

      {/* ─── CONTACT FORM + INFO ─── blue tint bg */}
      <section className="section-blue-tint py-20 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-[40rem] h-[40rem] bg-gradient-to-br from-[#EFF6FF]/60 to-[#F5F3FF]/60 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left: contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="font-['Playfair_Display'] text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  Reach out to us through any of the following channels. We're here to help!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="group flex items-start gap-4 p-5 rounded-xl bg-white/90 backdrop-blur-sm border border-border/40 hover:border-[#A78BFA]/40 transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-premium-hover relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#F5F3FF]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 w-11 h-11 rounded-lg bg-gradient-to-br from-[#EFF6FF] to-[#E0E7FF] flex items-center justify-center flex-shrink-0 group-hover:from-[#DBEAFE] group-hover:to-[#C7D2FE] group-hover:scale-110 group-hover:shadow-glow transition-all duration-500">
                      <info.icon size={22} className="text-[#2563EB] group-hover:text-[#4F46E5] transition-colors duration-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-0.5">{info.title}</div>
                      {info.link ? (
                        <a href={info.link} className="text-sm text-muted-foreground hover:text-[#2563EB] transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-sm text-muted-foreground">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-border/40 shadow-premium hover:shadow-premium-hover hover:border-[#A78BFA]/30 transition-all duration-500">
                <h2 className="font-['Playfair_Display'] text-2xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text" id="name" name="name"
                        value={formData.name} onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F9FB] border border-border/40 focus:border-[#93C5FD] focus:outline-none focus:ring-2 focus:ring-[#BFDBFE]/50 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                      <input
                        type="email" id="email" name="email"
                        value={formData.email} onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F9FB] border border-border/40 focus:border-[#93C5FD] focus:outline-none focus:ring-2 focus:ring-[#BFDBFE]/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Mobile Number *</label>
                      <input
                        type="tel" id="phone" name="phone"
                        value={formData.phone} onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F9FB] border border-border/40 focus:border-[#93C5FD] focus:outline-none focus:ring-2 focus:ring-[#BFDBFE]/50 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">Company Name</label>
                      <input
                        type="text" id="company" name="company"
                        value={formData.company} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F9FB] border border-border/40 focus:border-[#93C5FD] focus:outline-none focus:ring-2 focus:ring-[#BFDBFE]/50 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium mb-2">City Location *</label>
                      <input
                        type="text" id="location" name="location"
                        value={formData.location} onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F9FB] border border-border/40 focus:border-[#93C5FD] focus:outline-none focus:ring-2 focus:ring-[#BFDBFE]/50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">Service Interested In *</label>
                    <select
                      id="service" name="service"
                      value={formData.service} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F9FB] border border-border/40 focus:border-[#93C5FD] focus:outline-none focus:ring-2 focus:ring-[#BFDBFE]/50 transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Inquiry Details *</label>
                    <textarea
                      id="message" name="message"
                      value={formData.message} onChange={handleChange} required rows={6}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F9FB] border border-border/40 focus:border-[#93C5FD] focus:outline-none focus:ring-2 focus:ring-[#BFDBFE]/50 transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-br from-[#EFF6FF] to-[#F8FAFC] border border-[#BFDBFE]/60 text-[#2563EB] hover:from-[#DBEAFE] hover:to-[#E0E7FF] hover:-translate-y-1 transition-all duration-300 shadow-premium hover:shadow-premium-hover font-medium"
                  >
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    Send Inquiry
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* divider: Form → Map
      <SectionDivider dot />

      {/* ─── MAP ─── white bg 
      <section className="section-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-border/30 h-80 shadow-sm"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8942194867457!2d72.8776559!3d19.0759899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}
