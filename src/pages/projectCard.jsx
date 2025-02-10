export default function ProjectCard({ title, description, tags, link, image }) {
  return (
    <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="overflow-hidden rounded-xl">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl" />
      </div>

      <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-gray-300 text-sm">{description}</p>

      {/* CTA Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 block text-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-xl transition-all"
      >
        View Project
      </a>
    </div>
  );
}
