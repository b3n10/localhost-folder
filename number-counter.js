window.onload = function() {
	get_id('btn-change-number').onclick = function () { change_number() };
	get_id('div-show-number').onclick = function () { change_number() };      
};

var get_id = function(arg) { return (arg) ? document.getElementById(arg) : null; };
var start_number = 0;

function change_number() {
	get_id('div-show-number').innerHTML = start_number;
	get_id('btn-change-number').textContent = num_array[start_number];
	if (start_number < (num_array.length - 1)) {
		start_number += 1;
	}
}

var num_array = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty', 'Twenty-One', 'Twenty-Two', 'Twenty-Three', 'Twenty-Four', 'Twenty-Five', 'Twenty-Six', 'Twenty-Seven', 'Twenty-Eight', 'Twenty-Nine', 'Thirty', 'Thirty-One', 'Thirty-Two', 'Thirty-Three', 'Thirty-Four', 'Thirty-Five', 'Thirty-Six', 'Thirty-Seven', 'Thirty-Eight', 'Thirty-Nine', 'Fourty'];
