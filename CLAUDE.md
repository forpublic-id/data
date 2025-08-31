# CLAUDE.md - Data ForPublic.id

This file provides guidance to Claude Code when working with Data ForPublic.id, Indonesia's Open Data Infrastructure and API Gateway.

## Project Overview

Data ForPublic.id adalah **centralized open data infrastructure** dan **API gateway** untuk ecosystem ForPublic.id. Platform ini menyediakan akses terpadu ke Indonesian government datasets yang belum tercakup di aplikasi lain, dengan fokus pada transparansi dan akuntabilitas publik.

### Core Mission
- **Centralized API Gateway** untuk semua government datasets Indonesia
- **Unified Access Point** dengan standardized API responses
- **Real-time Data Aggregation** dari multiple ministry sources  
- **Developer-friendly** infrastructure untuk researchers, journalists, developers
- **Data Quality Assurance** dengan automated validation

## Development Commands

**Package Manager: Bun** (optimized untuk performance)

- `bun install` - Install dependencies
- `bun run dev` - Start development server dengan Bun runtime (recommended)
- `bun run dev:turbo` - Development dengan Turbopack untuk faster builds
- `bun run dev:node` - Fallback ke Node.js runtime
- `bun run build` - Production build (Vercel compatible)
- `bun run start` - Start production server
- `bun run lint` - ESLint code quality checks
- `bun run typecheck` - TypeScript validation
- `bun run format` - Format code dengan Prettier
- `bun run api:test` - Test API endpoints

## Architecture & Tech Stack

### Core Framework
- **Next.js 15** dengan App Router architecture untuk API routes dan web interface
- **React 19** untuk modern UI components
- **TypeScript** untuk comprehensive type safety di API responses
- **next-intl** untuk internationalization (Indonesian/English)

### API Infrastructure
- **RESTful API Design** dengan consistent response format
- **Rate Limiting** per endpoint berdasarkan data source capabilities
- **Caching Strategy** - smart caching per data type (real-time vs static)
- **Authentication Layer** untuk protected government APIs
- **Error Handling** dengan proper HTTP status codes dan retry mechanisms

### Data Sources Integration
- **External API Clients** untuk government ministry APIs
- **Data Validation** menggunakan Zod schemas
- **Response Normalization** untuk consistent format across sources
- **Monitoring & Health Checks** untuk semua external dependencies

### Styling & UI
- **Tailwind CSS v4** dengan custom data-themed colors
- **shadcn/ui** component library untuk admin dashboard
- **Custom API Documentation** interface
- **Responsive Design** untuk mobile dan desktop access

## Project Structure

