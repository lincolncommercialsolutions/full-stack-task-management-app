import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const globalForPrisma = global as unknown as { 
  prisma: PrismaClient;
  pool: Pool;
};

// Extract the actual PostgreSQL connection string from Prisma Postgres URL
function getPostgresUrl(databaseUrl: string | undefined): string {
  if (!databaseUrl) {
    throw new Error('DATABASE_URL is not defined');
  }

  // If it's a prisma+postgres URL, decode the api_key to get the actual postgres URL
  if (databaseUrl.startsWith('prisma+postgres://')) {
    try {
      const url = new URL(databaseUrl);
      const apiKey = url.searchParams.get('api_key');
      if (apiKey) {
        const decoded = JSON.parse(Buffer.from(apiKey, 'base64').toString());
        return decoded.databaseUrl;
      }
    } catch (e) {
      console.error('Failed to parse Prisma Postgres URL:', e);
    }
  }
  
  return databaseUrl;
}

// Create connection pool only once
if (!globalForPrisma.pool) {
  const postgresUrl = getPostgresUrl(process.env.DATABASE_URL);
  globalForPrisma.pool = new Pool({
    connectionString: postgresUrl,
    max: 20,
    idleTimeoutMillis: 0,
    connectionTimeoutMillis: 0,
  });
  
  // Handle pool errors
  globalForPrisma.pool.on('error', (err) => {
    console.error('Unexpected pool error:', err);
  });
}

const pool = globalForPrisma.pool;

// Create adapter
const adapter = new PrismaPg(pool);

// Create Prisma client with PostgreSQL adapter
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
    log: ['query', 'error', 'warn'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
