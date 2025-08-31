# Data ForPublic.id

<div align="center">
  <img src="public/logo.svg" alt="Data ForPublic.id Logo" width="80" height="80">
  
  # Data ForPublic.id
  
  **Indonesia's Open Data Infrastructure & API Gateway**
  
  <div style="background: #dc2626; color: white; padding: 8px 16px; border-radius: 8px; display: inline-block; margin: 10px 0; font-weight: 600;">
    <span style="color: white;">ForPublic</span><span style="color: white;">.id</span>
  </div>
  
  🌐 **[API Documentation →](https://data.forpublic.id/docs)**  
  📊 **[Live Status →](https://data.forpublic.id/status)**
</div>

## 🎯 About

Data ForPublic.id adalah **centralized open data infrastructure** dan **API gateway** untuk ecosystem ForPublic.id. Platform ini menyediakan akses terpadu ke government datasets Indonesia yang belum tercakup di aplikasi lain, dengan fokus pada transparansi dan akuntabilitas publik.

## 🏗️ Architecture

### Core Value Proposition
- **Centralized API Gateway** untuk semua government datasets Indonesia
- **Unified Access Point** dengan standardized API responses  
- **Real-time Data Aggregation** dari multiple ministry sources
- **Developer-friendly** documentation dan SDKs
- **Data Quality Assurance** dengan automated validation

### Target Datasets (UNIQUE - tidak duplikasi existing apps)

#### 🏥 Health Data (Kemkes)
- Hospital capacity & availability
- Disease surveillance data
- Vaccination coverage statistics
- Healthcare facility registrations

#### 🌍 Environment Data (KLHK + BMKG)
- Real-time forest fire hotspots
- Air quality monitoring
- Weather forecasts & warnings
- Climate change indicators

#### 🔍 Transparency Data (KPK + LKPP)
- State officials asset declarations (LHKPN)
- Government procurement transparency
- Court decisions database
- Anti-corruption case tracking

#### 📊 Statistics Data (BPS)
- Tourism statistics & visitor arrivals
- Trade data (export-import)
- Crime statistics by jurisdiction
- Social protection indicators

#### 🚨 Emergency Data (BNPB + BMKG)
- Real-time disaster monitoring
- Earthquake & tsunami alerts
- Emergency response coordination
- Damage assessment data

## ✨ Key Features

- **🌐 Unified API Gateway**: Single access point for 15+ government data sources
- **⚡ Real-time Updates**: Live data dari BMKG, BNPB, KLHK untuk emergency response
- **🔒 Secure & Reliable**: High-availability infrastructure dengan rate limiting
- **📖 Complete Documentation**: Interactive API docs dengan examples
- **🌍 Bilingual Platform**: Full Indonesian/English support
- **📊 Data Quality Monitoring**: Automated validation dan quality assurance
- **🔌 Easy Integration**: RESTful APIs dengan consistent response format
- **💾 Smart Caching**: Optimal caching strategy per data source

## 🛠️ Built With

- **Next.js 15** - React framework dengan App Router
- **React 19** - Latest React dengan server components
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Modern styling dengan design tokens
- **shadcn/ui** - Component library
- **next-intl** - Internationalization
- **Bun** - Fast runtime dan package manager
- **Zod** - API validation dan type safety

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh) installed on your machine

### Installation

1. **Clone repository**:
   ```bash
   git clone https://github.com/forpublic-id/data.git
   cd data
   ```

2. **Install dependencies**:
   ```bash
   bun install
   ```

3. **Start development server**:
   ```bash
   bun run dev
   ```

4. **Open browser**: Visit [http://localhost:3000](http://localhost:3000)

### API Usage Example

```bash
# Get hospital data
curl "https://data.forpublic.id/api/v1/health/hospitals?province=DKI"

# Get real-time air quality
curl "https://data.forpublic.id/api/v1/environment/air-quality"

# Get disaster monitoring
curl "https://data.forpublic.id/api/v1/emergency/disasters"

# Get procurement transparency
curl "https://data.forpublic.id/api/v1/transparency/procurement"
```

## 📊 API Endpoints

### Health APIs
- `GET /api/v1/health/hospitals` - Hospital directory & capacity
- `GET /api/v1/health/diseases` - Disease surveillance data
- `GET /api/v1/health/vaccination` - Vaccination coverage

### Environment APIs  
- `GET /api/v1/environment/air-quality` - Air quality monitoring
- `GET /api/v1/environment/forest-fires` - Real-time fire hotspots
- `GET /api/v1/environment/climate` - Climate indicators

### Emergency APIs
- `GET /api/v1/emergency/disasters` - Disaster monitoring
- `GET /api/v1/emergency/weather` - Weather warnings
- `GET /api/v1/emergency/earthquakes` - Earthquake data

### Transparency APIs
- `GET /api/v1/transparency/assets` - Officials asset declarations
- `GET /api/v1/transparency/procurement` - Government procurement
- `GET /api/v1/transparency/court` - Court decisions

## 🔧 Available Scripts

| Command                | Description                               |
| ---------------------- | ----------------------------------------- |
| `bun run dev`          | Start development server (localhost:3000) |
| `bun run build`        | Build untuk production                    |
| `bun run start`        | Start production server                   |
| `bun run lint`         | Run ESLint checks                         |
| `bun run typecheck`    | TypeScript validation                     |
| `bun run format`       | Format code menggunakan Prettier         |

## 🌐 ForPublic.id Ecosystem

Data ForPublic.id melengkapi existing applications:

- **[ForPublic.id](https://forpublic.id)** - Main platform & directory
- **[Salary](https://salary.forpublic.id)** - PNS & officials salary data  
- **[Budget](https://budget.forpublic.id)** - APBN/APBD transparency
- **[Planning](https://plan.forpublic.id)** - Spatial planning & RTRW
- **[Holiday](https://holiday.forpublic.id)** - Indonesian holidays

## 🤝 Contributing

Kontribusi dari komunitas sangat welcome! Cara berkontribusi:

1. **Fork Repository**: Klik tombol fork di GitHub
2. **Create Feature Branch**: `git checkout -b feature/amazing-feature`
3. **Make Changes**: Ikuti coding standards dan guidelines
4. **Test Changes**: Pastikan semua berfungsi dengan baik
5. **Submit Pull Request**: Jelaskan perubahan dan dampaknya

### API Development Guidelines

- Follow existing response format patterns
- Add comprehensive TypeScript types
- Include rate limiting untuk external APIs
- Write tests untuk new endpoints
- Update documentation untuk API changes

## 📄 License

Project ini open source dan didedikasikan untuk public good dan community empowerment.

## 🚀 About

**Data ForPublic.id** adalah bagian dari misi ForPublic.id untuk menciptakan solusi digital yang memberdayakan masyarakat Indonesia melalui teknologi yang dapat diakses. Kami berkomitmen menjembatani kesenjangan antara warga negara dan layanan publik melalui transparansi, inovasi, dan desain yang berpusat pada pengguna.

### Contact

- **Website**: [forpublic.id](https://forpublic.id)
- **API Status**: [data.forpublic.id/status](https://data.forpublic.id/status)
- **Documentation**: [data.forpublic.id/docs](https://data.forpublic.id/docs)
- **GitHub**: [@forpublic-id](https://github.com/forpublic-id)
- **Email**: forpublic.indonesia@gmail.com

---

<div align="center">
  <strong>Made with ❤️ for Indonesian transparency</strong><br>
  🚀 Powered by modern API infrastructure
</div>