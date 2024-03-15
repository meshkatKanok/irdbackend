const express = require("express");
const sqlite3 = require("sqlite3");
const cors=require('cors')
const app = express();
const port = process.env.port || 5000;
require('dotenv').config()
app.use(cors())
app.use(express.json())

// database connection from "dua_main.sqlite"
const db = new sqlite3.Database("./Database/dua_main.sqlite");

// categories Fetch
app.get("/categories", (req, res) => {
  db.all("SELECT * FROM category", (err, data) => {
    console.log(data)
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(data);
    }
  });
});

//  sub_categories Fetch
app.get("/sub_categories", (req, res) => {
  db.all("SELECT * FROM sub_category", (err, data) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(data);
    }
  });
});

//   duas Fetch
app.get("/duas", (req, res) => {
  db.all("SELECT * FROM dua", (err, data) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(data);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
