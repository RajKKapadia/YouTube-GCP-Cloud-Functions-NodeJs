const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/demo', (req, res) => {
    res.send('From demo')
  })

exports.helloWorld = app;
