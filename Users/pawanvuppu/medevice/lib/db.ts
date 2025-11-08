import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "medevice_user",
  password: process.env.MYSQL_PASSWORD || "medevice_pass",
  database: process.env.MYSQL_DATABASE || "medevice_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
