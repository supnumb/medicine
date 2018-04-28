const bcrypt = require('bcryptjs');

let passhash = bcrypt.hashSync("super1111", bcrypt.genSaltSync(10));

console.log(passhash);