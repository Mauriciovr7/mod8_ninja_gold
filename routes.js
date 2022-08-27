const express = require('express')
const router = express.Router()
const f = require('./functions')

let total_oro = 0
let accion = 'Gana: '

// get
router.get('/', (req, res) => {
  res.render('index.html', {  }) // total_oro: req.session.total_oro
})

router.get('/gold', (req, res) => {
  res.render('game.html', { total_oro: req.session.total_oro, jugadas: req.session.jugadas })
})

// post (funciones de calculo)
// router.post('/gold/process_money/:opcion',  (req, res) => { // req.params.opcion
router.post('/gold/process_money', (req, res) => {
  const opcion = req.body.opcion

  if (req.session.total_oro == undefined) {
    req.session.total_oro = 0
  }
  if (req.session.jugadas == undefined) {
    req.session.jugadas = []
  }

  if (opcion) {

    const oro = f.oro(opcion)

    if (oro < 0) {
      accion = 'Pierde: '
    }
    // console.log('oro ', oro)
    total_oro = oro

    req.session.total_oro += total_oro
    req.session.jugadas.push({ opcion, oro, accion })
    accion = 'Gana: '
    // console.log('total ', req.session.total_oro)
  }
  res.redirect('/gold')
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
