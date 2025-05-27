const express = require('express')
const path = require('path');
const morgan = require('morgan');

const app = express()
process.loadEnvFile()
const port = process.env.PORT || 3000

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('<h1>Hola mundo</h1>')
})

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`)
})