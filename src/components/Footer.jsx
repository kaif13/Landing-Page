import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 text-center text-sm text-gray-500"
    >
      © {new Date().getFullYear()} YourName. Crafted with care.
    </motion.footer>
  );
}
