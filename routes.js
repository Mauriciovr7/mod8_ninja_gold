const express = require('express')
const router = express.Router()
const f = require('./functions')

// let oro = 0
let total_oro = 0
let accion = 'Gana: '
const jugadas = []

// get
router.get("/", (req, res) => {

  if (req.session.total_oro == undefined) {
    req.session.total_oro = 0
  }
  if (req.session.jugadas == undefined) {
    req.session.jugadas = []
  }

  // req.session.x
  req.session.total_oro = total_oro
  req.session.jugadas = jugadas
  res.render("index.html", { total_oro, jugadas })
})

// post (funciones de calculo)
// router.post('/gold/process_money/:opcion',  (req, res) => {
// console.log('process_money  ', req.params.opcion)
router.post('/gold/process_money', (req, res) => { // + or - cant oro  y redirigir ruta raiz
  const opcion = req.body.opcion

  oro = f.oro(opcion)

  if (oro < 0) {
    accion = 'Pierde: '
  }
  console.log('oro ', oro)

  // total_oro = total_oro + oro
  total_oro += oro
  console.log('total ', total_oro)

  jugadas.push({ opcion, oro, accion })
  accion = 'Gana: '
  // console.log(jugadas)

  res.redirect('/')

})

// ruta 404
router.use((req, res) => {
  res.status(404).send(`
  <html>
    <h2>...ruta no existe</h2>
    <a href="/">
      <button>Home</button>
    </a>
  </html>`)
})

module.exports = router
