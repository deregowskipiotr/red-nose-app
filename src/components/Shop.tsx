import { motion } from "framer-motion";
import { AthirstButton } from "./ui/AthirstButton";

export function Shop() {
  return (
    <section id="shop" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* TOP: Title and Description animated top-to-bottom */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-text-primary tracking-wide">
              Il Santuario
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-text-secondary mt-6 max-w-4xl mx-auto text-lg italic leading-relaxed">
              Est. 2025 • Built from discarded pallets • Awarded 'Most Character' by the local hygiene inspector.<br/>
              Private tastings available • Bring your own glass • And your own water • And probably a doctor.
            </p>
           
          </motion.div>
          
          {/* Decorative Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
            className="w-24 h-px bg-red-accent/50 mx-auto mt-8 origin-center"
          />
        </div>

        {/* BOTTOM: Split layout with Left Text and Right Image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: Text animated left-to-right */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            <h3 className="text-2xl text-text-primary leading-6">
               Five Stars on Google* <br/>
               <span className="text-sm">*not really</span>
            </h3>
            <p className="text-text-primary/70 leading-relaxed text-lg">
              *Awarded "Best Place to Buy Wine When Everywhere Else Is Closed" by our mother • 
              Twice • Visit our tasting room • A plastic table and two mismatched chairs • 
              Where memories are made • And sometimes forgotten • 
              Open daily • Hours vary • Actually they don't vary • We're just never sure when we're open.
            </p>
            <p className="text-text-primary/70 leading-relaxed text-lg">
              *Featured amenities include: ambient lighting (one flickering bulb), 
              climate control (a broken window), and our famous "mystery puddle" • 
              Regular customers include local legends like "Crying Janusz" and "The Grażyna Sisters" • 
              Join Us! • Become a legend • Or at least become slightly damp.
            </p>
            
            <div className="pt-4 flex justify-center lg:justify-start">
               {/* Note: Color ONLY hover effect - No Scaling */}
              <AthirstButton>Enter If You Dare</AthirstButton>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Image animated right-to-left */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-4/5">
              {/* Subtle ambient glow behind image */}
              <div className="absolute inset-0 bg-red-accent/5 blur-3xl rounded-full" />
              
              {/* Image without border, only shadow effect */}
              <img 
                src="" /* Empty for now per instructions */
                alt="Sanctuary Collection" 
                className="relative w-full h-full object-cover rounded-md shadow-[0_20px_50px_rgba(255,59,59,0.15)] bg-bg-secondary"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
