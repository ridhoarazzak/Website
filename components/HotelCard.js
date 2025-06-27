export default function HotelCard({ hotel }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
      <div className="p-4 bg-white">
        <h2 className="text-xl font-semibold text-[#3B7A57]">{hotel.name}</h2>
        <p className="text-[#6F4E37]">{hotel.location}</p>
      </div>
    </div>
  );
  }
