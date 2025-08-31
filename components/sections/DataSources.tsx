export function DataSources() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Available Data Sources
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Access data from various Indonesian government ministries and agencies
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder for data source cards */}
          <div className="data-card">
            <h3 className="font-semibold">Ministry of Health</h3>
            <p className="text-sm text-muted-foreground">Hospital data, disease surveillance</p>
          </div>
        </div>
      </div>
    </section>
  );
}