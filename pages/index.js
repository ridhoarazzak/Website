import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section
          className="relative h-screen bg-cover bg-center"
          style={{ backgroundImage: "url(/images/hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-[#3b7a57]/70 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-white text-5xl md:text-6xl font-bold text-center px-4"
            >
              Nikmati Rasa Alam Solok Selatan
            </motion.h1>
          </div>
        </section>

        <section className="p-8 text-center">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Penginapan & Wisata
          </motion.h2>
          <p className="text-[#6F4E37] mb-6">
            Temukan motel nyaman dan destinasi alam yang menenangkan.
          </p>
          <motion.div
            className="space-x-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/hotels" className="px-5 py-2 bg-[#3B7A57] text-white rounded-full hover:bg-[#2f6044] transition">Hotel</Link>
            <Link href="/tourism" className="px-5 py-2 bg-[#6F4E37] text-white rounded-full hover:bg-[#5a3f2c] transition">Wisata</Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
              }
