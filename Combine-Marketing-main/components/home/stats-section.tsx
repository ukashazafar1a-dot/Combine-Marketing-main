export default function StatsSection() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
            <p className="text-blue-100">Success Rate</p>
          </div>
          
          <div className="p-4">
            <div className="text-4xl lg:text-5xl font-bold mb-2">100</div>
            <p className="text-blue-100">Happy Clients</p>
          </div>
          
          {/* <div className="p-4">
            <div className="text-4xl lg:text-5xl font-bold mb-2">15+</div>
            <p className="text-blue-100">Years Experience</p>
          </div> */}
          
          <div className="p-4">
            <div className="text-4xl lg:text-5xl font-bold mb-2">50+</div>
            <p className="text-blue-100">Countries Covered</p>
          </div>
        </div>
      </div>
    </section>
  )
}