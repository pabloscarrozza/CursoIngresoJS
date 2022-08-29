/*  Pablo Scarrozza Div K
En una hamburguesería el cajero debe ir cargando los pedidos de los clientes.
Los datos que se tienen que ingresar son:
Nombre, Apellido, edad. Que tipo de hamburguesa (simple, doble o veggie), 
cantidad de hamburguesas. La simple vale 100, la doble 180 y la veggie 130.
Esto se debe cargar hasta que el cajero decida.
Al final, se deberá presentar:

A)Cuál fue el tipo de hamburguesa menos comprada.
B)Cual fue promedio de compra por tipo de hamburguesa.
C)El nombre y apellido de la persona que realizó la compra más cara.
*/
function mostrar()
{
    var respuesta;
    var nombre;
    var apellido;
    var edad;
    var tipo;
    var cantidad;
    var acumuladorSimple;
    var acumuladorDoble;
    var acumuladorVeggie;
    var promedioSimple;
    var promedioDoble;
    var promedioVeggie;
    var simple;
    var doble;
    var veggie;
    var contadorSimple;
    var contadorDoble;
    var contadorVeggie;
    var flagMasCompras;
    var nombreMasCompras;
    var apellidoMasCompras;
    var compraTotal;

    respuesta = true;
    flagMasCompras = true;
    acumuladorSimple = 0;
    acumuladorDoble = 0;
    acumuladorVeggie = 0;
    simple = 100;
    doble = 180;
    veggie = 130;
    contadorSimple = 0;
    contadorDoble = 0;
    contadorVeggie = 0;

    while(respuesta == true)
    {
        nombre = prompt("Ingrese el nombre: ");
        while(isNaN(nombre) == false)
        {
            nombre = prompt("ERROR! Ingrese el nombre: ");
        }

        apellido = prompt("Ingrese el apellido: ");
        while(isNaN(apellido) == false)
        {
            apellido = prompt("ERROR! Ingrese el apellido: ");
        }
        
        edad = prompt("Ingrese la edad: ");
        edad = parseInt(edad);
        while(isNaN(edad) == true && edad < 1)
        {
            edad = prompt("ERROR! Ingrese la edad: ");
            edad = parseInt(edad);
        }
        
        tipo = prompt("Ingrese el tipo (simple, doble o veggie): ");
        while(tipo != "simple" && tipo != "doble" && tipo != "veggie")
        {
            tipo = prompt("ERROR! Ingrese el tipo (simple, doble o veggie): ");
        }

        cantidad = prompt("Ingrese la cantidad de hamburguesas: ");
        cantidad = parseInt(cantidad);
        while(isNaN(cantidad) == true && cantidad < 1)
        {
            cantidad = prompt("ERROR! Ingrese la cantidad de hamburguesas: ");
            cantidad = parseInt(cantidad);
        }

        switch(tipo)
        {
            case "simple":
                acumuladorSimple = acumuladorSimple + cantidad;
                contadorSimple++;
                compraTotal = simple * cantidad;
            break;
            case "doble":
                acumuladorDoble = acumuladorDoble + cantidad;
                contadorDoble++;
                compraTotal = doble * cantidad;
            break;
            case "veggie":
                acumuladorVeggie = acumuladorVeggie + cantidad;
                contadorVeggie++;
                compraTotal = veggie * cantidad;
            break;
        }

        if(flagMasCompras = true)
        {
            compraMasCara = compraTotal;
            nombreMasCompras = nombre;
            apellidoMasCompras = apellido;
            flagMasCompras = false;
        }
        else
        {
            if(compraTotal > compraMasCara)
            {
                compraMasCara = compraTotal;
                nombreMasCompras = nombre;
                apellidoMasCompras = apellido;
            }
        }

        respuesta = confirm("Desea continuar?");
    }
    
    if(acumuladorSimple == 0)
    {
        mensaje = "No se encontraron Hamburguesas Simples compradas";
    }

    if(acumuladorDoble == 0)
    {
        mensaje = "No se encontraron Hamburguesas Dobles compradas";
    }

    if(acumuladorVeggie == 0)
    {
        mensaje = "No se encontraron Hamburguesas Veggies compradas";
    }

    if(acumuladorSimple < acumuladorDoble && acumuladorSimple < acumuladorVeggie)
    {
        mensaje = "<br> La hamburguesa menos comprada es Hamburguesa Simple";
    }
    else
    {
        if(acumuladorDoble < acumuladorVeggie)
        {
            mensaje = "<br> La hamburguesa menos comprada es Hamburguesa Doble";
        }
        else
        {
            mensaje = "<br> La hamburguesa menos comprada es Hamburguesa Veggie";
        }
    }
    
    promedioSimple = acumuladorSimple * simple / contadorSimple;
    promedioDoble = acumuladorDoble * doble / contadorDoble;
    promedioVeggie = acumuladorVeggie * veggie / contadorVeggie;

    if(promedioSimple == 0)
    {
        mensaje = mensaje + "<br> No se encontraron compras de Hamburguesas Simples";
    }
    else
    {
        mensaje = mensaje + "<br> El promedio de compra de Hamburguesas Simples es " + promedioSimple;
    }

    if(promedioDoble == 0)
    {
        mensaje = mensaje + "<br> No se encontraron compras de Hamburguesas Dobles";
    }
    else
    {
        mensaje = mensaje + "<br> El promedio de compra de Hamburguesas Dobles es " + promedioDoble;
    }

    if(promedioVeggie == 0)
    {
        mensaje = mensaje + "<br> No se encontraron compras de Hamburguesas Veggies";
    }
    else
    {
        mensaje = mensaje + "<br> El promedio de compra de Hamburguesas Veggies es " + promedioVeggie;
    }

    mensaje = mensaje + "<br> El nombre y apellido de la persona que realizó la compra más cara es " + nombreMasCompras + " " + apellidoMasCompras;

    document.write(mensaje);

}
