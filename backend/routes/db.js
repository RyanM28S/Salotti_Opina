import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createPool({
    host: 'localhost',
    user: 'back',
    password: process.env.DB_PASSWD,
    database: 'app_db',
    port: '3306'
})

export default db

//'192.168.56.1'
//'rrnea.@2009',
