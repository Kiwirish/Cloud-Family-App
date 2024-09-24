const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// MySQL connection
const db = mysql.createConnection({
  host: 'your-rds-endpoint',
  user: 'admin',
  password: 'yourpassword',
  database: 'family'
});

db.connect((err) => {
  //if (err) throw err;
  console.log('Connected to MySQL');
});

app.use(express.json());

// Simple route to add dreams
app.post('/add-dream', (req, res) => {
  const { dream } = req.body;
  const query = `INSERT INTO dreams (dream) VALUES ('${dream}')`;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.send('Dream added successfully');
  });
});

app.listen(port, () => {
  console.log(`User app running at http://localhost:${port}`);
});
