const express = require('express')
const path = require('path')

const app = express()

const port = process.env.PORT || 8080

app.use('/', express.static(path.join(__dirname, 'static')))

app.use('/', (req, res) => {
  return res.sendFile(path.join(__dirname, 'templates/index.html'))
})

app.listen(port, () => `App listening on port ${port}`)