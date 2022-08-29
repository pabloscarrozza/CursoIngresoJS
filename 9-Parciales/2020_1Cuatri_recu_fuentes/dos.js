/*  Pablo Scarrozza
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro*/
function mostrar()
{
    var tipo;
    var cantBolsas;
    var precioPorBolsa;
    var mensaje;
    var respuesta;
    var importeTotalBruto;
    var descuento;
    var importeConDescuento;
    var banderaCantBolsasMax;
    var cantBolsasMax;
    var tipoCantMax;

    respuesta = true;
    importeTotalBruto = 0;
    banderaCantBolsasMax = true;
    cantBolsasMax = 0;


    while(respuesta == true)
    {
        tipo = prompt("Ingrese el tipo (arena, cal ó cemento): ");
        while(tipo != "arena" && tipo != "cal" && tipo != "cemento")
        {
            tipo = prompt("ERROR! Ingrese el tipo (arena, cal ó cemento): ");
        }

        cantBolsas = prompt("Ingrese la cantidad de bolsas: ");
        cantBolsas = parseInt(cantBolsas);
        while(isNaN(cantBolsas) == true)
        {
            cantBolsas = prompt("ERROR! Ingrese la cantidad de bolsas: ");
            cantBolsas = parseInt(cantBolsas);
        }

        precioPorBolsa = prompt("Ingrese el precio por bolsa: ");
        precioPorBolsa = parseInt(precioPorBolsa);
        while(isNaN(precioPorBolsa) == true)
        {
            precioPorBolsa = prompt("ERROR! Ingrese el precio por bolsa: ");
            precioPorBolsa = parseInt(precioPorBolsa);
        }
        
        if(cantBolsas < 11)
        {
            descuento = 0;
        }
        else
        {
            if(cantBolsas < 31)
            {
                descuento = 15;
            }
            else
            {
                descuento = 25;
            }
        }

        if(banderaCantBolsasMax == true)
		{
			cantBolsasMax = cantBolsas;
			tipoCantMax = tipo;
			banderaCantBolsasMax = false;
		}
		else
		{
			if(cantBolsas > cantBolsasMax)
			{
				cantBolsasMax = cantBolsas;
				tipoCantMax = tipo;
			}
		}
        

        importeTotalBruto = importeTotalBruto + precioPorBolsa * cantBolsas;
        importeConDescuento = importeTotalBruto - (importeTotalBruto * descuento / 100);
        respuesta = confirm("Desea continuar?");
    }

    mensaje = "El importe total a pagar, bruto sin descuento es: " + importeTotalBruto;
    mensaje = mensaje + "<br> El importe total a pagar con descuento es: " + importeConDescuento;
    mensaje = mensaje + "<br> El tipo con más cantidad de bolsas es: " + tipoCantMax;

    document.write(mensaje);
}
/*a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro*/