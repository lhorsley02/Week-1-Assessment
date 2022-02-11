const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Welcome to Password Validator Tool!")

reader. question("Please enter the password you wish to validate: ", function(input){
    tokens = input.split(' ');

    
    userPass = tokens[0];
	passLength = userPass.length;
	passCase = " ";

	// console.log('userPass', userPass);
	console.log('passLength', userPass.length);


	if (userPass.length > 10){
        console.log("password is too long");
	}
	if (userPass.length < 10 ){
        console.log("password is too short")
	}
    else{ 
    	console.log("password is correct length");
    } 
	
    
	


	reader.close()

});