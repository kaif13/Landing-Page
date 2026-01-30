import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-primary">Flowbase</div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <li className="hover:text-primary cursor-pointer">Product</li>
            <li className="hover:text-primary cursor-pointer">Solutions</li>
            <li className="hover:text-primary cursor-pointer">Pricing</li>
            <li className="hover:text-primary cursor-pointer">Contact</li>
          </ul>

          {/* Desktop CTA */}
          <button className="hidden md:block bg-primary text-white px-5 py-2 rounded-lg">
            Get Started
          </button>

          {/* Mobile Hamburger */}
          <button className="md:hidden" onClick={() => setOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white h-[70vh] rounded-b-3xl px-6 py-8"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-10">
                <span className="text-xl font-bold text-primary">Flowbase</span>
                <button onClick={() => setOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              {/* Links */}
              <ul className="flex flex-col gap-6 text-lg font-medium">
                <li onClick={() => setOpen(false)}>Product</li>
                <li onClick={() => setOpen(false)}>Solutions</li>
                <li onClick={() => setOpen(false)}>Pricing</li>
                <li onClick={() => setOpen(false)}>Contact</li>
              </ul>

              {/* CTA */}
              <button className="mt-10 w-full bg-primary text-white py-3 rounded-xl">
                Get Started
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
