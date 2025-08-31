import type { DataSource } from '@/lib/types/data';

export const DATA_SOURCES: DataSource[] = [
  // Health Data Sources
  {
    id: 'kemkes',
    name: {
      id: 'Kementerian Kesehatan RI',
      en: 'Ministry of Health of Republic of Indonesia',
    },
    description: {
      id: 'Data kesehatan nasional termasuk rumah sakit, penyakit, dan vaksinasi',
      en: 'National health data including hospitals, diseases, and vaccination',
    },
    url: 'https://layanandata.kemkes.go.id',
    apiUrl: 'https://api.kemkes.go.id/v1',
    type: 'government',
    category: 'health',
    reliability: 'high',
    updateFrequency: 'daily',
    lastUpdated: '2025-08-31T10:00:00Z',
    status: 'online',
    rateLimits: {
      requests: 1000,
      period: '1h',
    },
    authentication: {
      required: true,
      type: 'api_key',
    },
  },
  
  // Environment Data Sources
  {
    id: 'klhk',
    name: {
      id: 'Kementerian Lingkungan Hidup dan Kehutanan',
      en: 'Ministry of Environment and Forestry',
    },
    description: {
      id: 'Data lingkungan hidup, kehutanan, dan kualitas udara',
      en: 'Environmental, forestry, and air quality data',
    },
    url: 'https://klhk.go.id',
    apiUrl: 'https://sipongi.menlhk.go.id/api',
    type: 'government',
    category: 'environment',
    reliability: 'high',
    updateFrequency: 'realtime',
    lastUpdated: '2025-08-31T11:30:00Z',
    status: 'online',
    rateLimits: {
      requests: 500,
      period: '1h',
    },
    authentication: {
      required: false,
    },
  },
  
  {
    id: 'bmkg',
    name: {
      id: 'Badan Meteorologi, Klimatologi, dan Geofisika',
      en: 'Meteorology, Climatology and Geophysics Agency',
    },
    description: {
      id: 'Data cuaca, iklim, gempa bumi, dan peringatan dini',
      en: 'Weather, climate, earthquake, and early warning data',
    },
    url: 'https://bmkg.go.id',
    apiUrl: 'https://api.bmkg.go.id/publik',
    type: 'government',
    category: 'emergency',
    reliability: 'high',
    updateFrequency: 'realtime',
    lastUpdated: '2025-08-31T12:00:00Z',
    status: 'online',
    rateLimits: {
      requests: 300,
      period: '1h',
    },
    authentication: {
      required: false,
    },
  },
  
  // Statistics Sources
  {
    id: 'bps',
    name: {
      id: 'Badan Pusat Statistik',
      en: 'Statistics Indonesia',
    },
    description: {
      id: 'Data statistik nasional komprehensif untuk 549 domain',
      en: 'Comprehensive national statistics for 549 domains',
    },
    url: 'https://bps.go.id',
    apiUrl: 'https://webapi.bps.go.id/v1',
    type: 'statistical',
    category: 'statistics',
    reliability: 'high',
    updateFrequency: 'monthly',
    lastUpdated: '2025-08-30T00:00:00Z',
    status: 'online',
    rateLimits: {
      requests: 2000,
      period: '1d',
    },
    authentication: {
      required: true,
      type: 'api_key',
    },
  },
  
  // Transparency Sources
  {
    id: 'kpk',
    name: {
      id: 'Komisi Pemberantasan Korupsi',
      en: 'Corruption Eradication Commission',
    },
    description: {
      id: 'Data transparansi harta kekayaan pejabat negara (LHKPN)',
      en: 'State officials wealth declaration transparency data',
    },
    url: 'https://elhkpn.kpk.go.id',
    type: 'government',
    category: 'transparency',
    reliability: 'high',
    updateFrequency: 'daily',
    lastUpdated: '2025-08-31T08:00:00Z',
    status: 'online',
    rateLimits: {
      requests: 100,
      period: '1h',
    },
    authentication: {
      required: false,
    },
  },
  
  {
    id: 'lkpp',
    name: {
      id: 'Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah',
      en: 'Government Procurement Policy Institute',
    },
    description: {
      id: 'Data transparansi pengadaan barang dan jasa pemerintah',
      en: 'Government procurement transparency data',
    },
    url: 'https://lkpp.go.id',
    apiUrl: 'https://spse.lkpp.go.id/api/v1',
    type: 'government',
    category: 'transparency',
    reliability: 'high',
    updateFrequency: 'daily',
    lastUpdated: '2025-08-31T09:00:00Z',
    status: 'online',
    rateLimits: {
      requests: 500,
      period: '1d',
    },
    authentication: {
      required: true,
      type: 'api_key',
    },
  },
  
  // Emergency Sources
  {
    id: 'bnpb',
    name: {
      id: 'Badan Nasional Penanggulangan Bencana',
      en: 'National Disaster Management Agency',
    },
    description: {
      id: 'Data monitoring bencana dan tanggap darurat nasional',
      en: 'National disaster monitoring and emergency response data',
    },
    url: 'https://bnpb.go.id',
    apiUrl: 'https://dibi.bnpb.go.id/api',
    type: 'government',
    category: 'emergency',
    reliability: 'high',
    updateFrequency: 'realtime',
    lastUpdated: '2025-08-31T12:15:00Z',
    status: 'online',
    rateLimits: {
      requests: 200,
      period: '1h',
    },
    authentication: {
      required: false,
    },
  },
  
  // Social Data Sources
  {
    id: 'kemsos',
    name: {
      id: 'Kementerian Sosial RI',
      en: 'Ministry of Social Affairs',
    },
    description: {
      id: 'Data kemiskinan, bantuan sosial, dan perlindungan sosial',
      en: 'Poverty, social assistance, and social protection data',
    },
    url: 'https://kemsos.go.id',
    apiUrl: 'https://siks.kemsos.go.id/api',
    type: 'government',
    category: 'social',
    reliability: 'high',
    updateFrequency: 'monthly',
    lastUpdated: '2025-08-28T00:00:00Z',
    status: 'online',
    rateLimits: {
      requests: 300,
      period: '1d',
    },
    authentication: {
      required: true,
      type: 'api_key',
    },
  },
];

export function getDataSourceById(id: string): DataSource | undefined {
  return DATA_SOURCES.find(source => source.id === id);
}

export function getDataSourcesByCategory(category: string): DataSource[] {
  return DATA_SOURCES.filter(source => source.category === category);
}

export function getOnlineDataSources(): DataSource[] {
  return DATA_SOURCES.filter(source => source.status === 'online');
}

export function getRealTimeDataSources(): DataSource[] {
  return DATA_SOURCES.filter(source => source.updateFrequency === 'realtime');
}