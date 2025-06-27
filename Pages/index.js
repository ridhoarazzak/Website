import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#F5F5DC] text-[#3B7A57] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url(/images/hero.jpg)" }}>
          <div className="absolute inset-0 bg-[#3b7a57]/70 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-white text-5xl md:text-6xl font-bold text-center px-4"
            >
              Nikmati Rasa Alam di Solok Selatan
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
            Pilihan Menginap & Wisata
          </motion.h2>
          <p className="text-[#6F4E37] mb-6">Akomodasi dan destinasi terbaik bernuansa alam dan budaya lokal</p>
          <motion.div
            className="space-x-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/hotels" className="px-5 py-2 bg-[#3B7A57] text-white rounded-full hover:bg-[#2f6044] transition">Lihat Hotel</Link>
            <Link href="/tourism" className="px-5 py-2 bg-[#6F4E37] text-white rounded-full hover:bg-[#5a3f2c] transition">Lihat Wisata</Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
    }
