const { Sequelize } = require('sequelize');

// Create a new instance of Sequelize using environment variables
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 3306,
        dialect: process.env.DB_DIALECT,
        logging: false,
    }
);

// Export the sequelize instance for use in other parts of the application
module.exports = sequelize;
