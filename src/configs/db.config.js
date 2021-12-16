const env = process.env;
const fs = require('fs');
const db = {
    host: env.DB_HOST || 'rslpmuwf7ikc.us-east-4.psdb.cloud',
    user: env.DB_USER || 'uz1qzp8c7crv',
    password: env.DB_PASSWORD || 'pscale_pw_6j_Q6W4SqJ2su0z1VUFEBf1n37a5ETPyom_VCUdbKZg',
    database: env.DB_NAME || `programming_languages`,
    port: env.DB_PORT || 3306,
    ssl: {
      mode: 'VERIFY_IDENTITY',
      ca: fs.readFileSync('/etc/ssl/cert.pem', 'utf-8'),
    }
};

module.exports = db;
