import { NextRequest, NextResponse } from 'next/server';
import { getHospitalData } from '@/lib/data/health';
import type { DataResponse, Hospital } from '@/lib/types/data';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const province = searchParams.get('province');
    const city = searchParams.get('city');
    const type = searchParams.get('type');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');

    // Fetch hospital data from multiple sources
    const hospitals = await getHospitalData({
      province,
      city,
      type: type as Hospital['type'],
      page,
      limit,
    });

    const response: DataResponse<Hospital[]> = {
      data: hospitals.data,
      metadata: {
        source: 'kemkes',
        sourceType: 'government',
        lastUpdated: hospitals.lastUpdated,
        reliability: 'high',
        cached: true,
        cacheExpiry: new Date(Date.now() + 300000).toISOString(), // 5 minutes
      },
      pagination: {
        page,
        limit,
        total: hospitals.total,
        totalPages: Math.ceil(hospitals.total / limit),
      },
      links: {
        self: `/api/v1/health/hospitals?page=${page}&limit=${limit}`,
        first: `/api/v1/health/hospitals?page=1&limit=${limit}`,
        prev: page > 1 ? `/api/v1/health/hospitals?page=${page - 1}&limit=${limit}` : undefined,
        next: page < Math.ceil(hospitals.total / limit) ? `/api/v1/health/hospitals?page=${page + 1}&limit=${limit}` : undefined,
        last: `/api/v1/health/hospitals?page=${Math.ceil(hospitals.total / limit)}&limit=${limit}`,
      },
    };

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, max-age=300', // 5 minutes
        'X-RateLimit-Limit': '100',
        'X-RateLimit-Remaining': '99',
        'X-Data-Source': 'kemkes',
        'X-Update-Frequency': 'daily',
      },
    });
  } catch (error) {
    console.error('Error fetching hospital data:', error);
    
    return NextResponse.json(
      {
        error: 'Failed to fetch hospital data',
        message: 'Internal server error',
        timestamp: new Date().toISOString(),
      },
      { 
        status: 500,
        headers: {
          'X-Error-Type': 'internal_server_error',
        },
      }
    );
  }
}