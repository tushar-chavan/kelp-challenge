import pool from "pg";
import 'dotenv/config';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
})

exports = pool;