document.getElementById('dropdown-button-id').onclick = function() {
	dropdown('dropdown-id');
}
		
function dropdown(id){
	var div = document.getElementById(id);
	if(div.style.display == 'block') {
		div.style.display = 'none';
	}
	else {
		div.style.display = 'block';
	}
}