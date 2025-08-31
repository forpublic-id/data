// Core data types for data.forpublic.id

export interface DataSource {
  id: string;
  name: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  url: string;
  apiUrl?: string;
  type: 'government' | 'ministry' | 'regional' | 'statistical' | 'emergency';
  category: DataCategory;
  reliability: 'high' | 'medium' | 'low';
  updateFrequency: 'realtime' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'annually';
  lastUpdated: string;
  status: 'online' | 'offline' | 'maintenance';
  rateLimits?: {
    requests: number;
    period: string; // '1h', '1d', etc.
  };
  authentication?: {
    required: boolean;
    type?: 'api_key' | 'oauth' | 'basic';
  };
}

export type DataCategory = 
  | 'health'
  | 'environment' 
  | 'transparency'
  | 'statistics'
  | 'emergency'
  | 'governance'
  | 'social'
  | 'economic'
  | 'education'
  | 'transportation'
  | 'energy'
  | 'agriculture';

export interface APIEndpoint {
  path: string;
  method: 'GET' | 'POST';
  description: {
    id: string;
    en: string;
  };
  parameters?: APIParameter[];
  responses: APIResponse[];
  rateLimits: {
    requests: number;
    period: string;
  };
  authentication: boolean;
  sources: string[]; // DataSource IDs
  cacheTime: number; // seconds
  realTime: boolean;
}

export interface APIParameter {
  name: string;
  type: 'string' | 'number' | 'boolean' | 'array';
  required: boolean;
  description: {
    id: string;
    en: string;
  };
  example?: string;
  enum?: string[];
}

export interface APIResponse {
  status: number;
  description: string;
  schema: object;
  example?: object;
}

// Unified API response format
export interface DataResponse<T = any> {
  data: T;
  metadata: {
    source: string;
    sourceType: DataSource['type'];
    lastUpdated: string;
    nextUpdate?: string;
    reliability: DataSource['reliability'];
    cached: boolean;
    cacheExpiry?: string;
  };
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  links?: {
    self: string;
    first?: string;
    prev?: string;
    next?: string;
    last?: string;
  };
}

// Health data types
export interface HealthData {
  hospitals: Hospital[];
  diseases: DiseaseData[];
  vaccination: VaccinationData[];
}

export interface Hospital {
  id: string;
  name: string;
  type: 'rs_pemerintah' | 'rs_swasta' | 'puskesmas' | 'klinik';
  province: string;
  city: string;
  capacity: {
    beds: number;
    icu: number;
    available: number;
  };
  specialties: string[];
  contact: {
    phone: string;
    website?: string;
  };
}

// Environment data types
export interface EnvironmentData {
  airQuality: AirQualityData[];
  forestFires: ForestFireData[];
  climateIndicators: ClimateData[];
}

export interface AirQualityData {
  stationId: string;
  location: {
    name: string;
    coordinates: [number, number];
  };
  measurements: {
    pm25: number;
    pm10: number;
    co: number;
    no2: number;
    so2: number;
    o3: number;
  };
  aqi: number;
  category: 'baik' | 'sedang' | 'tidak_sehat' | 'sangat_tidak_sehat' | 'berbahaya';
  timestamp: string;
}

// Emergency data types
export interface EmergencyData {
  disasters: DisasterData[];
  weatherWarnings: WeatherWarning[];
  earthquakes: EarthquakeData[];
}

export interface DisasterData {
  id: string;
  type: 'flood' | 'earthquake' | 'volcano' | 'landslide' | 'tsunami' | 'drought' | 'wildfire';
  location: {
    province: string;
    regency: string;
    coordinates: [number, number];
  };
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  affectedPopulation: number;
  damages: {
    casualties: number;
    infrastructure: string[];
    economicLoss?: number;
  };
  status: 'active' | 'monitoring' | 'resolved';
  reportedAt: string;
  lastUpdated: string;
}

// Transparency data types
export interface TransparencyData {
  procurements: ProcurementData[];
  assetDeclarations: AssetDeclaration[];
  courtDecisions: CourtDecision[];
}

export interface ProcurementData {
  id: string;
  title: string;
  agency: string;
  value: number;
  method: 'tender_terbuka' | 'tender_terbatas' | 'penunjukan_langsung';
  status: 'planning' | 'tender' | 'evaluation' | 'award' | 'contract' | 'completed';
  timeline: {
    announcement: string;
    bidding: string;
    evaluation: string;
    award: string;
  };
  winner?: {
    company: string;
    value: number;
    score: number;
  };
}

// Statistics data types
export interface StatisticsData {
  demographics: DemographicsData;
  economy: EconomicIndicators;
  social: SocialIndicators;
}

// API Status and monitoring
export interface APIStatus {
  endpoint: string;
  status: 'operational' | 'degraded' | 'partial' | 'major_outage';
  responseTime: number; // ms
  uptime: number; // percentage
  lastCheck: string;
  issues?: string[];
}

export interface DataQuality {
  sourceId: string;
  completeness: number; // percentage
  accuracy: number; // percentage
  freshness: number; // hours since last update
  consistency: number; // percentage
  issues: string[];
  lastValidated: string;
}