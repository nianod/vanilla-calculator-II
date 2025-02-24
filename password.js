
const readline = require("readline")
const rl = readline.createInterface ({
   input:process.stdin,
   output:process,stdout
});
rl.question("Enter your password: ", function(password){
    if(password.includes(",") || password.includes("?") || password.includes("!") || password.includes("@") ) {
        console.log("Strong Password");
        
    } else if (password.includes("")) {
        console.log("your password is very weak");
        
    }
    else {
        console.log("your password is not strong");
        
    }
    rl.close();
});