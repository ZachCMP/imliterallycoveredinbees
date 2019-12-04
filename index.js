const express = require('express')

const app = express()

app.use('/', (req, res) => {
  return res.send('TEST')
})

app.listen(3000)