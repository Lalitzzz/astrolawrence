export default function ServiceCard({ service }) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
        <div className="p-6">
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="font-serif text-2xl font-semibold text-dark mb-3">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
          <button className="mt-4 text-primary font-semibold hover:underline">Learn More</button>
        </div>
      </div>
    )
  }