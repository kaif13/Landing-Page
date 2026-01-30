import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-28 overflow-hidden bg-slate-950">
      {/* Subtle gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-indigo-600/10" />

      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
        {/* Small label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4 text-sm tracking-widest text-indigo-400 uppercase"
        >
          Get Started Today
        </motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          Build Faster.
          <span className="block text-indigo-400">Operate Smarter.</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-slate-300"
        >
          Join thousands of teams using Flowbase to streamline workflows,
          improve visibility, and ship high‑quality products on time.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-10 py-4 rounded-xl font-semibold shadow-lg"
          >
            Start Free Trial
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            className="px-10 py-4 rounded-xl border border-slate-700 text-slate-200 hover:bg-slate-900"
          >
            Talk to Sales
          </motion.button>
        </motion.div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-sm text-slate-400"
        >
          No credit card required • Cancel anytime
        </motion.p>
      </div>
    </section>
  );
}
