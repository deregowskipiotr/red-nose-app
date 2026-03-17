import { motion } from "framer-motion";
import { LiquidGlassCard } from "./ui/LiquidGlassCard";
import { LiquidMetalCard } from "./ui/LiquidMetalCard";

const Wines = () => {
  return (
    <section id="wines" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* TOP: Title and Description animated top-to-bottom */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-text-primary tracking-wide">
              La Carta dei Vini
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-text-secondary mt-6 max-w-4xl mx-auto text-lg italic leading-relaxed">
              Presenting our cellar • A carefully curated collection of liquids that vaguely resemble wine • 
              Each bottle aged to perfection • Perfection defined as 'left in a warm garage since 2025' • 
              Our sommelier (a man named Zbigniew who once saw a vineyard on TV) recommends pairing with: 
              regret, existential dread, or more of the same wine • Tasting notes available upon request • 
              Request not recommended.
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

        {/* BOTTOM: Cards with slight staggered delay */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-14 mt-12">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <LiquidGlassCard 
              title="Crystal Clear"
              description="A refined experience that brings light to the darkest corners of the vault."
            />
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <LiquidMetalCard 
              title="Molten Core"
              description="Forged in darkness, capturing the essence of pure power and precision."
            />
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          >
            <LiquidGlassCard 
              title="Obsidian Echo"
              description="A dark glass reflection echoing the tales of past generations and forgotten vows."
            />
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Wines;