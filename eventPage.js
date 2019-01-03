let toTextButton = {
	'id': 'toText',
	'title': chrome.i18n.getMessage("toText"),
	'contexts': ['selection']
};
let toPassButton = {
	'id': 'toPass',
	'title': chrome.i18n.getMessage("toPassword"),
	'contexts': ['selection']
};

chrome.contextMenus.create(toTextButton, function() {console.log('loaded contextMenu')});
chrome.contextMenus.create(toPassButton, function() {console.log('loaded 2nd contextMenu')});

chrome.contextMenus.onClicked.addListener(function(clickData) {

	if(clickData.menuItemId == 'toText')
	{
		console.log('clicked');
		chrome.tabs.executeScript({
			file: "toText.js"
		});
	} 
	else if(clickData.menuItemId == 'toPass')
	{
		console.log('clicked2');
		chrome.tabs.executeScript({
			file: 'toPass.js'
		});
	}
});

/*window.setTimeout(checkOnLoad, 200);

function checkOnLoad()
{
	console.log(document.readyState);
	if(document.readyState == 'complete') onl();
	else window.setTimeout(checkOnLoad, 200);
}

function onl()
{
	let checkb = document.getElementById('cb');
	console.log(checkb);
	checkb.checked.onchange = function()
	{
		console.log(checkb.checked);
	}
}*/