export default function Testimonial() {
  const testimonials = [
    {
      quote: "The birth chart reading was incredibly accurate and gave me so much clarity about my life purpose.",
      author: "Lalit Sharma.",
      role: "Client since 2019"
    },
    {
      quote: "I was skeptical at first, but the career guidance I received was spot on. Changed my professional trajectory completely.",
      author: "Neha Mittal",
      role: "Client since 2020"
    },
    {
      quote: "The relationship analysis helped me understand my partner better than years of therapy. Highly recommend!",
      author: "Priya K.",
      role: "Client since 2021"
    }
  ]

  return (
    <section className="py-16 bg-dark text-white">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-4xl text-center mb-12">Client Testimonial</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <p className="italic mb-4">&quot;{testimonial.quote}&quot;</p>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-gray-400 text-sm">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
