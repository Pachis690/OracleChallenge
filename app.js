// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*
Jahil Ivan Gonzalez Orozco 
Fecha: 21/01/2025
*/

// Lista de amigos
let amigos = [];
let cantidadDeAmigos = 0;
let amigoIngresado = "";

function agregarAmigo(){


// input del campo de entrada
    anadirAmigo = capturaAmigo();
    
    if (anadirAmigo != ""){

if (amigos.includes(anadirAmigo)){
        alert("Ya habías ingresado a: " + anadirAmigo);
}
    else {cantidadDeAmigos += 1;
        amigos.push(anadirAmigo);
        document.getElementById("amigo").value = '';
}
    document.getElementById("amigo").value = '';
    };
    actualizaListaDeAmigos(amigos);
};

function capturaAmigo(){
    let capturaMayusculas ="";
    let captura = document.getElementById("amigo").value;
    //metodo para poner en mayus los nombre y evitar mala ortografia
    capturaMayusculas = captura.toUpperCase();
    if (captura != "" ){
        return(capturaMayusculas);
        }
    else {
        alert("Por favor, inserte un nombre");
        return("");
         };
    }

function actualizaListaDeAmigos(lista){
    /*
    Recorre el array amigos y agrega cada nombre como un elemento <li> dentro de una lista HTML. 
    Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
 */
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";
    lista.forEach(elemento => {
        const li = document.createElement("li");
        li.textContent = elemento;
        listaHTML.appendChild(li);
    });
}

function sortearAmigo(){
    /*
    Función que selecciona de manera aleatoria uno de los nombres almacenados en el array amigos. 
        Usa Math.random() y Math.floor() para obtener un índice aleatorio.
    */
if (cantidadDeAmigos == 0){
    let limpiaLista = document.getElementById("listaAmigos");
        limpiaLista.innerHTML = "";
        alert("Ingresar algunos amigos para sortear");
    return;
   }
let amigoSorteado =  Math.floor(Math.random()*cantidadDeAmigos);
    let listaHTML = document.getElementById("listaAmigos");
   listaHTML.innerHTML = `Tu amigo secreto es: ${amigos[amigoSorteado]}`;
   cantidadDeAmigos = 0;
   amigos = [];
}

