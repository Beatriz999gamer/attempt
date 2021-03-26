

function integrate (f, start, end, step) {
    let total = 0
    step = step || 0.01
    for (let x = start; x < end; x += step) {
      total += f(x + step / 2) * step
    }
    return total
  }

  function gamma(a) {
      x**(a-1) * math.e**(-x)
  }

  function factorial(x) {
      return integrate(gamma,0,mathlib.Infinity)
  }

  console.log(factorial(1))