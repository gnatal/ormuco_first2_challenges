function checkVersion(version1, version2) {
  const v1 = version1
    .split('.')
    .map((s) => s.padStart(10, 0))
    .join('.')
  const v2 = version2
    .split('.')
    .map((s) => s.padStart(10, 0))
    .join('.')

  //   console.log('versions', { version1, version2 })
  // although I use 2 if's and else the comparision could be onlu v1 <=v2
  if (v1 > v2) console.log('Version 1 is greater')
  else if (v1 == v2) console.log('Version 1 is equal')
  else console.log('Version 1 is smaller')
}

function testCases() {
  checkVersion('2.1.2', '2.1.2')
  checkVersion('1.1.2', '2.1.4')
  checkVersion('3.1.2', '2.1.4')
  checkVersion('2.132.2', '2.1325.4')
}

testCases()
