const express = require("express");
var cors = require('cors')
 


const PORT = process.env.PORT || 5000;

const app = express();
const path = require('path');
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));
app.use(cors())

app.get('/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});