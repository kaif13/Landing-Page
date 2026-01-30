import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Background gradients */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-300 rounded-full blur-3xl opacity-30" />
      <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-purple-300 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <span className="inline-block mb-5 px-4 py-1 text-sm rounded-full bg-indigo-100 text-primary font-medium">
            New • Productivity Platform
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Simplify Your Team’s <br />
            Workflow — <span className="text-primary">All in One Place</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-xl">
            Flowbase helps modern teams plan, track, and deliver work faster
            with a clean interface and powerful automation — without complexity.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="bg-primary text-white px-8 py-4 rounded-xl shadow-lg"
            >
              Start Free Trial
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              className="px-8 py-4 rounded-xl border border-gray-300"
            >
              Request Demo
            </motion.button>
          </div>

          {/* Social proof */}
          <p className="mt-6 text-sm text-gray-500">
            Trusted by 5,000+ teams worldwide
          </p>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative"
        >
          <div className="relative bg-white rounded-3xl shadow-2xl p-6">
            <div className="h-72 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-lg font-semibold">
              Product Dashboard Preview
            </div>
          </div>

          {/* Floating metric */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-xl shadow-lg"
          >
            <p className="text-sm font-semibold text-gray-800">
              ⚡ 40% Faster Delivery
            </p>
            <p className="text-xs text-gray-500">Reported by active teams</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
