var Sequelize = require('sequelize');
// import Sequelize from "sequelize";
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
const config = require(__dirname + '/../config/config.json')

const db = new Sequelize(config.development.database, config.development.username, config.development.password, {
    host: config.development.host,
    dialect: 'postgres',
    logging: false,
});

//export default db
module.exports = db