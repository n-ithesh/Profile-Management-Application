# Profile Management Application

A modern, full-stack web application for managing and displaying user profiles with a beautiful, responsive UI. Built with Next.js frontend and Express.js backend with MongoDB database.

## 🚀 Features

- **Profile Management**: view, and manage user profiles
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Beautiful, clean interface with Tailwind CSS
- **Profile Details**: Comprehensive profile pages with visual elements
- **Visual Resume**: Support for visual resume display
- **Case Studies**: Showcase projects and case studies
- **Contact Integration**: Built-in contact and social media links

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.5.3** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4.1.13** - Styling framework
- **Axios** - HTTP client
- **React Icons** - Icon library

### Backend
- **Express.js 4.19.2** - Web framework
- **MongoDB** - Database with Mongoose ODM
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
Profile Management Application/
├── client/                 # Next.js frontend application
│   ├── app/               # App Router pages
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page (profile grid)
│   │   └── profile/       # Profile detail pages
│   │       └── [id]/      # Dynamic profile routes
│   ├── components/        # React components
│   │   └── Header.tsx     # Header component
│   ├── public/           # Static assets
│   │   └── Assets/       # Images and icons
│   └── package.json      # Frontend dependencies
├── server/               # Express.js backend
│   ├── controller/       # Route controllers
│   │   └── post.controller.js
│   ├── model/           # Database models
│   │   └── post.model.js
│   ├── router/          # API routes
│   │   └── post.route.js
│   ├── db/              # Database connection
│   │   └── connection1.db.js
│   ├── server.js        # Main server file
│   ├── seed.js          # Database seeding
│   └── package.json     # Backend dependencies
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Profile Management Application"
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the server directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/profile-management
   PORT=8000
   ```

5. **Start the backend server**
   ```bash
   cd server
   npm run dev
   ```
   The server will run on `http://localhost:8000`

6. **Start the frontend development server**
   ```bash
   cd client
   npm run dev
   ```
   The frontend will run on `http://localhost:3000`

## 📊 Database Schema

### Profile Model
```javascript
{
  name: String (required),
  gender: String (required, enum: ["Male", "Female", "Other"]),
  age: Number (required, min: 0),
  pronouns: String (required),
  bio: String (required),
  createdAt: Date,
  updatedAt: Date
}
```

## 🔌 API Endpoints

### Base URL: `http://localhost:8000/api/v1`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/getallpost` | Get all profiles |
| GET | `/getsinglepost?postID={id}` | Get single profile by ID |
| GET | `/` | Health check endpoint |

## 🎨 UI Components

### Home Page (`/`)
- Responsive profile grid layout
- Profile cards with avatar, name, and basic info
- Download resume button (placeholder)
- Gender, age, and pronouns display

### Profile Detail Page (`/profile/[id]`)
- Full profile information display
- Visual resume section
- Case studies showcase
- Contact information
- Social media links
- Professional journey tabs

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints for sm, md, lg screens
- Flexible grid layouts
- Touch-friendly interface

### Visual Elements
- Custom avatar system
- Background images and gradients
- Icon integration with React Icons
- Smooth transitions and hover effects

### Profile Management
- Dynamic profile loading
- Error handling for missing profiles
- Loading states
- Navigation between profiles

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `.next`
4. Deploy

### Backend (Railway/Heroku)
1. Create a new project
2. Connect your GitHub repository
3. Set environment variables
4. Deploy

### Database (MongoDB Atlas)
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get connection string
4. Update environment variables

## 🛠️ Development

### Available Scripts

#### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

#### Backend
```bash
npm start        # Start production server
npm run dev      # Start development server with nodemon
npm run seed     # Seed database with sample data
```



**Happy Coding! 🚀**
