/*const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'tiendita',
    password: 'inexcelsisdeo',
    port: 5432
})

module.exports = pool
*/

const sql = require('mssql');
//const Pool = require('mssql').Pool;

const pool = new sql.ConnectionPool({
    user: 'johanna',
    password: 'johanna',
    server: 'Johanna',
    database: 'Tiendita',
    options: {
        encrypt: true,           // Activa la encriptación si es necesario (generalmente para Azure).
        trustServerCertificate: true // Útil si estás usando una conexión local sin un certificado SSL válido.
    }
});

pool.connect()
    .then(() => {
        console.log('Conexión a SQL Server exitosa.');
    })
    .catch(err => {
        console.error('Error de conexión a SQL Server:', err);
    });

module.exports = pool;
