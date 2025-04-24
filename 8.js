const express = require('express');
const app = express();
const route = require('./routes/route');

app.use('/', route);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
