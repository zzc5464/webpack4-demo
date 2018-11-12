const express = require('express');
const app = express();

app.get('*', (req, res) => {
  // console.log(res);
  const path = req.url
  const newPath = './mock' + path + '.json'
  res.send(require(newPath))
})
app.listen('8008')
console.log('http://localhost:8008');
