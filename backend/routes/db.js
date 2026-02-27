import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createPool({
    host: 'localhost',
    user: 'acesso',
    password: '123456',
    database: 'app_db',
    port: '3306'
})

export default db

//'rrnea.@2009',
