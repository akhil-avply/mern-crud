const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./connection");
const path = require('path');

const BookApi = require("./routes/BookRouter");

const app = express();

port = 8080;

app.use(cors());

app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use("/api/", BookApi);

app.listen(port, () => {
  console.log(`Server Running on port:${port}`);
});
