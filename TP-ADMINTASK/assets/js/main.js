let lista = [];

function agregarTarea(nuevaTarea) {
  if (nuevaTarea.trim() === "") {
    alert("No puede estar vacío");
  } else {
    lista.push(nuevaTarea);
    alert(`Tarea "${nuevaTarea}" se agregó correctamente`);
  }
}

function listarTarea() {
  if (lista.length === 0) {
    alert("La lista está vacía");
  } else {
    let tareas = "Tareas: \n";
    for (let i = 0; i < lista.length; i++) {
      tareas += `${i + 1}- ${lista[i]}\n`
    }
    alert(tareas)
  }
}

function eliminarTarea(){
  if (lista.length === 0){
    alert("Está vacía");
  return;
  }
    listarTarea()
    let tareaEliminar = prompt("Ingrese el nombre de la tarea a eliminar: ");
    let indice = lista.indexOf(tareaEliminar);

    if (indice !== -1){
      lista.splice(indice, 1);
      alert(`Tarea "${tareaEliminar}" eliminada correctamente`);
    } else {
      alert(`No se encuentra la tarea`);
    }
  }

function menu() {
  let opcion = 1;

  while (opcion !== 0) {

    opcion = parseInt(prompt(` Menu:
    1- Agregar Tarea
    2- Listar Tarea
    3- Eliminar Tarea
    4- Editar Tarea
    0- Salir
    
    Seleccione una opción: `));

    switch (opcion) {
      case 1:
        agregarTarea(prompt("Ingresar el nombre de la nueva tarea: "));
        break;
      case 2:
        listarTarea();
        break;
      case 3:
        eliminarTarea();
        break;
      case 0:
        alert("Gracias por probar el código");
        break;
      default:
        alert("Opción incorrecta");
        break;
    }
  }
}

menu();