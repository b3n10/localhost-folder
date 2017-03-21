window.onload =	function() {
	var elem1 = 'div-show-number';
	var elem2 = 'btn-change-number';
	var elem3 = 'div-show-number-random';
	var elem4 = 'btn-change-number-random';
	if ( get_id(elem1) && get_id(elem2) ) {
		on_click(elem1, elem2, true);
	} else {
		on_click(elem3, elem4, false);
		var start_number = Math.floor( (Math.random() * (num_array.first_row.length - 1) + 0) );
	}
};

function on_click(elem1, elem2, bool) {
	get_id(elem1).onclick = function () { change_number(elem1, elem2, bool) };
	get_id(elem2).onclick = function () { change_number(elem1, elem2, bool) }; 
} 

function change_number(elem1, elem2, bool) {
	get_id(elem1).innerHTML = num_array.first_row[start_number];
	get_id(elem2).textContent = num_array.second_row[start_number];
	if (bool) {
		if ( start_number < (num_array.first_row.length - 1) ) {
			start_number += 1;
		}
	} else {
		start_number = Math.floor( (Math.random() * (num_array.first_row.length - 1) + 0) );
	}
}

var get_id = function(arg) { return (arg) ? document.getElementById(arg) : null; };
var start_number = 0;
var num_array = {
	'first_row' : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
	'second_row' : ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty', 'Twenty-One', 'Twenty-Two', 'Twenty-Three', 'Twenty-Four', 'Twenty-Five', 'Twenty-Six', 'Twenty-Seven', 'Twenty-Eight', 'Twenty-Nine', 'Thirty', 'Thirty-One', 'Thirty-Two', 'Thirty-Three', 'Thirty-Four', 'Thirty-Five', 'Thirty-Six', 'Thirty-Seven', 'Thirty-Eight', 'Thirty-Nine', 'Fourty', 'Fourty-One', 'Fourty-Two', 'Fourty-Three', 'Fourty-Four', 'Fourty-Five', 'Fourty-Six', 'Fourty-Seven', 'Fourty-Eight', 'Fourty-Nine', 'Fifty', 'Fifty-One', 'Fifty-Two', 'Fifty-Three', 'Fifty-Four', 'Fifty-Five', 'Fifty-Six', 'Fifty-Seven', 'Fifty-Eight', 'Fifty-Nine', 'Sixty','Sixty-One', 'Sixty-Two', 'Sixty-Three', 'Sixty-Four', 'Sixty-Five', 'Sixty-Six', 'Sixty-Seven', 'Sixty-Eight', 'Sixty-Nine', 'Seventy', 'Seventy-One', 'Seventy-Two', 'Seventy-Three', 'Seventy-Four', 'Seventy-Five', 'Seventy-Six', 'Seventy-Seven', 'Seventy-Eight', 'Seventy-Nine', 'Eighty', 'Eighty-One', 'Eighty-Two', 'Eighty-Three', 'Eighty-Four', 'Eighty-Five', 'Eighty-Six', 'Eighty-Seven', 'Eighty-Eight', 'Eighty-Nine', 'Ninety', 'Ninety-One', 'Ninety-Two', 'Ninety-Three', 'Ninety-Four', 'Ninety-Five', 'Ninety-Six', 'Ninety-Seven', 'Ninety-Eight', 'Ninety-Nine', 'One-Hundred']
};
