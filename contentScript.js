chrome.storage.local.get(['check'], function(result)
{
	let checked = result.check;
	if(checked)
	{
		toText();
	}
	else return;
})

function toText()
{
	const	inputs = document.getElementsByTagName('input');
	for(var i = 0; i<inputs.length; i++)
	{
		var input = inputs[i];
		if(input.type == 'password')
		{
			input.type = 'text';
		}
	}
}