# YOURHOME - Modern Premium Real Estate Platform

## Project Overview

YOURHOME is a cutting-edge real estate platform designed for the Nigerian market. It enables users to buy, rent, and invest in properties across Nigeria with confidence through verified agents and secure transactions.

## Features

### For Users
- 🏠 **Property Search & Browse** - Advanced filtering by state, city, price, bedrooms, etc.
- 💰 **Buy & Rent** - Comprehensive listings for both sale and rental properties
- 💼 **Investment Opportunities** - Explore residential, commercial, and land banking investments
- ❤️ **Favorites & Comparison** - Save properties and compare up to 4 listings
- 🗺️ **Interactive Map** - View properties on Nigeria map
- 📱 **Mobile-First** - Fully responsive design
- 🤝 **Agent Connection** - Connect with verified agents via WhatsApp or chat

### For Property Owners
- 📋 **List Properties** - Simple form to list properties for sale or rent
- ✅ **Verification Process** - YOURHOME verifies ownership before approval
- 📊 **Property Management** - Track inquiries and schedule inspections
- 📈 **Visibility** - Get exposure to thousands of potential buyers/renters

### For Real Estate Agents
- 👥 **Lead Management** - Receive and manage qualified leads
- 📅 **Client Scheduling** - Schedule property inspections
- 💬 **Communication Tools** - Chat with admin and clients
- 📊 **Performance Tracking** - View ratings and client interactions

### For Admins
- 🔐 **Complete Dashboard** - Manage all platform operations
- 📝 **Property Verification** - Review and approve property listings
- 👤 **User Management** - Manage users, agents, and admins
- 💳 **Payment Processing** - Integrate with Paystack & Flutterwave
- 📧 **Notifications** - Via Email, SMS, WhatsApp, and In-app

## Tech Stack

### Frontend
- **Next.js 14** - React framework for production
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Premium animations
- **Zustand** - State management
- **React Hook Form** - Form management

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **PostgreSQL** - Database
- **JWT** - Authentication
- **NextAuth.js** - Modern authentication

### External Services
- **Cloudinary** - Image storage and optimization
- **Mapbox** - Interactive maps
- **Paystack** - Payment processing
- **Flutterwave** - Payment processing
- **SendGrid** - Email service
- **Termii** - SMS service
- **WhatsApp Business API** - WhatsApp integration

## Project Structure

```
yourhomes-realestate/
├── src/
│   ├── app/                  # Next.js app directory
│   ├── components/           # Reusable React components
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Navigation/
│   │   ├── PropertyCard/
│   │   ├── Forms/
│   │   └── ...
│   ├── pages/               # API routes and legacy pages
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   ├── properties/
│   │   │   ├── agents/
│   │   │   ├── leads/
│   │   │   ├── payments/
│   │   │   └── ...
│   ├── hooks/               # Custom React hooks
│   ├── services/            # API service functions
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   └── styles/              # Global styles
├── public/                  # Static assets
├── .env.example             # Environment variables template
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Color Palette

- **Primary**: Deep Navy Blue (#0F172A)
- **Secondary**: Gold (#D4AF37)
- **Accent**: Emerald Green (#10B981)
- **White**: #FFFFFF
- **Dark**: #1F2937
- **Light**: #F3F4F6

## Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn
- PostgreSQL database
- Cloudinary account
- Mapbox account
- Paystack account
- Flutterwave account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Awwalshema6/yourhomes-realestate.git
   cd yourhomes-realestate
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your actual values
   ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open browser**
   Navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Branches

- `main` - Production-ready code
- `develop` - Development branch
- `feature/frontend-setup` - Frontend setup and components
- `feature/backend-setup` - Backend API setup
- `feature/database-schema` - Database schemas and migrations

## Contributing

1. Create a feature branch from `develop`
2. Make your changes
3. Commit with descriptive messages
4. Push to your branch
5. Create a Pull Request

## Environment Variables

See `.env.example` for all required environment variables.

## Database

PostgreSQL is used for data storage. Run migrations after setting up the database:

```bash
npm run db:migrate
```

## Deployment

### Frontend (Vercel)
```bash
vercel deploy
```

### Backend (AWS/Heroku)
See deployment documentation in `docs/deployment.md`

## SEO

Optimized for keywords:
- Houses for Rent in Nigeria
- Houses for Sale in Nigeria
- Real Estate Investment Nigeria
- Property Management Nigeria
- Buy Land in Nigeria

## License

MIT License - See LICENSE file for details

## Support

For support, email support@yourhome.com or visit our website.

## Roadmap

- [ ] Phase 1: Core platform setup
- [ ] Phase 2: Property management features
- [ ] Phase 3: Payment integration
- [ ] Phase 4: AI recommendations
- [ ] Phase 5: Mobile app
- [ ] Phase 6: Advanced analytics

---

**Created with ❤️ for the Nigerian Real Estate Community**
