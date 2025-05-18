const express = require('express');

const app = express();
const apiVersion = process.env.apiVersion || 'v1'
const api = 'api'
const baseApiPath = `/${api}/${apiVersion}`

const notificationRoutes = require('./routes/notificationRoutes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json())


app.get('/', (req, res) => {
  console.log('All Ok');
  
  res.status(200).json({ ok: true });
});

app.use(`${baseApiPath}/notifications`, notificationRoutes)

module.exports = app;