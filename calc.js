const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	console.log('mathSymbol', mathSymbol);
	console.log('num1', num1);
	console.log('num2', num2);

	// This line closes the connection to the command line interface.
	reader.close()

	//SOLUTION 1 --------------
	// let solution;
	// if (mathSymbol === '+') {
	// 	solution = num1 + num2 
	// } else if (mathSymbol === '-') {
	// 	solution = num1 - num2
	// } else if (mathSymbol === '*') {
	// 	solution = num1 * num2
	// } else if (mathSymbol === '/') {
	// 	solution = num1 / num2
	// } else if (mathSymbol === '√') {
	// 	solution = Math.sqrt(num1)
	// } else {
	// 	solution = "Incorrect Symbol"
	// }
	// console.log(solution)

	///SOLUTION 2 -------------
	// let solution;
	// switch(mathSymbol) {
	// 	case '+':
	// 		solution = num1 + num2
	// 		break
	// 	case '-':
	// 		solution = num1 - num2
	// 		break
	// 	case '*':
	// 		solution = num1 + num2
	// 		break
	// 	case '/':
	// 		solution = num1 / num2
	// 		break
	// 	case '√':
	// 		solution = Math.sqrt(num1)
	// 		break
	// 	default:
	// 		solution = "Incorect Symbol"
	// 		break
	// }
	// console.log(solution)

	///SOLUTION 3 -------------
	

});
