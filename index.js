var sha256 = require('js-sha256');

/*
  * The following example hashes the word 'password' using the standard SHA256 algorithm
  * This example does NOT include a salt
*/
console.log(sha256("password"))


/*
  * The following example hashes the word 'password' with the salt: xjhsbdyu3
  * This example DOES include a salt
*/
console.log(sha256("xjhsbdyu3"+"password"))
