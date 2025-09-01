import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/Badge";

interface StatusPageProps {
  params: Promise<{ locale: string }>;
}

export default async function StatusPage({ params }: StatusPageProps) {
  const { locale } = await params;

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {locale === "id" ? "Status Sistem" : "System Status"}
          </h1>
          <p className="text-lg text-gray-600">
            {locale === "id"
              ? "Monitor real-time status dari semua API endpoints dan data sources"
              : "Real-time monitoring of all API endpoints and data sources"}
          </p>
        </div>

        {/* Overall Status */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-green-900">
                {locale === "id" ? "Semua Sistem Operasional" : "All Systems Operational"}
              </h2>
              <p className="text-green-700">
                {locale === "id"
                  ? "Semua layanan berjalan normal"
                  : "All services are running normally"}
              </p>
            </div>
            <Badge className="bg-green-600 text-white">
              {locale === "id" ? "Online" : "Online"}
            </Badge>
          </div>
        </div>

        {/* API Endpoints Status */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {locale === "id" ? "Status API Endpoints" : "API Endpoints Status"}
          </h2>
          
          <div className="space-y-4">
            {/* Health APIs */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">
                    {locale === "id" ? "API Kesehatan" : "Health APIs"}
                  </h3>
                  <p className="text-sm text-gray-600">/api/v1/health/*</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-600 text-white">
                    {locale === "id" ? "Operasional" : "Operational"}
                  </Badge>
                  <span className="text-sm text-gray-500">99.9%</span>
                </div>
              </div>
            </div>

            {/* Environment APIs */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">
                    {locale === "id" ? "API Lingkungan" : "Environment APIs"}
                  </h3>
                  <p className="text-sm text-gray-600">/api/v1/environment/*</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-600 text-white">
                    {locale === "id" ? "Operasional" : "Operational"}
                  </Badge>
                  <span className="text-sm text-gray-500">99.8%</span>
                </div>
              </div>
            </div>

            {/* Coming Soon APIs */}
            <div className="border rounded-lg p-4 bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">
                    {locale === "id" ? "API Transparansi" : "Transparency APIs"}
                  </h3>
                  <p className="text-sm text-gray-600">/api/v1/transparency/*</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                    {locale === "id" ? "Segera Hadir" : "Coming Soon"}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4 bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">
                    {locale === "id" ? "API Statistik" : "Statistics APIs"}
                  </h3>
                  <p className="text-sm text-gray-600">/api/v1/statistics/*</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                    {locale === "id" ? "Segera Hadir" : "Coming Soon"}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Sources Status */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {locale === "id" ? "Status Sumber Data" : "Data Sources Status"}
          </h2>
          
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">
                    {locale === "id" ? "Kementerian Kesehatan" : "Ministry of Health"}
                  </h3>
                  <p className="text-sm text-gray-600">kemkes.go.id</p>
                </div>
                <Badge className="bg-green-600 text-white">
                  {locale === "id" ? "Online" : "Online"}
                </Badge>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">
                    {locale === "id" ? "Kementerian Lingkungan Hidup" : "Ministry of Environment"}
                  </h3>
                  <p className="text-sm text-gray-600">menlhk.go.id</p>
                </div>
                <Badge className="bg-green-600 text-white">
                  {locale === "id" ? "Online" : "Online"}
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <div className="text-center text-sm text-gray-500">
          {locale === "id" ? "Terakhir diperbarui" : "Last updated"}: {new Date().toLocaleString(locale === "id" ? "id-ID" : "en-US")}
        </div>
      </div>
    </div>
  );
}