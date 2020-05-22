window.onload = function(){          
    var http = new XMLHttpRequest();
    http.onreadystatechange = function(){                       
        if(http.readyState ==  4 && http.status == 200){
            MostrarGrilla(JSON.parse(http.responseText));
            
        }
    }
    http.open("GET","http://localhost:3000/personas",true);
    http.send();

    var botonAbrir = this.document.getElementById("botonAbrir");
    botonAbrir.onclick = this.ContenedorAgregar;

}

function MostrarGrilla(jsonObj){
    var tabla = document.getElementById("cuerpo");
    
    for(var i = 0;i<jsonObj.length;i++){
        var fila = "<tr><td>"+jsonObj[i].nombre+"</td><td>"+jsonObj[i].apellido+"</td><td>"+jsonObj[i].fecha+"</td><td>"+jsonObj[i].telefono+"</td></tr>";
        tabla.innerHTML += fila;
    }
}

function ContenedorAgregar(){
    document.getElementById("contenedor").hidden = false;
    var btnCerrrar = document.getElementById("btnCerrar");
    btnCerrrar.onclick = function(){
        document.getElementById("contenedor").hidden = true;
    }

    
}

