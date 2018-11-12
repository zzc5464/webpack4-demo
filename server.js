const express = require('express');
const app = express();

app.get('*', (req, res) => {
  console.log(req.url);
  
  res.send(req.url)
})

app.listen('8008')
console.log('http://localhost:8008');
