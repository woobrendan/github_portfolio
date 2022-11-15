// x is start
// y is target
// z is num of operations

const findMaxNum = (x, y, z) => {
  const delta = x - y;

  if (delta === z) return x
  if (Math.abs(delta) === z) return y

  let d = (z - Math.abs(delta)) / 2;
  return x + d
}
console.log(findMaxNum(8, 5, 3))
console.log(findMaxNum(4, 4, 4))

