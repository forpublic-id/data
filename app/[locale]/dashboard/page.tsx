"use client";

import { useState, useEffect } from "react";
import { Activity, Database, Globe, TrendingUp, AlertTriangle, CheckCircle, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface DashboardPageProps {
  params: Promise<{ locale: string }>;
}

export default function DashboardPage({ params }: DashboardPageProps) {
  const [locale, setLocale] = useState("id");

  // Get locale from params when component mounts
  useEffect(() => {
    params.then(({ locale: paramLocale }) => {
      setLocale(paramLocale);
    });
  }, [params]);

  // Mock real-time data
  const [stats, setStats] = useState({
    totalRequests: 142573,
    activeEndpoints: 12,
    dataSourcesOnline: 8,
    totalDatapoints: 2847392
  });

  const recentActivity = [
    {
      id: 1,
      type: "api_call",
      message: { 
        id: "API call ke /health/hospitals berhasil", 
        en: "Successful API call to /health/hospitals" 
      },
      timestamp: new Date(Date.now() - 2 * 60 * 1000),
      status: "success"
    },
    {
      id: 2,
      type: "data_update",
      message: { 
        id: "Data kualitas udara diperbarui", 
        en: "Air quality data updated" 
      },
      timestamp: new Date(Date.now() - 15 * 60 * 1000),
      status: "info"
    },
    {
      id: 3,
      type: "source_maintenance",
      message: { 
        id: "KPK API dalam maintenance", 
        en: "KPK API under maintenance" 
      },
      timestamp: new Date(Date.now() - 45 * 60 * 1000),
      status: "warning"
    }
  ];

  const dataSourceStatus = [
    { name: "Kemkes", status: "online", uptime: "99.9%" },
    { name: "KLHK", status: "online", uptime: "99.8%" },
    { name: "BPS", status: "online", uptime: "98.5%" },
    { name: "KPK", status: "maintenance", uptime: "95.2%" },
    { name: "BMKG", status: "online", uptime: "99.7%" }
  ];

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        totalRequests: prev.totalRequests + Math.floor(Math.random() * 5),
        totalDatapoints: prev.totalDatapoints + Math.floor(Math.random() * 50)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {locale === "id" ? "Dashboard Data" : "Data Dashboard"}
          </h1>
          <p className="text-lg text-gray-600">
            {locale === "id"
              ? "Monitor real-time aktivitas dan status platform"
              : "Monitor real-time platform activity and status"}
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">
                  {locale === "id" ? "Total Requests" : "Total Requests"}
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.totalRequests.toLocaleString()}
                </p>
              </div>
              <Activity className="h-8 w-8 text-red-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">
                  {locale === "id" ? "Endpoint Aktif" : "Active Endpoints"}
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.activeEndpoints}
                </p>
              </div>
              <Database className="h-8 w-8 text-red-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">
                  {locale === "id" ? "Sumber Online" : "Sources Online"}
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.dataSourcesOnline}/9
                </p>
              </div>
              <Globe className="h-8 w-8 text-red-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">
                  {locale === "id" ? "Data Points" : "Data Points"}
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {(stats.totalDatapoints / 1000000).toFixed(1)}M
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-red-600" />
            </div>
          </div>
        </div>

        {/* Data Sources Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {locale === "id" ? "Status Sumber Data" : "Data Sources Status"}
            </h2>
            <div className="space-y-3">
              {dataSourceStatus.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {source.status === "online" ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    )}
                    <span className="text-sm font-medium text-gray-900">
                      {source.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">{source.uptime}</span>
                    <Badge 
                      className={source.status === "online" 
                        ? "bg-green-600 text-white" 
                        : "bg-yellow-600 text-white"
                      }
                    >
                      {source.status === "online" 
                        ? (locale === "id" ? "Online" : "Online")
                        : (locale === "id" ? "Maintenance" : "Maintenance")
                      }
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {locale === "id" ? "Aktivitas Terbaru" : "Recent Activity"}
            </h2>
            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.status === "success" ? "bg-green-600" :
                    activity.status === "warning" ? "bg-yellow-600" : "bg-blue-600"
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      {activity.message[locale as keyof typeof activity.message]}
                    </p>
                    <p className="text-xs text-gray-500">
                      {activity.timestamp.toLocaleTimeString(locale === "id" ? "id-ID" : "en-US")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {locale === "id" ? "Akses Cepat" : "Quick Access"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href={`/${locale}/datasets`}
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Database className="h-5 w-5 text-red-600" />
              <span className="font-medium text-gray-900">
                {locale === "id" ? "Jelajahi Dataset" : "Explore Datasets"}
              </span>
            </a>
            <a
              href={`/${locale}/docs`}
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Globe className="h-5 w-5 text-red-600" />
              <span className="font-medium text-gray-900">
                {locale === "id" ? "Dokumentasi" : "Documentation"}
              </span>
            </a>
            <a
              href={`/${locale}/status`}
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Activity className="h-5 w-5 text-red-600" />
              <span className="font-medium text-gray-900">
                {locale === "id" ? "Status Sistem" : "System Status"}
              </span>
            </a>
            <a
              href="https://github.com/forpublic-id/data"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ExternalLink className="h-5 w-5 text-red-600" />
              <span className="font-medium text-gray-900">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}