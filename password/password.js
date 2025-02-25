
// const { log } = require("console");
// const readline = require("readline")
// const rl = readline.createInterface ({
//    input:process.stdin,
//    output:process.stdout
// });
// rl.question("Enter your password: ", function(password){
//     if(password.includes(",") || password.includes("?") || password.includes("!") || password.includes("@") ) {
//         console.log("Strong Password");
        
//     } else if (password.length < 6) {
//         console.log("your password is very weak");
        
//     }
//     else {
//         console.log("your password is not strong");
        
//     }
//     rl.close();
// });



const prompt = require("prompt-sync")();

const myObjects = {
    strongest: ["!", "@", "#", "$", "?"],
    stronger: [",", ":"]
};

const checkers = ".,!?;:\"'-_()[]{}\\/|&*@#%$^~`";
const uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const password = () => {
    while (true) {
        const getPassword = prompt("Enter your password(Type exit to escape): ");

        // Check if the password contains at least one symbol
        const hasSymbol = checkers.split("").some(char => getPassword.includes(char));

        // Check if the ``````````````````````````````````````````````````password contains at least one uppercase letter
        const hasUppercase = uppercaseString.split("").some(char => getPassword.includes(char)); {

            if(hasSymbol && hasUppercase) {
                console.log("your password is very strong");
            }
            else if (["S", "E", "V", "X"].some(char => getPassword.includes(char))) {
                console.log("Strong password");
            } 
            else if (getPassword.length <= 2) {
                console.log("Enter a valid password");
            } 
            else {
                console.log("Your password is weak");
            }
            if(getPassword.toLocaleLowerCase() === "exit"){
                console.log("Exiting...")
                break;
            }
        }

    }
    
};

password();
