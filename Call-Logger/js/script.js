/*load DOM before script*/
window.onload = function() {
	/* shorthand of document.getElementById */
	var get_id = function(args) {
		return (args) ? document.getElementById(args) : null;
	};

	get_id('button-preview').onclick = function () {
		var main_text = '';//holds all texts
		/* customer info */
		main_text = get_id('input-name').value ? 'Name: ' + get_id('input-name').value + '\n' : 'Name: --\n';
		main_text += get_id('input-phonenumber').value ? 'Phone Number: ' + get_id('input-phonenumber').value + '\n' : 'Phone Number: --\n';
		main_text += get_id('input-alternatephone').value ? 'Alternate Phone: ' + get_id('input-alternatephone').value + '\n' : 'Alternate Phone: --\n';
		main_text += get_id('input-emailaddress').value ? 'Email Address: ' + get_id('input-emailaddress').value + '\n' : 'Email Address: --\n';
		main_text += get_id('input-casenumber').value ? 'Case Number: ' + get_id('input-casenumber').value + '\n' : 'Case Number: --\n';
		main_text += get_id('input-systemtype').value ? 'System Type: ' + get_id('input-systemtype').value + '\n' : 'System Type: --\n';

		/* problem, resolution, ending */
		main_text += get_id('input-issue').value ? '\nIssue: ' + get_id('input-issue').value + '\n' : '\nIssue: --\n';
		main_text += get_id('textarea-comments').value ? '\nDetailed Comments: ' + get_id('textarea-comments').value + '\n' : '\nDetailed Comments: --\n';
		main_text += get_id('textarea-resolution').value ? '\nResolution: ' + get_id('textarea-resolution').value + '\n' : '\nResolution: --\n';
		main_text += get_id('input-callduration').value ? '\nCall Duration: ' + get_id('input-callduration').value + '\n' : '\nCall Duration: --\n';
		main_text += get_id('select-approval').value ? 'Approval: ' + get_id('select-approval').value + '\n' : 'Approval: --\n';
		main_text += '\nCall Stamps:\n';
		main_text += get_id('checkbox-outboundcall').checked ? ' **OBCALL** ' : '';
		main_text += get_id('checkbox-verifiedauthorization').checked ? ' **V-AUTH** ' : '';
		main_text += get_id('checkbox-verifiedaddress').checked ? ' **V-ADDR** ' : '';
		main_text += get_id('checkbox-servicedeferral').checked ? ' **SVC DEF** ' : '';
		main_text += get_id('checkbox-turnaroundtime').checked ? ' **TAT** ' : '';
		main_text += get_id('checkbox-nootherissues').checked ? ' **NOIR** ' : '';

		/* paste all text to preview box */
		get_id('textarea-preview').value ? get_id('textarea-preview').value = '' : get_id('textarea-preview').value = main_text;
		get_id('div-preview').style.display = 'block';//show preview window
	};

	get_id('button-close').onclick = function () {
		get_id('div-preview').style.display = 'none';//show preview window
		get_id('textarea-preview').value = '';//clear preview log
	};
};
