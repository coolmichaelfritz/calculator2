
var add = function(add1Input, add2Input) {
	return add1Input + add2Input;
};

var subtract = function(subtract1Input, subtract2Input) {
	return subtract1Input - subtract2Input;
};

var multiply = function(multiply1Input, multiply2Input) {
	return multiply1Input * multiply2Input;
};

$(document).ready(function() {
	$("#addition form").submit(function(event) {
		event.preventDefault();

		var add1Input = parseInt($("#add1Input").val());
		var add2Input = parseInt($("#add2Input").val());
		var result = add(add1Input, add2Input);

		$(".answer").text(result);

	});

	$("#subtraction form").submit(function(event) {
		event.preventDefault();

		var subtract1Input = parseInt($("#subtract1").val());
		var subtract2Input = parseInt($("#subtract2").val());
		var subtractResult = subtract(subtract1Input, subtract2Input);

		$(".difference").text(subtractResult)
	});

	$("#multiplication form").submit(function(event) {
		event.preventDefault();

		var multiply1Input = parseInt($("#multiply1").val());
		var multiply2Input = parseInt($("#multiply2").val());
		var multiplyResult = multiply(multiply1Input, multiply2Input);

		$(".quotient").text(multiplyResult)
	});

});
