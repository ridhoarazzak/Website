import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HotelCard from "@/components/HotelCard";

export default function Hotels() {
  const hotels = [
    { id: 1, name: "Motel Sungai Pagu", image: "/images/hotel1.jpg", location: "Sungai Pagu" },
    { id: 2, name: "Homestay Solok Selatan", image: "/images/hotel1.jpg", location: "Padang Aro" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Penginapan & Motel</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {hotels.map(hotel => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
    }
