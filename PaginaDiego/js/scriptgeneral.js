document.write('<'+"script src='js/jquery-2.1.4.js'><'+'/script>");
function darBienvenida(){
	alert('Bienvenido');
}

function hacerAlgoMas(){
	console.log('algo mas')
}

$(window).on('load', darBienvenida).on('load', hacerAlgoMas);
