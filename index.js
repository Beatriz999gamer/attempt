function integrate(f, bottom, top) {
  let area = 0
  let dx = 0.001
  for(let x = bottom; x < top; x += dx) {
    area += dx * f(x)
  }
  return area
}
console.log(integrate(x => x, 0, 5).toFixed(3))

function gamma(z) {
  function g(x) {
    return x**z * Math.exp(-x)
  }
  return g
}

function factorial(x) {
  return integrate(gamma(x),0,50000)
}

console.log(factorial(5).toFixed(3))