// Pablo Scarrozza
function mostrar()
{
	var edad;
	var mensaje;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	
	if (edad >= 13 && edad <= 17)
	{
		mensaje = "Es adolescente";

	} else {

		if (edad < 13) {
			mensaje = "Es un niño";

		} else {
			mensaje = "Es mayor de edad";

		}
	}

	alert(mensaje);
/*	if (edad < 13) {
		mensaje = "Es un niño";

	} else {

		if (edad < 18) {
			mensaje = "Es adolescente";

		} else {
			mensaje = "Es mayor de edad";

		}
	}

	alert(mensaje);*/


}