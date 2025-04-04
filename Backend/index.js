
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const sequelize = require('./config/db');


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

sequelize
    .sync({ alter: false })
    .then(() => {
        app.listen(process.env.PORT, () =>
            console.log(`Server running on port ${process.env.PORT}`)
        );
    })
    .catch((err) => console.log(err));