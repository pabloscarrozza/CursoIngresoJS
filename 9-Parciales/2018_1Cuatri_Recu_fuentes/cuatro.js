function mostrar()
{
    var numeroUno;
    var numeroDos;
    var suma;
    var mensaje;

    numeroUno = prompt("Ingrese el primer número:");
    numeroDos = prompt("Ingrese el segundo número:");

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    suma = numeroUno + numeroDos;

    if(numeroUno == numeroDos)
    {
        mensaje = numeroUno + " y " + numeroDos;
    }
    else
    {
        if(numeroUno > numeroDos)
        {
            mensaje = numeroUno / numeroDos;
        }
        else
        {
            mensaje = suma;
        }
    }
    
    alert(mensaje);

    if(suma < 50)
    {
        alert("La suma es " + suma + " y es menor a 50");
    }
}