```
data/
├── app/                           # Next.js App Router
│   ├── [locale]/                  # Internationalized routes (id/en)
│   │   ├── docs/                  # API documentation pages
│   │   ├── status/                # API status dashboard
│   │   ├── datasets/              # Dataset explorer
│   │   ├── playground/            # API testing playground
│   │   └── about/                 # Platform information
│   ├── api/                       # API routes
│   │   └── v1/                    # Current API version
│   │       ├── health/            # Health data endpoints
│   │       │   ├── hospitals/     # Hospital data API
│   │       │   ├── diseases/      # Disease surveillance API
│   │       │   └── vaccination/   # Vaccination data API
│   │       ├── environment/       # Environment data endpoints
│   │       │   ├── air-quality/   # Air quality monitoring API
│   │       │   ├── forest-fires/  # Forest fire tracking API
│   │       │   └── climate/       # Climate data API
│   │       ├── emergency/         # Emergency data endpoints
│   │       │   ├── disasters/     # Disaster monitoring API
│   │       │   ├── weather/       # Weather warnings API
│   │       │   └── earthquakes/   # Earthquake data API
│   │       ├── transparency/      # Transparency data endpoints
│   │       │   ├── assets/        # Asset declarations API
│   │       │   ├── procurement/   # Procurement data API
│   │       │   └── court/         # Court decisions API
│   │       ├── statistics/        # BPS statistics endpoints
│   │       └── meta/              # Metadata endpoints
│   │           ├── sources/       # Data sources info
│   │           └── status/        # API status endpoint
│   ├── globals.css                # Global styles dengan data theme
│   └── layout.tsx                 # Root layout dengan metadata
├── components/                    # React components
│   ├── ui/                        # Base UI components (shadcn/ui)
│   ├── api/                       # API-specific components
│   │   ├── EndpointCard.tsx       # API endpoint display
│   │   ├── ResponsePreview.tsx    # API response preview
│   │   ├── StatusIndicator.tsx    # Real-time status display
│   │   └── PlaygroundInterface.tsx # API testing interface
│   ├── data/                      # Data visualization components
│   │   ├── DataSourceCard.tsx     # Data source display
│   │   ├── QualityIndicator.tsx   # Data quality metrics
│   │   ├── UpdateFrequency.tsx    # Update frequency display
│   │   └── MetricsChart.tsx       # API usage metrics
│   ├── layout/                    # Layout components
│   │   ├── Header.tsx             # Navigation dengan API status
│   │   ├── Footer.tsx             # Footer dengan ecosystem links
│   │   └── PageLayout.tsx         # Common page wrapper
│   ├── sections/                  # Page sections
│   │   ├── Hero.tsx               # Homepage hero
│   │   ├── DataSources.tsx        # Available data sources
│   │   ├── APIOverview.tsx        # API overview section
│   │   └── Statistics.tsx         # Platform statistics
│   └── common/                    # Reusable components
├── lib/                          # Utilities dan configuration
│   ├── types/                    # TypeScript definitions
│   │   └── data.ts               # Comprehensive data types
│   ├── data/                     # Data management
│   │   ├── sources.ts            # Data sources configuration
│   │   ├── health.ts             # Health data utilities
│   │   ├── environment.ts        # Environment data utilities
│   │   ├── emergency.ts          # Emergency data utilities
│   │   └── transparency.ts       # Transparency data utilities
│   ├── api/                      # API utilities
│   │   ├── client.ts             # External API clients
│   │   ├── cache.ts              # Caching strategies
│   │   ├── validation.ts         # Zod schemas untuk validation
│   │   └── rate-limit.ts         # Rate limiting utilities
│   ├── constants/                # Design system constants
│   ├── hooks/                    # Custom React hooks
│   └── utils.ts                  # Utility functions
├── i18n/                         # Internationalization
│   ├── messages/                 # Translation files
│   │   ├── id.json               # Indonesian translations
│   │   └── en.json               # English translations
│   └── request.ts                # i18n configuration
└── middleware.ts                 # next-intl routing middleware
```

## Data Sources & APIs

### Government Ministry APIs
- **Kemkes**: Hospital data, disease surveillance, vaccination
- **KLHK**: Forest fires, air quality, environmental monitoring
- **BMKG**: Weather, climate, earthquake, tsunami warnings
- **BNPB**: Disaster monitoring, emergency response
- **BPS**: Comprehensive statistics untuk 549 domains
- **KPK**: Asset declarations, corruption case tracking
- **LKPP**: Government procurement transparency
- **Kemsos**: Poverty mapping, social assistance data

### API Features
- **Standardized Response Format**: Consistent structure across all endpoints
- **Rate Limiting**: Different limits per data source
- **Authentication**: API key management untuk protected endpoints
- **Caching**: Smart caching strategy based on update frequency
- **Real-time Data**: Live updates untuk emergency dan weather data
- **Data Quality**: Automated validation dan monitoring

## Core Components

### API Endpoint Handler Pattern
```typescript
export async function GET(request: NextRequest) {
  try {
    // Parse query parameters
    const params = parseRequestParams(request);
    
    // Fetch data from government source
    const data = await fetchExternalData(params);
    
    // Standardize response format
    const response: DataResponse<T> = {
      data: data.results,
      metadata: {
        source: 'kemkes',
        sourceType: 'government',
        lastUpdated: data.lastUpdated,
        reliability: 'high',
        cached: false,
      },
    };
    
    return NextResponse.json(response, {
      headers: standardAPIHeaders,
    });
  } catch (error) {
    return handleAPIError(error);
  }
}
```

