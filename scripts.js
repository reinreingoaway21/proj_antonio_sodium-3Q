function logcheck(){
    if(document.getElementById("uname").value === ""){
        if(document.getElementById("psw").value === ""){
        document.getElementById("check").innerHTML = "Please enter your username and/or password"
    }else{
        document.getElementById("check").innerHTML = "Please enter your username"
    }
}
if(document.getElementById("uname").value !== ""){
    if(document.getElementById("psw").value !== ""){
        document.getElementById("check").innerHTML = "Please enter your  password"
    } else{
        ocument.getElementById("check").innerHTML = "Login Success"

    }
}

}