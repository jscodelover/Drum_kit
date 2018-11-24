
function key_click(key){
	let divId;
	document.getElementById(key).currentTime=0;
	document.getElementById(key).play();
	divId='key'+key;
	document.getElementById(divId).classList.add("playing");	
}


document.addEventListener('keydown',(e) => {
	let key;
	if(e.keyCode === 65 || e.keyCode === 68 || e.keyCode === 70 || e.keyCode === 71 || e.keyCode === 72 || e.keyCode === 74 || e.keyCode === 75 || e.keyCode === 83)
	{	
		key=e.keyCode;
		key_click(key);
	}
})

/*document.addEventListener('keyup',(e) => {
	let key,divId;
	if(e.keyCode === 65 || e.keyCode === 68 || e.keyCode === 70 || e.keyCode === 71 || e.keyCode === 72 || e.keyCode === 74 || e.keyCode === 75 || e.keyCode === 83)
	{
		divId='key'+e.keyCode;
		document.getElementById(divId).classList.remove("playing");
	}	
})*/

let keys=document.querySelectorAll('.box');
keys.forEach( div_key => {
	div_key.addEventListener('transitionend', e => {
		if(e.propertyName==='transform')
		{
			div_key.classList.remove("playing");
		}	
    });
});
