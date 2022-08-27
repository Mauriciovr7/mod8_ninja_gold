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
    default:
      num = azar(-50, 50)  
  }
  return num
}


module.exports = {azar, oro}