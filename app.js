const os = require('os')

//info about user
const user = os.userInfo()
console.log(user);

//get system uptime in second
console.log(`The system uptime is ${os.uptime} seconds`);

