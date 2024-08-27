require('dotenv').config();
const { DB_HOST,DB_USER, DB_DEVELOPMENT, DB_TEST, DB_PRODUCTION, DB_PASS} = process.env;
module.exports = {
  "development": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": DB_DEVELOPMENT,
    "host": DB_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": DB_TEST,
    "host": DB_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": DB_PRODUCTION,
    "host": DB_HOST,
    "dialect": "mysql"
  }
}
