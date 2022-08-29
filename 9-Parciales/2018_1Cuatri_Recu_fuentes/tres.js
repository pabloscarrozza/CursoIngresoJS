//  Pablo Scarrozza

function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;

    precio = prompt("Ingrese el precio:" , "Precio");
    descuento = prompt("Ingrese el porcentaje de descuento:" , "Descuento");

    precioFinal = precio - (precio * descuento / 100);

    document.getElementById("elPrecioFinal").value = precioFinal;
}
