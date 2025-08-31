export function APIOverview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            API Overview
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            RESTful API endpoints with consistent response format
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder for API endpoint cards */}
          <div className="data-card">
            <h3 className="font-semibold">Health APIs</h3>
            <p className="text-sm text-muted-foreground">Hospital capacity, disease surveillance</p>
            <code className="api-endpoint mt-2">/api/v1/health/hospitals</code>
          </div>
        </div>
      </div>
    </section>
  );
}