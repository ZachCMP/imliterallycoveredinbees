const express = require('express')

const app = express()

const port = process.env.PORT || 8080

app.use('/', (req, res) => {
  return res.send('TEST')
})

app.listen(port)