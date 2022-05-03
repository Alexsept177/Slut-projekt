const none = document.querySelectorAll(".del")


function showCode1(){
    none[0].classList.add("show-code")
    none[1].classList.remove("show-code")
    none[2].classList.remove("show-code")
    none[3].classList.remove("show-code")
}


function showCode2(){
    none[0].classList.remove("show-code")
    none[1].classList.add("show-code")
    none[2].classList.remove("show-code")
    none[3].classList.remove("show-code")
}

function showCode3(){
    none[0].classList.remove("show-code")
    none[1].classList.remove("show-code")
    none[2].classList.add("show-code")
    none[3].classList.remove("show-code")
}

function  showCode4(){
    none[0].classList.remove("show-code")
    none[1].classList.remove("show-code")
    none[2].classList.remove("show-code")
    none[3].classList.add("show-code")
}

function showEX1(){
    none[0].classList.add("show-code")
}
