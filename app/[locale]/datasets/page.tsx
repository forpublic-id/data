"use client";

import { useState } from "react";
import { Search, Download, ExternalLink, Filter } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface Dataset {
  id: string;
  name: { id: string; en: string };
  description: { id: string; en: string };
  category: "health" | "environment" | "transparency" | "statistics";
  source: string;
  updateFrequency: "realtime" | "daily" | "weekly" | "monthly";
  status: "online" | "offline" | "maintenance";
  endpoint: string;
  lastUpdated: string;
}

const mockDatasets: Dataset[] = [
  {
    id: "hospitals",
    name: { id: "Data Rumah Sakit", en: "Hospital Data" },
    description: { 
      id: "Informasi rumah sakit, kapasitas, dan layanan kesehatan", 
      en: "Hospital information, capacity, and healthcare services" 
    },
    category: "health",
    source: "Kementerian Kesehatan",
    updateFrequency: "daily",
    status: "online",
    endpoint: "/api/v1/health/hospitals",
    lastUpdated: "2025-01-01T10:00:00Z"
  },
  {
    id: "air-quality",
    name: { id: "Kualitas Udara", en: "Air Quality" },
    description: { 
      id: "Monitor kualitas udara real-time di berbagai kota", 
      en: "Real-time air quality monitoring across cities" 
    },
    category: "environment",
    source: "Kementerian Lingkungan Hidup",
    updateFrequency: "realtime",
    status: "online",
    endpoint: "/api/v1/environment/air-quality",
    lastUpdated: "2025-01-01T11:30:00Z"
  },
  {
    id: "corruption-cases",
    name: { id: "Kasus Korupsi", en: "Corruption Cases" },
    description: { 
      id: "Database kasus korupsi dan asset recovery", 
      en: "Corruption cases database and asset recovery" 
    },
    category: "transparency",
    source: "Komisi Pemberantasan Korupsi",
    updateFrequency: "weekly",
    status: "maintenance",
    endpoint: "/api/v1/transparency/corruption",
    lastUpdated: "2024-12-28T00:00:00Z"
  },
  {
    id: "population-stats",
    name: { id: "Statistik Penduduk", en: "Population Statistics" },
    description: { 
      id: "Data demografi dan sensus penduduk Indonesia", 
      en: "Indonesian demographic and census data" 
    },
    category: "statistics",
    source: "Badan Pusat Statistik",
    updateFrequency: "monthly",
    status: "online",
    endpoint: "/api/v1/statistics/population",
    lastUpdated: "2024-12-01T00:00:00Z"
  }
];

const categories = [
  { key: "all", name: { id: "Semua", en: "All" } },
  { key: "health", name: { id: "Kesehatan", en: "Health" } },
  { key: "environment", name: { id: "Lingkungan", en: "Environment" } },
  { key: "transparency", name: { id: "Transparansi", en: "Transparency" } },
  { key: "statistics", name: { id: "Statistik", en: "Statistics" } }
];

interface DatasetsPageProps {
  params: Promise<{ locale: string }>;
}

export default function DatasetsPage({ params }: DatasetsPageProps) {
  const [locale, setLocale] = useState("id");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get locale from params when component mounts
  useState(() => {
    params.then(({ locale: paramLocale }) => {
      setLocale(paramLocale);
    });
  });

  const filteredDatasets = mockDatasets.filter((dataset) => {
    const matchesSearch = 
      dataset.name[locale as "id" | "en"]
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      dataset.description[locale as "id" | "en"]
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || dataset.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (dataset: Dataset, format: "json" | "csv") => {
    // Mock download functionality
    const filename = `${dataset.id}.${format}`;
    alert(`Downloading ${filename}...`);
  };

  const getStatusBadge = (status: Dataset["status"]) => {
    switch (status) {
      case "online":
        return <Badge className="bg-green-600 text-white">{locale === "id" ? "Online" : "Online"}</Badge>;
      case "offline":
        return <Badge className="bg-red-600 text-white">{locale === "id" ? "Offline" : "Offline"}</Badge>;
      case "maintenance":
        return <Badge className="bg-yellow-600 text-white">{locale === "id" ? "Maintenance" : "Maintenance"}</Badge>;
    }
  };

  const getFrequencyBadge = (frequency: Dataset["updateFrequency"]) => {
    const frequencyMap = {
      realtime: { id: "Real-time", en: "Real-time" },
      daily: { id: "Harian", en: "Daily" },
      weekly: { id: "Mingguan", en: "Weekly" },
      monthly: { id: "Bulanan", en: "Monthly" }
    };
    
    return (
      <Badge variant="outline" className="text-xs">
        {frequencyMap[frequency][locale as "id" | "en"]}
      </Badge>
    );
  };

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {locale === "id" ? "Jelajahi Dataset" : "Explore Datasets"}
          </h1>
          <p className="text-lg text-gray-600">
            {locale === "id"
              ? "Temukan dan akses dataset pemerintah Indonesia"
              : "Discover and access Indonesian government datasets"}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder={locale === "id" ? "Cari dataset..." : "Search datasets..."}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category.key} value={category.key}>
                  {category.name[locale as "id" | "en"]}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            {locale === "id" 
              ? `Menampilkan ${filteredDatasets.length} dari ${mockDatasets.length} dataset`
              : `Showing ${filteredDatasets.length} of ${mockDatasets.length} datasets`}
          </p>
        </div>

        {/* Dataset Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDatasets.map((dataset) => (
            <div key={dataset.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {dataset.name[locale as "id" | "en"]}
                </h3>
                {getStatusBadge(dataset.status)}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">
                {dataset.description[locale as "id" | "en"]}
              </p>

              {/* Meta Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">
                    {locale === "id" ? "Sumber" : "Source"}:
                  </span>
                  <span className="text-gray-700">{dataset.source}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">
                    {locale === "id" ? "Update" : "Updates"}:
                  </span>
                  {getFrequencyBadge(dataset.updateFrequency)}
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">
                    {locale === "id" ? "Terakhir" : "Last Updated"}:
                  </span>
                  <span className="text-gray-700">
                    {new Date(dataset.lastUpdated).toLocaleDateString(locale === "id" ? "id-ID" : "en-US")}
                  </span>
                </div>
              </div>

              {/* Endpoint */}
              <div className="mb-4">
                <code className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-mono block truncate">
                  {dataset.endpoint}
                </code>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => window.open(dataset.endpoint, '_blank')}
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  {locale === "id" ? "Lihat API" : "View API"}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleDownload(dataset, "json")}
                >
                  <Download className="h-3 w-3 mr-1" />
                  JSON
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleDownload(dataset, "csv")}
                >
                  <Download className="h-3 w-3 mr-1" />
                  CSV
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDatasets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              {locale === "id" 
                ? "Tidak ada dataset yang ditemukan" 
                : "No datasets found"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}