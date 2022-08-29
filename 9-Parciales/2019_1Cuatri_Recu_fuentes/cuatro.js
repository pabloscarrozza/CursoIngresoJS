/*
Librería Colorcito
Es necesario llevar un registro de la venta diaria de lápices, fibras y lapiceras.
Para eso, al momento de cada venta, se debe ingresa hasta que el usuario quiera:
 + Tipo VALIDAR (lápiz / fibra / lapicera)
 + Marca
 + Cantidad.

Sabiendo que el costo de cada producto es:
    lapiz c/u $50.
    lapicera c/u $70.
    fibra c/u 60$

y si compra:
    6 unidades o mas se aplica el 15% de descuento
    8 unidades o mas se aplica el 20% de descuento
    15 unidades o mas el 35% de descuento.

Se pide calcular e informar por document.write() :

 a) Cantidad y monto total de cada producto.
 b) Cuál es el producto con más unidades vendidas.
 c) Cuál fue la marca del producto que obtuvo la mayor facturación en una sola venta.
 d) Cuál fue el producto con mayor facturación total.
 e) Cuál fue el porcentaje de ventas de lapiceras.
*/
function mostrar()
{
    var tipo;
    var marca;
    var cantidad;
    var respuesta;
    var precioLapiz;
    var precioLapicera;
    var precioFibra;
    var cantidadLapiz;
    var cantidadLapicera;
    var cantidadFibra;
    var sumaLapiz;
    var sumaLapicera;
    var sumaFibra;

    respuesta = true;
    cantidadLapiz = 0;
    cantidadLapicera = 0;
    cantidadFibra = 0;
    sumaLapiz = 0;
    sumaLapicera = 0;
    sumaFibra = 0;

    while(respuesta == true)
    {
        tipo = prompt("Ingrese el tipo (lapiz, lapicera o fibra");
        while(tipo != "lapiz" && tipo != "lapicera" && tipo != "fibra")
        {
            tipo = prompt("Ingrese el tipo (lapiz, lapicera o fibra");
        }

        marca = prompt("Ingrese la marca");
        while(isNaN(marca) == false)
        {
            marca = prompt("Ingrese la marca");
        }

        cantidad = prompt("Ingrese la cantidad");
        while(isNaN(cantidad) == true && cantidad < 1)
        {
            cantidad = prompt("Ingrese la cantidad");
        }

        switch(tipo)
        {
            case "lapiz":
                precioLapiz = 50;
                cantidadLapiz = cantidadLapiz + cantidad;
            break;
            case "lapicera":
                precioLapicera = 70;
                cantidadLapicera = cantidadLapicera + cantidad;
            break;
            case "fibra":
                precioFibra = 60;
                cantidadFibra = cantidadFibra + cantidad;
            break;
        }

        if(cantidad > 5)
        {
            descuento = 0.85;
        }
        else
        {
            if(cantidad > 7)
            {
                descuento = 0.80;
            }
            else
            {
                if(cantidad > 14)
                {
                    descuento = 0.65;
                }
                else
                {
                    descuento = 1;
                }
            }
        }

        
        respuesta = confirm("Desea continuar?");
    }

    mensaje = "La cantidad de Lápices es: " + cantidadLapiz;
    mensaje = mensaje + "<br> la cantidad de lapiceras es: " + cantidadLapicera;
    mensaje = mensaje + "<br> ";
    mensaje = mensaje + "<br> ";

    document.write(mensaje);
}
