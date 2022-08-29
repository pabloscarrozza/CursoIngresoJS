/*	Pablo Scarrozza
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total*/
function mostrar()
{
	var tipoProducto;
	var precio;
	var cantUnidades;
	var marca;
	var fabricante;
	var contador;
	var flagPrimerPrecioMaximo;
	var precioJabonMasCaro;
	var cantUnidadesJabonMasCaro;
	var fabricanteJabonMasCaro;
	var flagCantUnidadesMaximo;
	var cantUnidadesMaximo;
	var tipoProductoMasUnidades;
	var promedioPorCompra;

	contador = 0;
	flagPrimerPrecioMaximo = true;
	flagCantUnidadesMaximo = true;

	while(contador < 3)
	{
		tipoProducto = prompt("Ingrese el tipo del producto (barbijo, jabón o alcohol): ");
		while(tipoProducto != "barbijo" && tipoProducto != "jabón" && tipoProducto != "alcohol")
		{
			tipoProducto = prompt("ERROR! Ingrese el tipo del producto (barbijo, jabón o alcohol): ");
		}

		precio = prompt("Ingrese el precio (entre 100 y 300): ");
		precio = parseInt(precio);
		while(precio < 100 || precio > 300)
		{
		precio = prompt("ERROR! Ingrese el precio (entre 100 y 300): ");
		precio = parseInt(precio);
		}

		cantUnidades = prompt("Ingrese la cantidad de unidades (entre 1 y 1000): ");
		cantUnidades = parseInt(cantUnidades);
		while(cantUnidades < 1 || cantUnidades > 1000)
		{
		cantUnidades = prompt("ERROR! Ingrese la cantidad de unidades (entre 1 y 1000): ");
		cantUnidades = parseInt(cantUnidades);
		}

		marca = prompt("Ingrese la marca del producto: ");
		while(isNaN(marca) == false)
		{
			marca = prompt("ERROR! Ingrese la marca del producto: ");
		}

		fabricante = prompt("Ingrese el nombre del fabricante: ");
		while(isNaN(fabricante) == false)
		{
			fabricante = prompt("ERROR! Ingrese el nombre del fabricante: ");
		}

		if(tipoProducto == "jabón")
		{
			if(flagPrimerPrecioMaximo == true)
			{
				precioJabonMasCaro = precio;
				flagPrimerPrecioMaximo = false;
			}
			else
			{
				if(precio > precioJabonMasCaro)
				{
					precioJabonMasCaro = precio;
					cantUnidadesJabonMasCaro = cantUnidades;
					fabricanteJabonMasCaro = fabricante;
				}
			}
		}

		if(flagCantUnidadesMaximo == true)
		{
			cantUnidadesMaximo = cantUnidades;
			tipoProductoMasUnidades = tipoProducto;
			flagCantUnidadesMaximo = false;
		}
		else
		{
			if(cantUnidadesMaximo > cantUnidades)
			{
				cantUnidadesMaximo = cantUnidades;
				tipoProductoMasUnidades = tipoProducto;
			}
		}



		contador = contador + 1;
	}

	promedioPorCompra = 
	
	mensajeA = "El jabón más caro vale: " + precioJabonMasCaro + ", la cantidad de unidades es: " + cantUnidadesJabonMasCaro + " y el fabricante es: " + fabricanteJabonMasCaro;
	mensajeB = "El promedio de cantidad de unidades por compra del tipo de producto con más unidades es: " + promedioPorCompra;

	//alert(mensajeA);
	alert(mensajeB);
}

//a) Del más caro de los jabones, la cantidad de unidades y el fabricante
//b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
