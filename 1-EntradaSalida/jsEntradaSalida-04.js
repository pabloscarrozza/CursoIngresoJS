/* Pablo Scarrozza
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;

	nombre = prompt("Escriba su nombre");

	document.getElementById("txtIdNombre").value = nombre;


}

