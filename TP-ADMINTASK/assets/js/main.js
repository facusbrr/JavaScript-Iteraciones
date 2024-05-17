let lista = [];

function agregarTarea(nuevaTarea) {
  if (nuevaTarea.trim() === "") {
    console.log("No puede estar vacío");
  return;
  } else {
    lista.push(nuevaTarea)
    console.log(`Tarea "${nuevaTarea}" se puso correctamente`);
  }
}

function listarTarea(){
  if (lista.length === 0){
    console.log ("La lista está vacía")
  return;
  }else{
    for (let i = 0; i < lista.length; i++){
        console.log (`${i + 1}- ${lista[i]}`);
    }
  }
}
