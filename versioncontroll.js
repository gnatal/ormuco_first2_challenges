function checkVersion(ver1, ver2) {
  ver1 = ver1
    .split('.')
    .map((s) => s.padStart(10))
    .join('.')
  ver2 = ver2
    .split('.')
    .map((s) => s.padStart(10))
    .join('.')
  console.log('ver1', ver1)
  console.log('ver2', ver2)
  return ver1 <= ver2
}

console.log(checkVersion('2.1.2', '2.1.4'))

function testCases() {}
