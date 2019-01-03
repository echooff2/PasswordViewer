let checked = false;

document.addEventListener('DOMContentLoaded', function() {
	//change Locale
	document.getElementById("autoUnhashLabel").innerHTML = chrome.i18n.getMessage("autoUnhash") + document.getElementById("autoUnhashLabel").innerHTML;
	
	
	var checkb = document.getElementById('cb');
	chrome.storage.local.get(['check'], function(result)
	{
		var c = result.check;
		if(c) document.getElementById('cb').checked = true;
		else document.getElementById('cb').removeAttribute('checked');
	});
  checkb.addEventListener('change', handler);
});

function handler()
{
	if(document.getElementById('cb').checked)
	{
		checked = true
		console.log('checked');
	}
	else
	{
		checked = false;
		console.log('unchecked');
	}
	chrome.storage.local.set({check: checked}, function()
	{
		console.log('changed to value: '+checked);
	});
}