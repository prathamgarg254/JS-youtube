//console.log(2>1) true
//console.log("2" > 1) true

console.log(null > 0)
console.log(null == 0) //This Works differently , all others convert null to 0 but not ==
console.log(null >= 0) 

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined >= 0)

// === (Checks the data type as well and does not typecasts/convert)

console.log("2" === 2)