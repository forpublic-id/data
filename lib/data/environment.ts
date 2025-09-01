import type { AirQualityData } from "@/lib/types/data";

interface AirQualityQueryParams {
  province?: string | null;
  city?: string | null;
  stationId?: string | null;
  hours: number;
}

interface AirQualityResponse {
  data: AirQualityData[];
  lastUpdated: string;
}

// Mock air quality data for development
const MOCK_AIR_QUALITY: AirQualityData[] = [
  {
    stationId: "aq-001",
    location: {
      name: "Jakarta Pusat",
      coordinates: [-6.2088, 106.8456],
    },
    measurements: {
      pm25: 35.2,
      pm10: 45.8,
      co: 8.5,
      no2: 42.1,
      so2: 12.3,
      o3: 78.9,
    },
    aqi: 95,
    category: "sedang",
    timestamp: new Date().toISOString(),
  },
  {
    stationId: "aq-002",
    location: {
      name: "Bandung",
      coordinates: [-6.9175, 107.6191],
    },
    measurements: {
      pm25: 28.1,
      pm10: 38.4,
      co: 6.2,
      no2: 35.7,
      so2: 8.9,
      o3: 65.3,
    },
    aqi: 78,
    category: "baik",
    timestamp: new Date().toISOString(),
  },
];

export async function getAirQualityData(
  params: AirQualityQueryParams,
): Promise<AirQualityResponse> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 150));

  let filteredData = MOCK_AIR_QUALITY;

  // Apply filters
  if (params.province) {
    filteredData = filteredData.filter((aq) =>
      aq.location.name.toLowerCase().includes(params.province!.toLowerCase()),
    );
  }

  if (params.city) {
    filteredData = filteredData.filter((aq) =>
      aq.location.name.toLowerCase().includes(params.city!.toLowerCase()),
    );
  }

  if (params.stationId) {
    filteredData = filteredData.filter(
      (aq) => aq.stationId === params.stationId,
    );
  }

  return {
    data: filteredData,
    lastUpdated: new Date().toISOString(),
  };
}

// Fetch forest fire data
export async function getForestFireData() {
  // Placeholder for forest fire data fetching
  return {
    data: [],
    lastUpdated: new Date().toISOString(),
  };
}

// Fetch climate data
export async function getClimateData() {
  // Placeholder for climate data fetching
  return {
    data: [],
    lastUpdated: new Date().toISOString(),
  };
}
