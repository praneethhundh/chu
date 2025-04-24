const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.set('view engine', 'pug');
app.set('views', './views');


app.use(bodyParser.urlencoded({ extended: true }));


app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  const { name, age, nationality } = req.body;
  console.log("Registration Received:");
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Nationality:", nationality);
  res.send("Registration successful!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
