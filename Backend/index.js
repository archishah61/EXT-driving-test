
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const sequelize = require('./config/db');
// index.js or app.js
const db = require('./models');
const PORT=8000;

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: "http://localhost:5173", // Your frontend URL
        credentials: true, // Allow cookies
    })
);

app.use("/api", require("./routes/index")); // Adjust the path as necessary


// Test the connection
db.sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
    // Sync all models
    return db.sequelize.sync({ force: false , alter: false}); // Set force: true to drop tables and recreate
  })
  .then(() => {
    console.log('Database synced');
    // Start your server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
