export default function evaluate ({ intercept, slope }) {
  return function (x) {
    return slope * x + intercept
  }
}

