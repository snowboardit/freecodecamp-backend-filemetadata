const express = require('express'),
  cors = require('cors'),
  multer = require('multer'),
  getFileMeta = require('../getFileMeta'),
  app = express(),
  BASE = '/api',
  DEST_PATH = './public/data/uploads/',
  upload = multer({ dest: DEST_PATH });
require('dotenv').config();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post(`${BASE}/fileanalyse`, upload.single('upfile'), (req, res) => {
  const file = req.file,
    returner = getFileMeta(file);
  res.json(returner)
})

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Your app is listening on port ' + port)
});
