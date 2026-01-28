Modern Full-Stack Kanban Board

I built a clean, fast Kanban-style task management app using Next.js 16 (App Router), React 19, and PostgreSQL.

Main features I focused on:

Drag & drop cards between columns
Priority levels with color-coded tags
Real-time status tracking & workflow visualization
Secure authentication via NextAuth.js (credentials provider, super easy to add OAuth later)
Full dark mode support (system + manual toggle)
Completely responsive — looks great on phone, tablet, and desktop
Simple, modern UI that stays out of your way

Great for personal projects, small team boards, freelance client tracking, or just keeping life organized.
Quick Start

Bash# 1. Go to the project folder
cd my-kanban-app

# 2. Install dependencies

npm install

# 3. Create or check .env.local (already included in the repo)

# It should look something like this:
DATABASE_URL="prisma+postgres://localhost:51213/?api_key=your-encoded-key"
NEXTAUTH_URL=http://localhost:3001
NEXTAUTH_SECRET=super-long-random-secret-change-this-for-real-use

# 4. Start the local Prisma dev database
# In a separate terminal:
npx prisma dev

# (Optional) If you want to browse your data in a GUI later:
# npx prisma studio   # opens at http://localhost:5555

# 5. Sync the schema to your database
npx prisma db push

# (Alternative: if you prefer classic migrate workflow)
# npx prisma migrate dev --name init

# 6. Start the app
npm run dev

# → App runs on http://localhost:3001
Optional: Seed the default admin user
Bashnpm run seed

After seeding, log in with:

Email: admin@example.com
Password: admin123
