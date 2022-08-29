/*
De 5 personas que ingresan a la farmacia se deben tomar y validar 
los siguientes datos.
nombre, numero de espera(del 0 al 99),DNI(validar entre 10.000.000 a 99.999.999) 
y monto de la factura emitida (validar que no sea negativo):
a)informar el promedio gastado por persona.
b)La cantidad de personas que su DNI es menor a 80.000.000 y la cantidad 
de personas que su DNI es igual o mayor a los 80.000.000
c)el nombre y numero de espera del que más gastó
pedir datos por prompt y mostrar por document.write
*/
function mostrar()
{
    var contador;
    var nombre;
    var numeroEspera;
    var dni;
    var montoFactura;
    var promedioGastado;
    var acumuladorMontoFactura;
    var contadorDniMayor;
    var contadorDniMenor;
    var flagMasGastado;
    var montoMasGastado;
    var nombreMasGastado;
    var numeroEsperaMasGastado;

    contador = 0;
    acumuladorMontoFactura = 0;
    contadorDniMayor = 0;
    contadorDniMenor = 0;
    flagMasGastado = true;

    while(contador < 5)
    {
        nombre = prompt("Ingrese el nombre:");
        while(isNaN(nombre) == false)
        {
            nombre = prompt("ERROR! Ingrese el nombre:");
        }

        numeroEspera = prompt("Ingrese el número de espera");
        numeroEspera = parseInt(numeroEspera);
        while(isNaN(numeroEspera) == true && numeroEspera < 0 && numeroEspera > 99)
        {
            numeroEspera = prompt("ERROR! Ingrese el número de espera");
            numeroEspera = parseInt(numeroEspera);
        }

        dni = prompt("Ingrese el dni");
        dni = parseInt(dni);
        while(isNaN(dni) == true && dni < 10000000 && dni > 99999999)
        {
            dni = prompt("ERROR! Ingrese el dni");
            dni = parseInt(dni);
        }

        montoFactura = prompt("Ingrese el monto de la factura");
        montoFactura = parseInt(montoFactura);
        while(isNaN(montoFactura) == true && montoFactura < 1)
        {
            montoFactura = prompt("ERROR! Ingrese el monto de la factura");
            montoFactura = parseInt(montoFactura);
        }

        if(dni < 80000000)
        {
            contadorDniMenor++;
        }
        else
        {
            contadorDniMayor++;
        }

        if(flagMasGastado == true)
        {
            montoMasGastado = montoFactura;
            nombreMasGastado = nombre;
            numeroEsperaMasGastado = numeroEspera;
            flagMasGastado = false;
        }
        else
        {
            if(montoFactura > montoMasGastado)
            {
                montoMasGastado = montoFactura;
                nombreMasGastado = nombre;
                numeroEsperaMasGastado = numeroEspera;
            }
        }

        acumuladorMontoFactura = acumuladorMontoFactura + montoFactura;
        contador++;
    }

    promedioGastado = acumuladorMontoFactura / contador;

    mensaje = "El promedio gastado por persona es de: " + promedioGastado;
    mensaje = mensaje + "La cantidad de personas que su DNI es menor a 80.000.000 es " + contadorDniMenor;
    mensaje = mensaje + "La cantidad de personas que su DNI es mayor o igual a 80.000.000 es " + contadorDniMayor;
    mensaje = mensaje + "La persona que más gastó es " + nombreMasGastado + " y su número de espera fue el " + numeroEsperaMasGastado;

    document.write(mensaje);

}

//  13:25
