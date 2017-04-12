window.onload = function() {
	var x = 1;

	/* shorthand document.getElementById(arg) */
	var get_id = function(arg) {
		return (arg) ? document.getElementById(arg) : null;
	};

	/* 1-100 and corresponding words */
	var store_num_array = [];
	var num_array = {
		'first_row': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10/*, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100*/],
		'second_row': ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'/*, 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty', 'Twenty-One', 'Twenty-Two', 'Twenty-Three', 'Twenty-Four', 'Twenty-Five', 'Twenty-Six', 'Twenty-Seven', 'Twenty-Eight', 'Twenty-Nine', 'Thirty', 'Thirty-One', 'Thirty-Two', 'Thirty-Three', 'Thirty-Four', 'Thirty-Five', 'Thirty-Six', 'Thirty-Seven', 'Thirty-Eight', 'Thirty-Nine', 'Fourty', 'Fourty-One', 'Fourty-Two', 'Fourty-Three', 'Fourty-Four', 'Fourty-Five', 'Fourty-Six', 'Fourty-Seven', 'Fourty-Eight', 'Fourty-Nine', 'Fifty', 'Fifty-One', 'Fifty-Two', 'Fifty-Three', 'Fifty-Four', 'Fifty-Five', 'Fifty-Six', 'Fifty-Seven', 'Fifty-Eight', 'Fifty-Nine', 'Sixty', 'Sixty-One', 'Sixty-Two', 'Sixty-Three', 'Sixty-Four', 'Sixty-Five', 'Sixty-Six', 'Sixty-Seven', 'Sixty-Eight', 'Sixty-Nine', 'Seventy', 'Seventy-One', 'Seventy-Two', 'Seventy-Three', 'Seventy-Four', 'Seventy-Five', 'Seventy-Six', 'Seventy-Seven', 'Seventy-Eight', 'Seventy-Nine', 'Eighty', 'Eighty-One', 'Eighty-Two', 'Eighty-Three', 'Eighty-Four', 'Eighty-Five', 'Eighty-Six', 'Eighty-Seven', 'Eighty-Eight', 'Eighty-Nine', 'Ninety', 'Ninety-One', 'Ninety-Two', 'Ninety-Three', 'Ninety-Four', 'Ninety-Five', 'Ninety-Six', 'Ninety-Seven', 'Ninety-Eight', 'Ninety-Nine', 'One-Hundred'*/]
	};

	/* click events */
	get_id('p-number').onclick = function() {
		change_number();
	};
	get_id('p-word').onclick = function() {
		change_number();
	};

	function change_number(arg) {
		var clicked = true;

		// need to loop if random number repeats to get a different number
		while (clicked === true) {
			var random_number = Math.floor((Math.random() * (num_array.first_row.length) + 0));

			if (store_num_array.indexOf(random_number) < 0) {
				get_id('p-number').textContent = num_array.first_row[random_number];
				get_id('p-word').textContent = num_array.second_row[random_number];
				store_num_array.push(random_number);
				/* need to log on console to see possible bugs */
				console.log('click number ' +  x + ' for random # ' + random_number);
				x++;
				console.log(store_num_array);
				clicked = false;
			} else if (store_num_array.length == num_array.first_row.length) {
				store_num_array = [];
				x = 1;
				/* end script and show success message
				get_id('div-container').style.display = 'none';
				get_id('p-vgood').style.display = 'block';
				console.log('success');
				console.log(store_num_array);
				clicked = false;
				*/
			}
		}
	}

};
