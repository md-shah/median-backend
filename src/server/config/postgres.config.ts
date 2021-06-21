import { Pool } from 'pg';
import { ConfigService } from '@nestjs/config';

const databasePoolFactory = async (configService: ConfigService) => {
  const pool = new Pool({
    user: configService.get('DB_USERNAME'),
    host: configService.get('POSTGRES_HOST'),
    database: configService.get('DB_NAME'),
    password: configService.get('DB_PASSWORD'),
    port: configService.get('DB_PORT'),
  });
  const res = await pool.query('SELECT NOW()');
  // eslint-disable-next-line no-console
  console.log(`Postgres connection pool active: ${res.rows[0].now}`);
  return pool;
};
export default databasePoolFactory;
