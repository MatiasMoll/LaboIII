window.onload=function(){
            var usuario = "matias";
            var contraseña = "1234";
            var btnEnviar = document.getElementById("btnEnviar");
            btnEnviar.onclick=function(){
                var usuarioIngresado = document.getElementById("txtNick").value;
                var contraseñaIngresada = document.getElementById("txtPass").value;
                if(usuario == usuarioIngresado && contraseña == contraseñaIngresada){
                    alert("Bienvenido al sistema");
                }else
                {
                    alert("Combinacion de usuario y contraseña incorrectos");
                }
            }
            var btnLimpiar = document.getElementById("btnLimpiar");
            btnLimpiar.onclick= function(){
                    document.getElementById("txtNick").value = "";
                    document.getElementById("txtPass").value = "";
                }
        }