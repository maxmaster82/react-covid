const express = require('express');
const path = require('path');

const app = express();

app.get('/api/countries', (req,res) => {
  res.sendFile(path.join(__dirname, 'countries.json'))
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('Server listening on port ' + port);