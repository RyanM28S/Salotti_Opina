import mysql from 'mysql2/promise'

const db = mysql.createPool({
    host: 'localhost',
    user: "acesso",
    password: "senha",
    database: 'db',
    port: "3306"
})

export default db