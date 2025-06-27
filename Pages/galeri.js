import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Galeri() {
  const gallery = [
    {
      id: 1,
      title: "Air Terjun Tangsi",
      location: "Sungai Pagu",
      description: "Air Terjun Tangsi terkenal dengan aliran air jernih di tengah hutan tropis. Cocok untuk hiking dan piknik.",
      image: "/images/galeri1.jpg",
    },
    {
      id: 2,
      title: "Bukit Durian Tinggi",
      location: "Padang Aro",
      description: "Tempat populer untuk melihat sunrise dan sunset. Pemandangan sawah dan pegunungan yang memukau.",
      image: "/images/galeri2.jpg",
    },
    {
      id: 3,
      title: "Danau Kembar",
      location: "Muara Labuh",
      description: "Danau alami dengan panorama hijau. Cocok untuk camping, memancing, atau piknik keluarga.",
      image: "/images/galeri3.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5DC] text-[#3B7A57]">
      <Navbar />
      <main className="flex-1 p-8 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Galeri Wisata Solok Selatan</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {gallery.map(item => (
            <div key={item.id} className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                <p className="text-[#6F4E37] text-sm mb-1">{item.location}</p>
                <p className="text-[#6F4E37]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
    }
