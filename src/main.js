function saludar()
{
	let mensaje = MENSAJE_BIENVENIDA;
	mensaje+= "La suma es "+sumar(5,3);
	alert(mensaje);
	
}

const init = function(){
	saludar();
}

window.onload = init;