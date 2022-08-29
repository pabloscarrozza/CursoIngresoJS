//Scarone Jonatan
/*Una pinturería necesita un programa que permita la carga de productos vendidos, 
junto a los datos del vendedor. Se requiere ingresar los siguientes campos:
-Código del vendedor (v100 -v102 -v103)
-Producto elegido: (Pintura, Barniz, Enduido)
-Total de la venta.
No hay un límite total de ventas.
Una vez finalizada la carga de productos se debe calcular la comisión del vendedor.
-Si el vendedor superó la cantidad de ventas de $7000 le corresponde una comisión del %20. Sino del %10.
Se debe mostrar:
*El producto más comprado.
*El código del vendedor con más dinero recaudado y la cantidad de ventas realizadas.
 (Mostrando el código, la cantidad de dinero recaudada y la cantidad total de ventas).*/
 {
    var codigo;
    var producto;
    var totalVenta;
    var respuesta;
    var porcentaje;
    var contadorBarniz;
    var contadorEnduido;
    var contadorPintura;
    var productoMasVendido;
    var banderaMasRecaudado;
    var vendedorMasRecaudo;
    var masRecaudado;
    var contadorVentas;
    var acumuladorVentas;
  
    contadorVentas = 0;
    acumuladorVentas = 0;
    banderaMasRecaudado = 0;
    contadorBarniz = 0;
    contadorEnduido = 0;
    contadorPintura = 0;
    respuesta = true;
  
    while(respuesta == true)
    {  codigo = prompt("Ingrese el codigo del vendedor: v100, v102 o v103");
      while(codigo!= "v100" && codigo != "v102" && codigo != "v103")
      {
        codigo = prompt("Ingrese el codigo del vendedor: v100, v102 o v103");
      }
      producto = prompt("Ingrese le producto: pintura, barniz o enduido");
      while(producto != "pintura" && producto != "barniz" && producto != "enduido")
      {
        producto = prompt("Ingrese le producto: pintura, barniz o enduido");
      }
      totalVenta=prompt("Ingrese el total de la venta mayor a 0");
      totalVenta = parseInt(totalVenta);
      while(isNaN(totalVenta)==true || totalVenta < 0)
      {
        totalVenta=prompt("Ingrese el total de la venta mayor a 0");
        totalVenta = parseInt(totalVenta);
      }
      if(totalVenta > 7000)
      {
        porcentaje = 0.80;
      }
      else
      {
        porcentaje = 0.90;
      }
      switch(producto)
      {
        case "barniz":
          contadorBarniz++;
        break;
        case "enduido":
          contadorEnduido++;
        break;
        case "pintura":
          contadorPintura++;
        break;      
        
      }
      if(contadorBarniz > contadorEnduido && contadorBarniz > contadorPintura)
      {
        productoMasVendido = "barniz";
      }
      else
      {
        if(contadorEnduido > contadorPintura)
        {
          productoMasVendido = "enduido";
        }
        else
        {
          productoMasVendido = "pintura";
        }
      }
      if(banderaMasRecaudado == 0)
      {
        masRecaudado = totalVenta;
        vendedorMasRecaudo = codigo;
        banderaMasRecaudado = 1;
      }
      else
      {
        if(totalVenta > masRecaudado)
        {
          
          masRecaudado = totalVenta;
          vendedorMasRecaudo = codigo;
        }
      }
      contadorVentas++;
      acumuladorVentas = acumuladorVentas + totalVenta;
  
  
      respuesta = confirm("Desea ingresar mas datos?");
    }
    mensajeA = " el producto mas comprado es " + productoMasVendido;
    mensajeB = " el codigo del vendedor que mas recaudo es "  + vendedorMasRecaudo + " el dinero recaudado es " + acumuladorVentas + " y la cantidad de ventas es " + contadorVentas;
    mensajeFinal = mensajeA + mensajeB;
    alert(mensajeFinal);
  }
  