// Pablo Scarrozza
/*
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de 
una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento 
del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 
20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 
10% y Cordoba tiene el precio sin descuento
*/

function mostrar()
{
	var destino;
	var estacionDelAnio;
	var tarifa;
	var porcentaje;
	var mensaje;

	tarifa = 15000;

	destino = document.getElementById("txtIdDestino").value;
	estacionDelAnio = document.getElementById("txtIdEstacion").value;

	switch(estacionDelAnio)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					porcentaje = 20;
				break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = -10;
				break;
				case "Mar del plata":
					porcentaje = -20;
				break;
			}
		break;
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					porcentaje = -20;
				break;
				case "Cordoba":
				case "Cataratas":
					porcentaje = 10;
				break;
				case "Mar del plata":
					porcentaje = 20;
				break;
			}
		break;
		default:
			switch(destino)
			{
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
					porcentaje = 10;
				break;
				case "Cordoba":
					porcentaje = 0;
				break;
			}
		break;
	}

	precioFinal = tarifa + (tarifa * porcentaje /100);

	mensaje = "El valor de la estadia es: " + precioFinal;
	
	alert(mensaje);

}

/*
function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var precioBase;
	var porcentaje;
	var multiplicador;
	var descuento;
	var precioFinal;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje = 20;
				break;
				case "Mar del plata":
					porcentaje = -20;
				break;
				default:
					porcentaje = -10;
				break;
			}
		break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje = -20;
				break;
				case "Mar del plata":
					porcentaje = 20;
				break;
				default:
					porcentaje = 10;
				break;
			}
		break;
		default:
			switch(destinoIngresado)
			{
				case "Cordoba":
					porcentaje = 0;
				break;
				default:
					porcentaje = 10;
				break;
			}
		break;
	}
	
	precioBase = 15000;
	multiplicador = porcentaje / 100;
	descuento = precioBase * multiplicador;
	precioFinal = precioBase + descuento;
		
	alert("El precio final es: " + precioFinal);
	
}
*/