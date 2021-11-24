
let input = document.getElementById('input'),

	number = document.querySelectorAll('.numbers div'),
	operator = document.querySelectorAll('.operators div'),
	result = document.getElementById('result'),
	clear = document.getElementById('clear'),
	resultDisplayed = false;
	
/* Adding click handlers to number buttons */

for( let i=0; i<number.length; i++) {
	number[i].addEventListener("click", function(e) {
		//Storing current input string and its last character in variables -used later
		let currentString = input.innerHTML
		let lastChar = currentString[currentString.length -1];
		
		//if result is not displayed, just keep adding
		
		if(resultDisplayed === false) {
			input.innerHTML += e.target.innerHTML;
		}
		else if(resultDisplayed === true && lastChar === "+" || lastChar === "-" ||
		lastChar === "÷" || lastChar === "×" ){
			/*If restul is currently displayed and user pressed an oprator. 
			We need to keep on adding to the string for next ops */
			
			resultDisplayed = false;
			input.innerHTML += e.target.innerHTML;	
		} 
		else {
		/*if result is currently displayed and user pressed a number.
			We need clear the input string and add the new input to start the new operation */
			
			resultDisplayed = false;
			input.innerHTML = "";
			input.innerHTML += e.target.innerHTML;
		}
		
	});	
}	


/* Addint Click Handlers to number buttons */	

for( let i=0; i<operator.length; i++) {
		operator[i].addEventListener("click", function(e) {
			/* Storing current input string and its character in variables -used later */
			let currentString = input.innerHTML;
			let lastChar = currentString[currentString.length -1];
			
			
			/* If last character entered is an operator, replace it with the currently pressed one */
			if(lastChar === "+" ||	lastChar === "-" ||
			lastChar === "?" || lastChar === "?" ){
				let newString = currentString.substring(0, currentString.length -1) + e.target.innerHTML;
				input.innerHTML = newString;
			}
			else if (currentString.length == 0) {
				/* If first key pressed is an operator, don't do anything */
				console.log("enter a number first");
			}
			else {
				/* else just add the operator pressed to the input  */
				input.innerHTML += e.target.innerHTML;
			}
		});
	}


/* On Click of 'equal' button */

result.addEventListener("click", function() {
	/* This is the string that we will be processing eg -10+26+33-56*34/23 */
	let inputString = input.innerHTML;
	
	/* Forming an array of numbers. For eg, for above stinrg it will be : numbers = ["10", "26", "33", "56", "34", "23"] */
	let numbers = inputString.split(/\+|\-|\?|\?/g);
	
	/* Forming an array of operators. Eg.["+", "+", "-", "*", "/"] 
	First we replace all the numbers and dot with empty string and then split
	*/
	
	console.log(inputString);
	console.log(operators);
	console.log("--------------");
	
	/* Now we are looping through the array and oing one operations at at time.
		First divide, multiply, sub and then addition.
		As we move we are altering the original numbers and operators array.
		The final element remaining in the array will be the output.
	*/
	
	let divide = operators.indexOf("?");
	
	while(divide! = -1) {
		nu


}


