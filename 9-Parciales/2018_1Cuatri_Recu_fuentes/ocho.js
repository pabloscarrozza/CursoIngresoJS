/*
Una pinturería necesita un programa que permita la carga de productos vendidos, 
junto a los datos del vendedor. Se requiere ingresar los siguientes campos:
-Código del vendedor (v100, v102 ó v103)
-Producto elegido: (Pintura, Barniz ó Enduido)
-Total de la venta.
No hay un límite total de ventas.
Una vez finalizada la carga de productos se debe calcular la comisión del vendedor.
-Si el vendedor superó la cantidad de ventas de $7000 le corresponde una comisión del %20. Sino del %10.
Se debe mostrar:
*El producto más comprado.
*El código del vendedor con más dinero recaudado y la cantidad de ventas realizadas. 
(Mostrando el código, la cantidad de dinero recaudada y la cantidad total de ventas).
*/
function mostrar()
{
    var respuesta;
    var codigo;
    var producto;
    var importe;
    var contadorPintura;
    var contadorBarniz;
    var contadorEnduido;
    var contadorVentasCero;
    var contadorVentasDos;
    var contadorVentasTres;
    var acumuladorVentasCero;
    var acumuladorVentasDos;
    var acumuladorVentasTres;
    
    respuesta = true;
    contadorPintura = 0;
    contadorBarniz = 0;
    contadorEnduido = 0;
    contadorVentasCero = 0;
    contadorVentasDos = 0;
    contadorVentasTres = 0;
    acumuladorVentasCero = 0;
    acumuladorVentasDos = 0;
    acumuladorVentasTres = 0;

    while(respuesta == true)
    {
        codigo = prompt("Ingrese el codigo del vendedor (v100, v102 ó v103): ");
        while(isNaN(codigo) == false && codigo != "v100" && codigo != "v102" && codigo != "v103")
        {
            codigo = prompt("ERROR! Ingrese el codigo del vendedor (v100, v102 ó v103): ");
        }
        
        producto = prompt("Ingrese el producto (Pintura, Barniz ó Enduido): ");
        while(producto != "Pintura" && producto != "Barniz" && producto != "Enduido")
        {
            producto = prompt("ERROR! Ingrese el producto (Pintura, Barniz ó Enduido): ");
        }

        importe = prompt("Ingrese el importe total de la venta: ");
        importe = parseInt(importe);
        while(isNaN(importe) == true && importe < 1)
        {
            importe = prompt("ERROR! Ingrese el importe total de la venta: ");
            importe = parseInt(importe);
        }

        switch(producto)
        {
            case "Pintura":
                contadorPintura++;
            break;
            case "Barniz":
                contadorBarniz++;
            break;
            case "Enduido":
                contadorEnduido++;
            break;
        }

        switch(codigo)
        {
            case "v100":
                contadorVentasCero++;
                acumuladorVentasCero = acumuladorVentasCero + importe;
            break;
            case "v102":
                contadorVentasDos++;
                acumuladorVentasDos = acumuladorVentasDos + importe;
            break;
            case "v103":
                contadorVentasTres++;
                acumuladorVentasTres = acumuladorVentasTres + importe;
            break;
        }

        respuesta = confirm("Desea continuar?");
    }

    if(contadorPintura == contadorBarniz && contadorPintura == contadorEnduido)
    {
        mensaje = "Los productos más comprados son Pintura, Barniz y Enduido";
    }
    else
    {
        if(contadorPintura == contadorBarniz)
        {
            mensaje = "Los productos más comprados son Pintura y Barniz";
        }
        else
        {
            if(contadorPintura == contadorEnduido)
            {
                mensaje = "Los productos más comprados son Pintura y Enduido";
            }
            else
            {
                if(contadorBarniz == contadorEnduido)
                {
                    mensaje = "Los productos más comprados son Barniz y Enduido";
                }
            }
        }
    }

    if(contadorPintura > contadorBarniz && contadorPintura > contadorEnduido)
    {
        mensaje = "El producto más comprado es Pintura";
    }
    else
    {
        if(contadorBarniz > contadorEnduido)
        {
            mensaje = "El producto más comprado es Barniz";
        }
        else
        {
            mensaje = "El producto más comprado es Enduido";
        }
    }
    
    if(acumulador > 7000)
    {
        acumuladorVentasCero = acumuladorVentasCero * 1.20;
        acumuladorVentasDos = acumuladorVentasDos * 1.20;
        acumuladorVentasTres = acumuladorVentasTres * 1.20;
    }
    else
    {
        acumuladorVentasCero = acumuladorVentasCero * 1.10;
        acumuladorVentasDos = acumuladorVentasDos * 1.10;
        acumuladorVentasTres = acumuladorVentasTres * 1.10;
    }

    if(acumuladorVentasCero > acumuladorVentasDos && acumuladorVentasCero > acumuladorVentasTres)
    {
        mensaje = mensaje + "<br> El código del vendedor con más dinero recaudado es V100 con " + acumuladorVentasCero + " y con " + contadorVentasCero + " ventas realizadas";
    }
    else
    {
        if(acumuladorVentasDos > acumuladorVentasTres)
        {
            mensaje = mensaje + "<br> El código del vendedor con más dinero recaudado es V102 con " + acumuladorVentasDos + " y con " + contadorVentasDos + " ventas realizadas";
        }
        else
        {
            mensaje = mensaje + "<br> El código del vendedor con más dinero recaudado es V103 con " + acumuladorVentasTres + " y con " + contadorVentasTres + " ventas realizadas";
        }
    }

    document.write(mensaje);

}
/*
*El código del vendedor con más dinero recaudado y la cantidad de ventas realizadas. 
(Mostrando el código, la cantidad de dinero recaudada y la cantidad total de ventas).
*/