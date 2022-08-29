/*  Pablo Scarrozza
Realizar el algoritmo que permita el ingreso de 10 bolsas de alimento por prompt,con los kilos (validar entre 0 y 500),
sabor validar(carne vegetales pollo) e informar por alert:
a) El promedio de los kilos totales.
b) El mas liviano y su sabor
c) La cantidad de sabor carne y el promedio de kilos de sabor carne*/
function mostrar()
{
    var contador;
    var kilos;
    var sabor;
    var kilosTotales;
    var promedioKilosTotales;
    var banderaMasLiviano;
    var saborMasLiviano;
    var kilosMasLiviano;
    var contadorCarne;
    var promedioKilosCarne;
    var sumaKilosCarne;
    
    contador = 0;
    kilosTotales = 0;
    banderaMasLiviano = true;
    sumaKilosCarne = 0;
    contadorCarne = 0;

    while(contador < 10)
    {
        kilos = prompt("Ingrese los kilos");
        while(isNaN(kilos) == true && kilos < 1 && kilos > 500)
        {
            kilos = prompt("Ingrese los kilos");
        }

        sabor = prompt("Ingrese el sabor (carne, vegetales o pollo)");
        while(sabor != "carne" && sabor != "vegetales" && sabor != "pollo")
        {
            sabor = prompt("Ingrese el sabor (carne, vegetales o pollo)");
        }

        if(banderaMasLiviano == true)
        {
            kilosMasLiviano = kilos;
            saborMasLiviano = sabor;
            banderaMasLiviano = false;
        }
        else
        {
            if(kilos < kilosMasLiviano)
            {
                kilosMasLiviano = kilos;
                saborMasLiviano = sabor;
            }
        }

        if(sabor == "carne")
        {
            contadorCarne++;
            sumaKilosCarne = sumaKilosCarne + kilos;
        }


        kilosTotales = kilosTotales + kilos;
        contador++;
    }

    promedioKilosTotales = kilosTotales / contador;
    promedioKilosCarne = sumaKilosCarne / contadorCarne;

    mensaje = "El promedio de kilos totales es de: " + promedioKilosTotales;
    mensaje = mensaje + "<br> El más liviano es de " + kilosMasLiviano + "kilos, y su sabor es " + saborMasLiviano;
    mensaje = mensaje + "<br> La cantidad sabor carne es de " + contadorCarne;
    mensaje = mensaje + "<br> El promedio de kilos de sabor carne es de " + promedioKilosCarne;

    document.write(mensaje);

}
//8:25