import { NextRequest, NextResponse } from "next/server";
import { getAirQualityData } from "@/lib/data/environment";
import type { DataResponse, AirQualityData } from "@/lib/types/data";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const province = searchParams.get("province");
    const city = searchParams.get("city");
    const stationId = searchParams.get("station_id");
    const hours = parseInt(searchParams.get("hours") || "24"); // Last N hours

    // Fetch air quality data from KLHK sources
    const airQualityData = await getAirQualityData({
      province,
      city,
      stationId,
      hours,
    });

    const response: DataResponse<AirQualityData[]> = {
      data: airQualityData.data,
      metadata: {
        source: "klhk",
        sourceType: "government",
        lastUpdated: airQualityData.lastUpdated,
        nextUpdate: new Date(Date.now() + 3600000).toISOString(), // Next hour
        reliability: "high",
        cached: false, // Real-time data
      },
    };

    return NextResponse.json(response, {
      headers: {
        "Cache-Control": "public, max-age=600", // 10 minutes
        "X-RateLimit-Limit": "200",
        "X-RateLimit-Remaining": "199",
        "X-Data-Source": "klhk",
        "X-Update-Frequency": "hourly",
        "X-Real-Time": "true",
      },
    });
  } catch (error) {
    console.error("Error fetching air quality data:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch air quality data",
        message: "External API temporarily unavailable",
        timestamp: new Date().toISOString(),
        retryAfter: 300, // 5 minutes
      },
      {
        status: 502,
        headers: {
          "X-Error-Type": "external_api_error",
          "Retry-After": "300",
        },
      },
    );
  }
}
