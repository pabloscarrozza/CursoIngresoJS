// Pablo Scarrozza
function mostrar()
{
	var edad;
	var mensaje;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if(edad < 18) {

		mensaje = "Es menor de edad";
	} else {
		
		mensaje = "Es mayor de edad";
	}
	
	alert(mensaje);

/*	Otra forma:
	if(edad >= 18) {

		alert("Es mayor de edad");
	} else {

		alert("Es menor de edad");
	}*/

}