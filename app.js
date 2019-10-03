const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express()
const port = 3000

app.engine("handlebars", exphbs({ defaultLayout: 'main' }))
app.set("view engine", "handlebars")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  res.send(`Success`)
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})