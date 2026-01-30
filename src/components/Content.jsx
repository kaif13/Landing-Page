import { motion } from "framer-motion";

export default function Content() {
  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-indigo-200 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT – Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-sm tracking-widest uppercase text-primary">
            How It Works
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            A Smarter Way to
            <span className="text-primary"> Run Your Business</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Flowbase centralizes planning, execution, and reporting into a
            single intuitive platform — helping teams stay aligned and focused.
          </p>

          {/* Bullet points */}
          <div className="mt-10 space-y-6">
            {[
              "Set goals and track progress in real time",
              "Automate repetitive workflows",
              "Collaborate seamlessly across teams",
            ].map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                <p className="text-gray-700">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT – Visual / Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-3xl bg-white shadow-2xl p-6">
            <div className="h-72 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold">
              Product Workflow Preview
            </div>
          </div>

          {/* Floating stat */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-xl shadow-lg"
          >
            <p className="text-sm font-semibold text-gray-800">
              +32% Productivity
            </p>
            <p className="text-xs text-gray-500">Reported by teams</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
