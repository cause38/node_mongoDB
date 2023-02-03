const express = require('express');
const app = express();
const {PORT, MONGO} = process.env;

app.use(express.json());
var cors = require('cors');
app.use(cors());

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/Jlog/public/index.html'));
});

app.get('/api/list', function (req, res) {
  res.sendFile(path.join(__dirname, '/Jlog/public/index.html'));
});

app.listen(PORT, () => console.log('ok'));
