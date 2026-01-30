import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const features = [
  {
    title: "Unified Workspace",
    description:
      "Plan, track, and manage work across teams with a single source of truth.",
    accent: "from-indigo-500 to-purple-500",
  },
  {
    title: "Smart Automation",
    description:
      "Reduce manual work with intelligent workflows that adapt to your process.",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "Real‑Time Insights",
    description:
      "Make confident decisions using live performance and progress analytics.",
    accent: "from-amber-500 to-orange-500",
  },
  {
    title: "Enterprise‑Grade Security",
    description:
      "Built with industry‑standard encryption and compliance at every layer.",
    accent: "from-sky-500 to-blue-500",
  },
];

export default function Features() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mb-24"
        >
          <span className="text-sm tracking-widest uppercase text-primary">
            Platform Capabilities
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            Powerful Features for
            <span className="text-primary"> Growing Businesses</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Designed with performance, scalability, and clarity at its core.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-14"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative rounded-3xl border border-gray-200 p-12 overflow-hidden bg-white"
            >
              {/* Soft gradient glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition duration-500 bg-gradient-to-br ${feature.accent}`}
              />

              {/* Accent line */}
              <div
                className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${feature.accent} opacity-0 group-hover:opacity-100 transition duration-500`}
              />

              <h3 className="relative text-xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="relative text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
