

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
        var id = jsonObj[i].id;
        var tr = document.createElement("tr");
        tr.setAttribute("idPersona",jsonObj[i].Id);
        var tdNombre = document.createElement("td");
        var tdApellido = document.createElement("td");
        var tdFecha = document.createElement("td");
        var sexo = document.createElement("td");

        tdNombre.appendChild(document.createTextNode(jsonObj[i].nombre));
        tr.appendChild(tdNombre);        
        tdApellido.appendChild(document.createTextNode(jsonObj[i].apellido));
        tr.appendChild(tdApellido);        
        tdFecha.appendChild(document.createTextNode(jsonObj[i].fecha));
        tr.appendChild(tdFecha);        
        sexo.appendChild(document.createTextNode(jsonObj[i].sexo));
        tr.appendChild(sexo); 
        tr.addEventListener("dblclick", ContenedorAgregar);
        tabla.appendChild(tr);
                
            
    }
}

function ContenedorAgregar(e){
    var boolSexoM = false;
    var contenedor = document.getElementById("contenedor");
    contenedor.hidden = false;
       
    document.getElementById("txtNombre").value= e.target.parentNode.childNodes[0].textContent;
    document.getElementById("txtApellido").value=e.target.parentNode.childNodes[1].textContent;
    document.getElementById("txtNacimiento").value=e.target.parentNode.childNodes[2].textContent;
    if(e.target.parentNode.childNodes[3].textContent == 'Female'){
        document.getElementById("txtSexoF").checked = true;
        boolSexoM = false;
    }else if(e.target.parentNode.childNodes[3].textContent == 'Male'){
        boolSexoM = true;
        document.getElementById("txtSexoM").checked = true;
    }
    var btnCerrrar = document.getElementById("btnCerrar");
    btnCerrrar.onclick = function(){
        contenedor.hidden = true;
    }
    var btnModificar = document.getElementById("btnModificar");
    btnModificar.onclick = function(){
        document.getElementById("spinner").hidden = false;
        var sexoP;
        var http = new XMLHttpRequest();
        http.onreadystatechange = function(){         
            console.log(http.readyState);              
            if(http.readyState ==  4){
                document.getElementById("spinner").hidden = true;
                if(http.status == 200){
                    alert("Persona Modificada"); 
                }                        
            }
        }
        if(boolSexoM){
            sexoP = 'Male';
        }else{
            sexoP = 'Female';
        }
        var nuevaPersona = {
            nombre:document.getElementById("txtNombre"),
            apellido:document.getElementById("txtApellido"),
            fecha:document.getElementById("txtNacimiento"),
            sexo: sexoP
        }
        http.open("POST","http://localhost:3000/editar",true);
        http.send(JSON.stringify(nuevaPersona));
    }
}


