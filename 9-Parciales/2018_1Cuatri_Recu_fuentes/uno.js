//  Pablo Scarrozza

function mostrar()
{
    var largo;
    var ancho;
    var perimetro;

    largo = prompt("Ingrese en largo:" , "Largo");
    ancho = prompt("Ingrese el ancho:" , "Ancho");

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    perimetro = 2 * (largo + ancho);

    alert("El perímetro es: " + perimetro);
}
