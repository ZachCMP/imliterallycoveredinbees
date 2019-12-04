const express = require('express')

const app = express()

app.use('/', (req, res) => {
  return res.send('TEST')
})

app = express.listen(3000)