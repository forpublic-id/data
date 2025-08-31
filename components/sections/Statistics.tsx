export function Statistics() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Platform Statistics
          </h2>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="bg-white/60 backdrop-blur rounded-lg p-6 border border-red-100">
            <div className="text-3xl font-bold text-red-600">50+</div>
            <div className="text-sm text-gray-600">Available Datasets</div>
          </div>
          <div className="bg-white/60 backdrop-blur rounded-lg p-6 border border-red-100">
            <div className="text-3xl font-bold text-red-600">15+</div>
            <div className="text-sm text-gray-600">Government Sources</div>
          </div>
          <div className="bg-white/60 backdrop-blur rounded-lg p-6 border border-red-100">
            <div className="text-3xl font-bold text-red-600">99.9%</div>
            <div className="text-sm text-gray-600">API Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
}