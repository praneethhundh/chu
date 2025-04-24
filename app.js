const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// GET route for the form
app.get('/register', (req, res) => {
  res.render('register');
});

// POST route to handle form submission
app.post('/register', (req, res) => {
  const { name, age, nationality } = req.body;
  console.log("Registration Received:");
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Nationality:", nationality);
  res.send("Registration successful!");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
