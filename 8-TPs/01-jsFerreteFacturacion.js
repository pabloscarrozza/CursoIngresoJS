/*  Pablo Scarrozza
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var resultadoSuma;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    resultadoSuma = precioUno + precioDos + precioTres;

    alert("La suma es: " + resultadoSuma);
}
function Promedio () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var resultadoPromedio;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    resultadoPromedio = (precioUno + precioDos + precioTres) / 3;

    alert("El promedio es: " + resultadoPromedio);
}
function PrecioFinal () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var resultadoFinal;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    resultadoFinal = (precioUno + precioDos + precioTres) * 1.21;

    alert("El precio final con IVA es: " + resultadoFinal);
}