
// calabaza = document.getElementById("calabaza").value;
// esqueleto = document.getElementById("esqueleto").value;
// bruja = document.getElementById("bruja").value;
boton = document.getElementById("boton");
resultado = document.getElementById("resultado");

function sumaFunc(){
    calabazaTotal = parseFloat(document.getElementById("calabaza").value);
    esqueletoTotal = parseFloat(document.getElementById("esqueleto").value);
    brujaTotal = parseFloat(document.getElementById("bruja").value);

    total = calabazaTotal + esqueletoTotal + brujaTotal;
    
    if(!isNaN(total) && total <= 10){
        resultado.innerHTML = "llevas " + total + " stickers";
    }
    else{
        resultado.innerHTML = "llevas demasiados stickers";
    }
};