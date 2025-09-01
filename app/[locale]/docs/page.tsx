interface DocsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { locale } = await params;

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {locale === "id" ? "Dokumentasi API" : "API Documentation"}
          </h1>
          <p className="text-lg text-gray-600">
            {locale === "id"
              ? "Panduan lengkap untuk menggunakan Data ForPublic.id API Gateway"
              : "Complete guide for using Data ForPublic.id API Gateway"}
          </p>
        </div>

        {/* Getting Started */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {locale === "id" ? "Memulai" : "Getting Started"}
          </h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              {locale === "id" ? "URL Dasar API" : "Base API URL"}
            </h3>
            <code className="bg-gray-900 text-green-400 px-4 py-2 rounded block font-mono text-sm">
              https://data.forpublic.id/api/v1
            </code>
          </div>
        </section>

        {/* Available Endpoints */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {locale === "id" ? "Endpoint Tersedia" : "Available Endpoints"}
          </h2>

          <div className="space-y-6">
            {/* Health APIs */}
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {locale === "id" ? "Data Kesehatan" : "Health Data"}
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                    GET
                  </span>
                  <code className="font-mono text-sm">
                    /api/v1/health/hospitals
                  </code>
                  <span className="text-gray-600">
                    {locale === "id" ? "Data rumah sakit" : "Hospital data"}
                  </span>
                </div>
              </div>
            </div>

            {/* Environment APIs */}
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {locale === "id" ? "Data Lingkungan" : "Environment Data"}
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                    GET
                  </span>
                  <code className="font-mono text-sm">
                    /api/v1/environment/air-quality
                  </code>
                  <span className="text-gray-600">
                    {locale === "id" ? "Kualitas udara" : "Air quality"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Response Format */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {locale === "id" ? "Format Response" : "Response Format"}
          </h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-sm">
              {`{
  "data": [...],
  "metadata": {
    "source": "kemkes",
    "sourceType": "government",
    "lastUpdated": "2025-01-01T00:00:00Z",
    "reliability": "high",
    "cached": false
  }
}`}
            </pre>
          </div>
        </section>

        {/* Rate Limits */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {locale === "id" ? "Batas Permintaan" : "Rate Limits"}
          </h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="text-gray-700">
              {locale === "id"
                ? "Setiap endpoint memiliki batas permintaan yang berbeda sesuai dengan kapabilitas sumber data. Informasi rate limit tersedia di header response."
                : "Each endpoint has different rate limits based on data source capabilities. Rate limit information is available in response headers."}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
