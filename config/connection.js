const { Sequelize } = require('sequelize');
require('dotenv').config();

const defaultConfig = {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    options: {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    },
};

const dbConfig = {
    database: process.env.DB_NAME || defaultConfig.database,
    username: process.env.DB_USER || defaultConfig.username,
    password: process.env.DB_PASSWORD || defaultConfig.password,
    options: {
        host: process.env.DB_HOST || defaultConfig.options.host,
        dialect: process.env.DB_DIALECT || defaultConfig.options.dialect,
        port: process.env.DB_PORT || defaultConfig.options.port,
        pool: {
            max: process.env.DB_POOL_MAX || defaultConfig.options.pool.max,
            min: process.env.DB_POOL_MIN || defaultConfig.options.pool.min,
            acquire: process.env.DB_POOL_ACQUIRE || defaultConfig.options.pool.acquire,
            idle: process.env.DB_POOL_IDLE || defaultConfig.options.pool.idle,
        },
    },
};

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig.options);

module.exports = sequelize;