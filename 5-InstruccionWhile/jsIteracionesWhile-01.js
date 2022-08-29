//	Pablo Scarrozza
/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var number;
	var mensaje;

	number = 0;
	mensaje = "";

	while(number < 10)
	{
		number = number +1;
		mensaje = mensaje + number + " ";
	}
	
	alert(mensaje);
	
}
