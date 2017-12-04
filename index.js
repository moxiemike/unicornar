const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const port = process.env.PORT || 8080

// app settings
app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '/UI')))

app.get('/', (request, response) => {
  response.render('index')
})

app.listen(port, () => {
  console.log('app listening on port ' + port)
})
