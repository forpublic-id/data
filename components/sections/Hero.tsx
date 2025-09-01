import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Database, Globe, Zap, Shield } from "lucide-react";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-50/30 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(220,38,38,0.02)_25%,rgba(220,38,38,0.02)_50%,transparent_50%,transparent_75%,rgba(220,38,38,0.02)_75%)] bg-[length:32px_32px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Status Badge */}
          <Badge variant="outline" className="mb-6 bg-white/80 backdrop-blur">
            <Zap className="h-3 w-3 mr-1 text-green-600" />
            {t("status")}
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            <span className="block">{t("title.line1")}</span>
            <span className="block bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              {t("title.line2")}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-lg leading-8 text-gray-600 sm:text-xl">
            {t("subtitle")}
          </p>

          {/* Feature Highlights */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="flex flex-col items-center">
              <Database className="h-8 w-8 text-red-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">
                {t("features.unified")}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="h-8 w-8 text-red-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">
                {t("features.accessible")}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="h-8 w-8 text-red-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">
                {t("features.realtime")}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-red-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">
                {t("features.reliable")}
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              {t("cta.explore")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-red-200 text-red-700 hover:bg-red-50"
            >
              {t("cta.docs")}
            </Button>
          </div>

          {/* API Stats */}
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="bg-white/60 backdrop-blur rounded-lg p-6 border border-red-100">
              <div className="text-3xl font-bold text-red-600">50+</div>
              <div className="text-sm text-gray-600">{t("stats.datasets")}</div>
            </div>
            <div className="bg-white/60 backdrop-blur rounded-lg p-6 border border-red-100">
              <div className="text-3xl font-bold text-red-600">15+</div>
              <div className="text-sm text-gray-600">
                {t("stats.ministries")}
              </div>
            </div>
            <div className="bg-white/60 backdrop-blur rounded-lg p-6 border border-red-100">
              <div className="text-3xl font-bold text-red-600">99.9%</div>
              <div className="text-sm text-gray-600">{t("stats.uptime")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
