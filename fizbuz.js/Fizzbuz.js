exports.count = function(start, end) {
	//initialize output variable
	var output = start;

	//modify output to contain the desired sequence
	for(var counter = start; counter <= end; counter += 1 ) {
		//numbers here get repeated 
		output = output + " " + (counter + 1);
	}

	//return the output, e.g. "1 2 3 4 5"
	return output;
};

exports.fizzer = function(num) {
	if (0 === num % 3) {
	    return "fizz";	
    } 
    	return num;
    	return 0 === num % 3 ? "fizz" : num;
};    	

exports.buzzer = function(num) {
	if (0 === num % 5) {
	    return "buzz";	
    } 
    	return num;
    	return 0 === num % 5 ? "buzz" : num;
};    	

exports.fizzbuzzer = function(num) {
	return (0 === num % 3) && (0 === num % 5) ? "fizzbuzz" : num;
	return 0 === (num % 3 + num % 5) ? "fizzbuzz" : num;
	return 0 === num % 15 ? "fizzbuzz" : num; 
}; 	
