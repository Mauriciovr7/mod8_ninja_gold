const express = require('express')
const session = require('express-session')
const nunjucks = require('nunjucks')
const path = require('path')
const router = require('./routes')

const app = express()

const port = 3001

// se configura uso de sesiones
app.use(session({ secret: '***' }))

// archivos estáticos
app.use(express.static('node_modules/bootstrap/dist'))

// se configura uso de formularios
app.use(express.urlencoded({ extended: true }))

// configuracion de nunjucks, modelador de templates 
nunjucks.configure(path.resolve(__dirname, "templates"), {
  express: app,
  autoscape: true,
  noCache: true,
  watch: true,
})

// rutas
app.use(router)

app.listen(port, () => console.log(`Servidor en puerto http://localhost:${port}`))

// nodemon server
