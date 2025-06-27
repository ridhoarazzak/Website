import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Galeri() {
  const gallery = [
    {
      id: 1,
      title: "Air Terjun Tangsi",
      location: "Sungai Lambai",
      description: "Air Terjun Tangsi terkenal dengan aliran air jernih di tengah hutan tropis. Cocok untuk hiking dan piknik.",
      image: "/SnapInsta.to_47346666_338955076688493_3135412711591770602_n.jpg",
    },
    {
      id: 2,
      title: "Gunung Kerinci",
      location: "Padang Aro",
      description: "Tempat populer untuk melihat sunrise dan sunset. Pemandangan sawah dan pegunungan yang memukau.",
      image: "/SnapInsta.to_489771670_18379061317136841_6796868984899684999_n.jpg",
    },
    {
      id: 3,
      title: "Tangsi 4",
      location: "Sungai Lambai",
      description: "Air Terjun alami dengan panorama hijau. Cocok untuk camping, memancing, atau piknik keluarga.",
      image: "/SnapInsta.to_25018345_189227161656877_7222350600464236544_n.jpg",
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
