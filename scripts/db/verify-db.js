import 'dotenv/config';
import postgres from 'postgres';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local', override: true });
dotenv.config();

async function verifyDb() {
  console.log('--- DB AUDIT (PostgreSQL) ---');
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl || dbUrl.includes('placeholder_host')) {
    console.error('ERROR: Valid DATABASE_URL not found in .env.local');
    process.exit(1);
  }

  console.log('Connecting to database...');
  const sql = postgres(dbUrl);

  try {
    const tables = await sql`
      SELECT tablename 
      FROM pg_catalog.pg_tables 
      WHERE schemaname != 'pg_catalog' AND schemaname != 'information_schema';
    `;
    console.log('Tables Found:', tables.map(r => r.tablename).join(', '));
  } catch (err) {
    console.error('Error connecting to database:', err.message);
  } finally {
    await sql.end();
  }
}

verifyDb();