### Data Source Configuration
```typescript
const DATA_SOURCE: DataSource = {
  id: 'kemkes',
  name: { id: 'Kementerian Kesehatan', en: 'Ministry of Health' },
  apiUrl: 'https://layanandata.kemkes.go.id/api',
  reliability: 'high',
  updateFrequency: 'daily',
  rateLimits: { requests: 1000, period: '1h' },
  authentication: { required: true, type: 'api_key' },
};
```

## Development Guidelines

### API Development
- **Consistent Response Format**: Gunakan `DataResponse<T>` interface untuk semua endpoints
- **Error Handling**: Proper HTTP status codes dengan informative error messages
- **Rate Limiting**: Implement rate limiting sesuai dengan source API capabilities
- **Documentation**: Update API docs untuk setiap new endpoint
- **Testing**: Write integration tests untuk external API interactions

### Component Development
- **TypeScript**: Comprehensive type safety untuk all data structures
- **Accessibility**: WCAG 2.1 AA compliance untuk all interactive components
- **Performance**: Optimize untuk large datasets dan real-time updates
- **Internationalization**: Complete translations untuk Indonesian dan English

### Data Management
- **Source Integration**: Follow patterns dari existing data source integrations
- **Validation**: Use Zod schemas untuk API request/response validation
- **Caching**: Implement appropriate caching based pada data update frequency
- **Monitoring**: Add health checks untuk all external dependencies

## Ecosystem Integration

### ForPublic.id Consistency
- **Shared Design System**: Consistent dengan existing ForPublic.id applications
- **Navigation Patterns**: Similar header/footer structure dengan ecosystem links
- **Brand Identity**: ForPublic.id ecosystem branding maintained
- **Cross-Application APIs**: Other ForPublic apps dapat consume dari data.forpublic.id

### API Gateway Features
- **Unified Authentication**: Single API key untuk access ke multiple data sources
- **Cross-Origin Support**: CORS configuration untuk ForPublic.id subdomain access
- **Usage Analytics**: Track API usage across ecosystem applications
- **SDK Generation**: Auto-generated SDKs untuk popular programming languages

## Future Development Priorities

### Phase 1: Core Infrastructure (Current)
- ✅ Project structure dan basic API endpoints
- ✅ Data source integration architecture
- ✅ Basic health dan environment APIs
- ✅ Documentation platform setup

### Phase 2: Data Source Expansion
- BPS statistics API integration
- KPK transparency data integration
- LKPP procurement API integration
- Court decisions database API
- Regional government data sources

### Phase 3: Advanced Features
- GraphQL endpoint untuk complex queries
- Real-time WebSocket connections untuk emergency data
- SDK generation untuk JavaScript, Python, Go
- Data quality dashboard dan monitoring
- Usage analytics dan developer portal

### Phase 4: Ecosystem Enhancement
- Cross-application data sharing
- Unified search across all ForPublic.id datasets
- Embeddable widgets untuk media usage
- API marketplace untuk third-party developers

## Deployment Configuration

### Vercel Deployment
- **Domain**: data.forpublic.id
- **Framework**: Next.js 15 dengan API routes
- **Runtime**: Node.js 18+ (Bun compatibility)
- **Regions**: Singapore (sin1) untuk optimal Indonesia performance

### Environment Variables
```bash
# External API Keys
KEMKES_API_KEY=              # Ministry of Health API
BPS_API_KEY=                 # Statistics Indonesia API
KLHK_API_KEY=                # Environment Ministry API
BMKG_API_KEY=                # Weather Agency API

# Database & Cache
DATABASE_URL=                # PostgreSQL untuk API logs (optional)
REDIS_URL=                   # Redis untuk caching

# Monitoring
NEXT_PUBLIC_GA_ID=           # Google Analytics
SENTRY_DSN=                  # Error tracking (optional)

# Platform
NEXT_PUBLIC_API_URL=https://data.forpublic.id/api/v1
NEXT_PUBLIC_DOCS_URL=https://data.forpublic.id/docs
```

This platform serves as the **backbone infrastructure** untuk Indonesian open data ecosystem, enabling developers, researchers, dan journalists to access comprehensive government data melalui modern, reliable APIs.