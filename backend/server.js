const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 5000;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "",
  port: 5432,
});

app.get("/ngo", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM ngo");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching shelters:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
