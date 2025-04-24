// createFile.js

const fs = require('fs');

const data = "Mongo, Express, Angular, Node";

fs.writeFile("src.txt", data, (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("src.txt created successfully.");
  }
});
