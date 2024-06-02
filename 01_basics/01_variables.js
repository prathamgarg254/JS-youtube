const accountId = 14474
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

accountEmail = "efg@gmail.com"
accountPassword = "6789"
accountCity = "Sangrur"

/*
Prefer not to use var as it does not consider scope
*/

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])