/* Pablo Scarrozza
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno; // declarar una variable
	var numeroDos;
	var resultado;

	numeroUno = document.getElementById("txtIdNumeroUno").value; // asignar una variable
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno); // transformar el string en número entero
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno + numeroDos; // suma de dos números enteros (por el parseInt)

	alert("la suma es: " + resultado); // concatenar
}

