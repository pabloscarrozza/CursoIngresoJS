/*	Pablo Scarrozza
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m")
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.*/
function mostrar()
{
	var nombre;
	var nacionalidad;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var respuesta;
	var banderaTemperaturaMaxima;
	var temperaturaMaxima;
	var nacionalidadMayorTemperatura;
	var cantMayorDeEdad;
	var mensaje;
	var cantMujeresSolteras;
	var cantMujeresViudas;
	var cantTerceraEdadFiebre;
	var promedioEdadMujeresCasadas;
	var sumaEdadMujeresCasadas;
	var cantMujeresCasadas;

	banderaTemperaturaMaxima = true;
	respuesta = true;
	cantMayorDeEdad = 0;
	cantMujeresSolteras = 0;
	cantMujeresViudas = 0;
	cantTerceraEdadFiebre = 0;
	sumaEdadMujeresCasadas = 0;
	cantMujeresCasadas = 0;

	while(respuesta == true)
	{
		nombre = prompt("Ingrese su nombre: ");
		while(isNaN(nombre) == false)
		{
			nombre = prompt("ERROR! Ingrese su nombre: ");
		}

		nacionalidad = prompt("Ingrese su nacionalidad: ");
		while(isNaN(nacionalidad) == false)
		{
			nacionalidad = prompt("ERROR! Ingrese su nacionalidad: ");
		}

		edad = prompt("Ingrese su edad: ");
		edad = parseInt(edad);
		while(edad < 1 || edad > 120)
		{
			edad = prompt("ERROR! Ingrese su edad: ");
			edad = parseInt(edad);
		}

		sexo = prompt("Ingrese su sexo (f ó m): ")
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("ERROR! Ingrese su sexo (f ó m): ");
		}

		estadoCivil = prompt("Ingrese su estaco civil (soltero, casado ó viudo): ");
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("ERROR! Ingrese su estaco civil (soltero, casado ó viudo): ");
		}

		temperatura = prompt("Ingrese su temperatura corporal: ");
		while(temperatura < 32 || temperatura > 41)
		{
			temperatura = prompt("ERROR! Ingrese su temperatura corporal: ");
		}
		//	a)
		if(banderaTemperaturaMaxima == true)
		{
			temperaturaMaxima = temperatura;
			nacionalidadMayorTemperatura = nacionalidad;
			banderaTemperaturaMaxima = false;
		}
		else
		{
			if(temperatura > temperaturaMaxima)
			{
				temperaturaMaxima = temperatura;
				nacionalidadMayorTemperatura = nacionalidad;
			}
		}
		//	b)
		if(estadoCivil == "soltero" && edad > 17)
		{
			cantMayorDeEdad = cantMayorDeEdad +1;
		}
		//	c)
		if(sexo == "f")
		{
			if(estadoCivil == "soltero")
			{
				cantMujeresSolteras = cantMujeresSolteras + 1;
			}
			else
			{
				if(estadoCivil == "viudo")
				{
					cantMujeresViudas = cantMujeresViudas + 1;
				}
				else // e)
				{
					sumaEdadMujeresCasadas = sumaEdadMujeresCasadas + edad;
					cantMujeresCasadas = cantMujeresCasadas + 1;
				}
			}
		}
		//	d)
		if(edad > 60 && temperatura > 38)
		{
			cantTerceraEdadFiebre = cantTerceraEdadFiebre + 1;
		}
		

		respuesta = confirm("Desea continuar?");
	}

	promedioEdadMujeresCasadas = sumaEdadMujeresCasadas / cantMujeresCasadas;

	mensaje = "La nacionalidad de la persona con mayor temperatura es: " + nacionalidadMayorTemperatura + ", con " + temperaturaMaxima + " grados.";
	mensaje = mensaje + "<br> Los mayores de edad que están solteros son: " + cantMayorDeEdad;
	mensaje = mensaje + "<br> La cantidad de mujeres solteras es: " + cantMujeresSolteras + " y viudas es " + cantMujeresViudas;
	mensaje = mensaje + "<br> Personas con más de 60 años y más de 38° de temperatura son: " + cantTerceraEdadFiebre;
	mensaje = mensaje + "<br> El promedio de edad entre las mujeres casadas es de: " + promedioEdadMujeresCasadas;

	document.write(mensaje);
}
