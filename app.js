const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express()
const port = 3000
const session = require('express-session')
const passport = require('passport')

if (process.env.NODE_ENV !== 'production') {      // 如果不是 production 模式
  require('dotenv').config()                      // 使用 dotenv 讀取 .env 檔案
}

// 載入 model
const db = require('./models')
const Todo = db.Todo
const User = db.User

app.engine("handlebars", exphbs({ defaultLayout: 'main' }))
app.set("view engine", "handlebars")


app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(session({
  secret: 'your secret key',
  resave: 'false',
  saveUninitialized: 'false',
}))
// 使用 Passport - 要在「使用路由器」前面
app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')(passport)
app.use((req, res, next) => {
  res.locals.user = req.user
  next()
})

app.use('/', require('./routes/home'))
app.use('/users', require('./routes/user'))
app.use('/todos', require('./routes/todo'))
app.use('/auth', require('./routes/auths'))

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})