/*
Una distribuidora de bebidas llena 5 comiones con sus productos y necesita 
guardar ciertos datos de cada una:
-Nombre del conductor
-Cantidad de litros de agua transportada($100 el litro)
-Cantidad de litros de gaseosa transportada ($150 el litro)
-Cantidad de litros de cerveza transportada ($200 el litro)
Y debemos mostrar que tipo de bebida se transportó en mayor cantidad 
(cerveza,agua o gaseosa)
Además se pide un total de facturación que estará dado por cada litro de 
gaseosa vendida a $150, cada litro de agua a $100 y cada litro de cerveza a $200.
*/
function mostrar()
{
    var contador;
    var nombre;
    var cantAgua;
    var cantGaseosa;
    var cantCerveza;
    var acumuladorAgua;
    var acumuladorGaseosa;
    var acumuladorCerveza;
    var totalAguaVendida;
    var totalGaseosaVendida;
    var totalCervezaVendida;
    var totalFacturacion;

    contador = 0;
    acumuladorAgua = 0;
    acumuladorGaseosa = 0;
    acumuladorCerveza = 0;

    while(contador < 5)
    {
        nombre = prompt("Ingrese el nombre del conductor:");
        while(isNaN(nombre) == false)
        {
            nombre = prompt("ERROR! Ingrese el nombre del conductor:");
        }

        cantAgua = prompt("Ingrese los litros de Agua");
        cantAgua = parseInt(cantAgua);
        while(isNaN(cantAgua) == true && cantAgua < 1)
        {
            cantAgua = prompt("ERROR! Ingrese los litros de Agua");
            cantAgua = parseInt(cantAgua);
        }

        cantGaseosa = prompt("Ingrese los litros de Gaseosa");
        cantGaseosa = parseInt(cantGaseosa);
        while(isNaN(cantGaseosa) == true && cantGaseosa < 1)
        {
            cantGaseosa = prompt("ERROR! Ingrese los litros de Gaseosa");
            cantGaseosa = parseInt(cantGaseosa);
        }

        cantCerveza = prompt("Ingrese los litros de Cerveza");
        cantCerveza = parseInt(cantCerveza);
        while(isNaN(cantCerveza) == true && cantCerveza < 1)
        {
            cantCerveza = prompt("ERROR! Ingrese los litros de Cerveza");
            cantCerveza = parseInt(cantCerveza);
        }

        acumuladorAgua = acumuladorAgua + cantAgua;
        acumuladorGaseosa = acumuladorGaseosa + cantGaseosa;
        acumuladorCerveza = acumuladorCerveza + cantCerveza;

        contador++;
    }

    if(acumuladorAgua == acumuladorGaseosa && acumuladorAgua == acumuladorCerveza)
    {
        mensaje = "Las bebidas que se transportaron en mayor cantidad son Agua, Gaseosa y Cerveza";
    }
    else
    {
        if(acumuladorAgua == acumuladorGaseosa && acumuladorAgua < acumuladorCerveza)
        {
            mensaje = "Las bebidas que se transportaron en mayor cantidad son Agua y Gaseosa";
        }
        else
        {
            if(acumuladorGaseosa == acumuladorCerveza && acumuladorGaseosa < acumuladorAgua)
            {
                mensaje = "Las bebidas que se transportaron en mayor cantidad son Gaseosa y Cerveza";
            }
            else
            {
                if(acumuladorAgua == acumuladorCerveza && acumuladorAgua < acumuladorGaseosa)
                {
                    mensaje = "Las bebidas que se transportaron en mayor cantidad son Agua y Cerveza";
                }
            }
        }
    }

    if(acumuladorAgua > acumuladorGaseosa && acumuladorAgua > acumuladorCerveza)
    {
        mensaje = "La bebida que se transportó en mayor cantidad es Agua";
    }
    else
    {
        if(acumuladorGaseosa > acumuladorCerveza)
        {
            mensaje = "La bebida que se transportó en mayor cantidad es Gaseosa";
        }
        else
        {
            mensaje = "La bebida que se transportó en mayor cantidad es Cerveza";
        }
    }

    totalAguaVendida = acumuladorAgua * 100;
    totalGaseosaVendida = acumuladorGaseosa * 150;
    totalCervezaVendida = acumuladorCerveza * 200;
    totalFacturacion = totalAguaVendida + totalGaseosaVendida + totalCervezaVendida;

    mensaje = mensaje + "La cantidad total de facturación es: " + totalFacturacion;

    document.write(mensaje);

}

//  17:50