import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createPool({
    host: '%',
    user: 'acesso',
    password: '150322Em$',
    database: 'app_db',
    port: '3306'
})

export default db

//'rrnea.@2009',
