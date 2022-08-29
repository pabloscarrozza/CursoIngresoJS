// Pablo Scarrozza
/*Se ingresan 5 importes, marca del producto y pais de origen (China, Uruguay o Paraguay).
Calcular y mostrar:
a.    Minimo importe con su pais 
b.    Maximo importe con su marca
c.    Promedio importe
d.    Cantidad de productos de China
e.    Sobre el maximo encontrado aplicar un descuento del 10% a dicho importe.*/
function mostrar()
{
    var contador;
    var marca;
    var pais;
    var importe;
    var banderaMinimoImporte;
    var importeMinimo;
    var paisMinimoImporte;
    var banderaMaximoImporte;
    var importeMaximo;
    var marcaMaximoImporte;
    var promedioImporte;
    var sumaImporteTotal;
    var contadorChina;
    var maximoImporteConDescuento;

    contador = 0;
    banderaMinimoImporte = true;
    banderaMaximoImporte = true;
    sumaImporteTotal = 0;
    contadorChina = 0;

    while(contador < 5)
    {
        importe = prompt("Ingrese un importe");
        while(isNaN(importe) == true && importe < 1)
        {
            importe = prompt("Ingrese un importe");
        }

        marca = prompt("Ingrese la marca");
        while(isNaN(marca) == false)
        {
            marca = prompt("Ingrese la marca");
        }

        pais = prompt("Ingrese el pais (China, Uruguay o Paraguay");
        while(pais != "China" && pais != "Uruguay" && pais != "Paraguay")
        {
            pais = prompt("Ingrese el pais (China, Uruguay o Paraguay");
        }

        if(banderaMinimoImporte == true)
        {
            importeMinimo = importe;
            paisMinimoImporte = pais;
            banderaMinimoImporte = false;
        }
        else
        {
            if(importe < importeMinimo)
            {
                importeMinimo = importe;
                paisMinimoImporte = pais;
            }
        }

        if(banderaMaximoImporte == true)
        {
            importeMaximo = importe;
            marcaMaximoImporte = marca;
            maximoImporteConDescuento = importeMaximo * 0.9;
            banderaMaximoImporte = false;
        }
        else
        {
            if(importe > importeMaximo)
            {
                importeMaximo = importe;
                marcaMaximoImporte = marca;
                maximoImporteConDescuento = importeMaximo * 0.9;
            }
        }

        if(pais == "China")
        {
            contadorChina++;
        }

        sumaImporteTotal = sumaImporteTotal + importe;
        contador++;
    }

    promedioImporte = sumaImporteTotal / contador;

    mensaje = "El minimo importe es: " + importeMinimo + " y su pais es: " + paisMinimoImporte;
    mensaje = mensaje + "<br> El maximo importe es" + importeMaximo + " y su marca es: " + marcaMaximoImporte;
    mensaje = mensaje + "<br> El promedio total del importe es: " + promedioImporte;
    mensaje = mensaje + "<br> La cantidad de productos de china es: " + contadorChina;
    mensaje = mensaje + "<br> El maximo encontrado con un 10% de descuento es: " + maximoImporteConDescuento;

    document.write(mensaje);

}
//13:47
