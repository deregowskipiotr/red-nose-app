import { motion } from "framer-motion";
import { Instagram, Facebook, Send, Twitter } from "lucide-react";
import { AthirstButton } from "./ui/AthirstButton";

export function Contact() {
  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* TOP: Title and Subtitle animated top-to-bottom */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-text-primary tracking-wide">
              Contatto
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-text-secondary mt-6 max-w-2xl mx-auto text-lg italic leading-relaxed">
              Have a legal complaint? A ritual suggestion? Or simply want to tell us how much you regret your last purchase? We are almost listening.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
            className="w-24 h-px bg-red-accent/50 mx-auto mt-8 origin-center"
          />
        </div>

        {/* MIDDLE: Form and Quote */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch mb-20">
          
          {/* LEFT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="bg-black/20 backdrop-blur-md border border-text-primary/10 p-8 md:p-10 rounded-md shadow-2xl"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary/60 mb-2 tracking-wider uppercase">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-bg-secondary/50 border border-text-primary/10 rounded-sm px-4 py-3 text-text-primary focus:outline-none focus:border-red-accent/50 transition-colors duration-500 font-serif"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary/60 mb-2 tracking-wider uppercase">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-bg-secondary/50 border border-text-primary/10 rounded-sm px-4 py-3 text-text-primary focus:outline-none focus:border-red-accent/50 transition-colors duration-500 font-serif"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary/60 mb-2 tracking-wider uppercase">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-bg-secondary/50 border border-text-primary/10 rounded-sm px-4 py-3 text-text-primary focus:outline-none focus:border-red-accent/50 transition-colors duration-500 font-serif resize-none"
                  placeholder="Tell us everything..."
                />
              </div>
              
              <AthirstButton className="flex items-center justify-center gap-4 w-full h-12">
                Send Message
                <Send className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </AthirstButton>
            </form>
          </motion.div>

          {/* RIGHT: Quote */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col justify-center text-center lg:text-right"
          >
            <div className="relative px-6">
              <span className="absolute -top-10 -left-4 lg:-left-10 text-9xl text-red-accent/10 font-serif pointer-events-none">"</span>
              <p className="text-3xl md:text-4xl text-text-primary leading-tight italic">
                In vino veritas, in aqua sanitas. 
                But in our wine, you mostly find a strong desire to call your ex at 3 AM.
              </p>
              <div className="mt-8 flex justify-center lg:justify-end">
                <div className="h-px w-20 bg-red-accent/40" />
              </div>
              <p className="mt-4 text-text-secondary tracking-widest uppercase text-sm font-medium">
                — Anonymous Benefactor
              </p>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM: Social Media Icons */}
        <div className="flex justify-center gap-10">
          {[
            { icon: Instagram, href: "#", label: "Instagram" },
            { icon: Facebook, href: "#", label: "Facebook" },
            { icon: Twitter, href: "#", label: "Twitter" }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 + (index * 0.1), ease: "easeOut" }}
              className="text-text-primary/40 hover:text-red-accent transition-colors duration-500 group relative p-3"
              aria-label={social.label}
            >
              <social.icon className="w-8 h-8" />
              <div className="absolute inset-0 bg-red-accent/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full -z-10" />
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
