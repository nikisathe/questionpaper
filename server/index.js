const bodyParser = require("body-parser");
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require('path');

const app = express();
const port = 3001;
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const Paper_connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Questionpapers",
});

Paper_connection.connect((error) => {
  if (error) {
    console.error("Error while connecting to Questionpapers database:", error);
    process.exit(1);
  } else {
    console.log("Questionpapers database connected");
  }
});

app.get("/paper", (req, res) => {
  const sql = "SELECT * FROM UPLOADPAPER";
  Paper_connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send({
        error: "Error fetching paper",
      });
    } else {
      res.json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is connected on port ${port}`);
});
