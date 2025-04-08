const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('🚀 Hello from my first CI/CD Pipeline! Updated successfully!');

});

app.listen(PORT, () => {
  console.log("CI/CD pipeline test - version 1.1");
});
