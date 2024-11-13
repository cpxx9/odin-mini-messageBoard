require('dotenv/config');
const path = require('node:path');
const express = require('express');
const indexRouter = require('./routes/indexRouter');
const { newRouter } = require('./routes/newRouter');

const { PORT } = process.env;

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', newRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Mini-Message Board app listening on port: ${PORT}`);
});
