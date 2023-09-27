
img = document.querySelector("img")
function borde(){
    if (img.classList.contains("bordeoff")){
        img.classList.toggle('bordeon')
    }
    else{
        img.classList.toggle("bordeoff")
    }
}