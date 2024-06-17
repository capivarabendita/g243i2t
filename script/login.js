const btnlogin = document.querySelector("#btnlogin");
const inputUsuario = document.querySelector("#usuario");
const inputsenha = document.querySelector("#senha");
let usuariologado = null;

(()=> {
    usuariologado = localStorage.getItem("usuario");
    if(usuariologado){
        window.location.href = "/tmp/guest-flg3kk/Downloads/g243i2t-main/logado.html";

    }})();

    btnlogin.onclick = (e) =>{
        e.preventDefault();
        let usuario = inputUsuario.value;
        let senha = inputsenha.value;
        if(usuario){
            if(usuario ==="cabranoiada"){
                if(senha === "ASQWgsaw"){
                    window.location.href = "/tmp/guest-flg3kk/Downloads/g243i2t-main/logado.html";
                }
            }else{
                inputUsuario.focus();
            }
        }
    }
