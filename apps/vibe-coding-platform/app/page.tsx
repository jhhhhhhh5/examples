import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Your Name
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-lg text-gray-400"
        >
          Videography Portfolio
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Button className="bg-white text-black rounded-2xl px-6 py-3">
            View Work
          </Button>
        </motion.div>
      </section>

      {/* Video Grid */}
      <section className="px-6 md:px-20 py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {[1, 2, 3, 4].map((item) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl overflow-hidden shadow-lg bg-gray-900"
          >
            <div className="aspect-video bg-gray-800 flex items-center justify-center">
              <span className="text-gray-500">Video {item}</span>
            </div>
          </motion.div>
        ))}
      </section>

      {/* About */}
      <section className="text-center px-6 pb-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-400 max-w-xl mx-auto"
        >
          I create cinematic visuals and tell stories through video.
        </motion.p>
      </section>

      {/* Contact */}
      <section className="text-center pb-20">
        <Button className="bg-white text-black rounded-2xl px-6 py-3">
          Contact Me
        </Button>
      </section>
    </div>
  );
}
