import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourismCard from "@/components/TourismCard";

export default function Tourism() {
  const spots = [
    { id: 1, name: "Air Terjun Tangsi", image: "/images/wisata1.jpg", location: "Sungai Pagu" },
    { id: 2, name: "Bukit Durian Tinggi", image: "/images/wisata1.jpg", location: "Padang Aro" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Destinasi Wisata</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {spots.map(spot => (
            <TourismCard key={spot.id} spot={spot} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
  }
