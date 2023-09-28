caja = document.getElementById("caja");
dentro = document.getElementById("dentro");
error = document.getElementById("error");


function contraseña(){
    primero = document.getElementById("select1").value;
    segundo = document.getElementById("select2").value;
    tercero = document.getElementById("select3").value;

    intento = primero + segundo + tercero;
    console.log("tipo ", typeof intento)
    console.log("ttext ",  intento)

    contraseña1 = "911"
    contraseña2 = "714"

    if(intento == contraseña1 || intento == contraseña2){
        caja.classList.toggle("cajaon")
        dentro.classList.toggle("si")
        if(intento == contraseña1){
            dentro.innerHTML = "contraseña 1 correcta"
        }
        else{
            dentro.innerHTML = "contraseña 2 correcta"
        }
    }
    else {
        error.innerHTML = "contraseña incorrecta"
        
    }
}


















