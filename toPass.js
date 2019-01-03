console.warn('toPassStart');

var selected = window.getSelection();
var selectedChildrens = selected.anchorNode.children;
var selectedChild = selectedChildrens[0];
var i = 0;

while(selectedChild.nodeName != 'INPUT')
{
	i++;
	selectedChild = selectedChildrens[i];
}

var sA = selectedChild.attributes;

if(!sA.type || sA.type.value == 'text')
{
	sA.type = 'password';
	console.log('pass to text changed');
	// dodać aby tylko input zaznaczony był zmieniany(zmienić tylko inputa który ma text z zaznaczonego)
	// window.getSelection().anchorNode.data <-- można zmienić read/write text
}