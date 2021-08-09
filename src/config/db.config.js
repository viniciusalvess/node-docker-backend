const host = (process.env.NODE_ENV === 'development' ? process.env.DB_HOST : process.env.DB_HOST_DOCKER);
const cfg = {
  HOST: host,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,
  pool: {
    max: parseInt(process.env.DB_POOL_SIZE),
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

// console.log('*******', 1, '*******');

const Sequelize = require("sequelize");
const sequelize = new Sequelize(cfg.DB, cfg.USER, cfg.PASSWORD, {
  host: cfg.HOST,
  dialect: cfg.dialect,
  logging: function (str) {
    console.log(str);
  },
  pool: {
    max: cfg.pool.max,
    min: cfg.pool.min,
    acquire: cfg.pool.acquire,
    idle: cfg.pool.idle
  }
});

const db = {};

// console.log('*******', 2, '*******');
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.organization = require("../model/Organization.model")(sequelize, Sequelize);

// console.log('*******', 3, '*******');
module.exports = db;