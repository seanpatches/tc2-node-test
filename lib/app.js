const express = require('express');
const app = express();
const {parse} = require ('url');

app.use((req, res, next) => {
  const url = parse(req.url, true);
  console.log('Request Incoming!' + '\nMethod:' + req.method + '\nPathname:' + url.pathname + '\nStatus:' + req.statusCode);
  next();
});

app.use(express.json());
app.use('/', testRouter)

module.exports = app;