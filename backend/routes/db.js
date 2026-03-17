import mysql from 'mysql2/promise';
// import dotenv from 'dotenv';

// dotenv.config();

const db = mysql.createPool({
    host: '10.117.21.45',
    user: 'back',
    password: "rrnea.@2009",
    database: 'app_db',
    port: '3306'
})

export default db
