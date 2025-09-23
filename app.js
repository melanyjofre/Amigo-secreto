// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; //array para almacenar los nombres

function agregarAmigo() 
{  //función para agregar amigos
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") { // valida campo vacío
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre); // agrega un amigo al array
    input.value = ""; // limpia campo de entrada
    actualizarListaAmigos();
}

function actualizarListaAmigos() 
{ //funcion para actualizar la lista de amigos
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpia la lista antes de actualizar

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() 
{ //función para sortear un amigo
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];

    // muestra el resultado en la página
    let resultado = document.getElementById("resultado");
    resultado.textContent = "El amigo secreto es: " + amigoSorteado;
}







