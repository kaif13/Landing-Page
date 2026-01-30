import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-16">
        {/* LEFT – Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-2"
        >
          <span className="text-sm tracking-widest uppercase text-primary">
            Get in Touch
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            Ready to Improve How
            <span className="text-primary"> Your Team Works?</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Connect with our team to explore how Flowbase can help you
            streamline operations, gain visibility, and scale with confidence.
          </p>

          <div className="mt-10 space-y-4 text-gray-700">
            <p>• Product walkthroughs and demos</p>
            <p>• Custom pricing for growing teams</p>
            <p>• Security and compliance questions</p>
          </div>
        </motion.div>

        {/* RIGHT – Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-3 bg-white rounded-3xl p-12 shadow-lg"
        >
          <form className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Work Email
              </label>
              <input
                type="email"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Tell us about your goals
              </label>
              <textarea
                rows="4"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div className="md:col-span-2 flex items-center justify-between mt-4">
              <p className="text-sm text-gray-500">
                We usually reply within one business day.
              </p>

              <button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-600 transition"
              >
                Request a Demo
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
