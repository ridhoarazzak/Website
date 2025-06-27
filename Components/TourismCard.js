export default function TourismCard({ spot }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={spot.image} alt={spot.name} className="w-full h-48 object-cover" />
      <div className="p-4 bg-white">
        <h2 className="text-xl font-semibold text-[#3B7A57]">{spot.name}</h2>
        <p className="text-[#6F4E37]">{spot.location}</p>
      </div>
    </div>
  );
}
