const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = require('./config/db'); // ✅ Sequelize instance
const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173", // ✅ Frontend URL
    credentials: true,
  })
);

// All routes entry point
app.use("/api", require("./routes/index"));

// ✅ Test DB connection and sync
sequelize.authenticate()
  .then(() => {
    console.log('✅ Database connection established.');
    return sequelize.sync({ force: false, alter: false });
  })
  .then(() => {
    console.log('🔄 Models synced with the database.');
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Failed to connect to the database:', error);
  });
