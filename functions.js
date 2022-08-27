const azar = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

/* const addLess = () => {
  return Math.floor(Math.random() * 2)
} */

const oro = (opcion) => {
  switch (opcion) {
    case 'granja':
      num = azar(10, 20)
      break
    case 'cueva':
      num = azar(5, 10)
      break
    case 'casa':
      num = azar(2, 5)
      break
    case 'casino':
      num = azar(-50, 50)
      break
    default:
      num = azar(0, 0)  
  }
  return num
}


module.exports = {azar, oro}