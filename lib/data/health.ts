import type { Hospital } from '@/lib/types/data';

interface HospitalQueryParams {
  province?: string | null;
  city?: string | null;
  type?: Hospital['type'] | null;
  page: number;
  limit: number;
}

interface HospitalResponse {
  data: Hospital[];
  total: number;
  lastUpdated: string;
}

// Mock hospital data for development
const MOCK_HOSPITALS: Hospital[] = [
  {
    id: 'rs-001',
    name: 'RSUP Dr. Cipto Mangunkusumo',
    type: 'rs_pemerintah',
    province: 'DKI Jakarta',
    city: 'Jakarta Pusat',
    capacity: {
      beds: 1200,
      icu: 80,
      available: 150,
    },
    specialties: ['Bedah', 'Jantung', 'Onkologi', 'Neurologi'],
    contact: {
      phone: '021-3906900',
      website: 'https://rscm.co.id',
    },
  },
  {
    id: 'rs-002',
    name: 'RS Persahabatan',
    type: 'rs_pemerintah',
    province: 'DKI Jakarta',
    city: 'Jakarta Timur',
    capacity: {
      beds: 800,
      icu: 40,
      available: 75,
    },
    specialties: ['Paru', 'Infeksi', 'Respirologi'],
    contact: {
      phone: '021-4891708',
    },
  },
];

export async function getHospitalData(params: HospitalQueryParams): Promise<HospitalResponse> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));

  let filteredHospitals = MOCK_HOSPITALS;

  // Apply filters
  if (params.province) {
    filteredHospitals = filteredHospitals.filter(h => 
      h.province.toLowerCase().includes(params.province!.toLowerCase())
    );
  }

  if (params.city) {
    filteredHospitals = filteredHospitals.filter(h => 
      h.city.toLowerCase().includes(params.city!.toLowerCase())
    );
  }

  if (params.type) {
    filteredHospitals = filteredHospitals.filter(h => h.type === params.type);
  }

  // Apply pagination
  const startIndex = (params.page - 1) * params.limit;
  const endIndex = startIndex + params.limit;
  const paginatedHospitals = filteredHospitals.slice(startIndex, endIndex);

  return {
    data: paginatedHospitals,
    total: filteredHospitals.length,
    lastUpdated: new Date().toISOString(),
  };
}

// Fetch vaccination data
export async function getVaccinationData() {
  // Placeholder for vaccination data fetching
  return {
    data: [],
    lastUpdated: new Date().toISOString(),
  };
}

// Fetch disease surveillance data
export async function getDiseaseData() {
  // Placeholder for disease surveillance data fetching
  return {
    data: [],
    lastUpdated: new Date().toISOString(),
  };
}