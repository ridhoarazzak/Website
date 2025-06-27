import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 p-8 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Kontak Kami</h1>
        <p className="mb-4 text-[#6F4E37]">
          Hubungi kami untuk reservasi, informasi wisata, atau pertanyaan lainnya.
        </p>
        <form className="space-y-4">
          <input type="text" placeholder="Nama" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
          <textarea placeholder="Pesan" rows="4" className="w-full border p-2 rounded"></textarea>
          <button type="submit" className="px-5 py-2 bg-[#3B7A57] text-white rounded hover:bg-[#2f6044] transition">Kirim Pesan</button>
        </form>
      </main>
      <Footer />
    </div>
  );
    }
