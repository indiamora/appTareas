//Ejercicio 1 

// const tareas = [
//     {
//     Titulo: "Maquetar HTML",
//     Estado: "Terminado",
//     },
//     {
//     Titulo: "Estilar css",
//     Estado: "En progreso",
//     },
//     {
//     Titulo: "Crear js",
//     Estado: "Pendiente",
//     },
//     ]; 
    
    // console.log (tareas);


//Ejercicio 2 

// function agregarTareas (titulo, estado) {
//     tareas.push ({Titulo: titulo, Estado: estado});
//     return tareas; 
// }

// console.log (agregarTareas("Diseñar react", "Por trabajar"));


// const mostrarTareas = (estado) => {}

// const progress = tareas.find ((obj) => {
//     console.log(obj)
//     tareas.Estado === "En progreso"
// })

// console.log (progress ("En progreso")); //ME DA MAL

//Ejercicio 3 

// const listarTareas = (estado) => {
// const estadoMin = estado.toLowerCase ()
//     if (estadoMin === "En Progreso" || estadoMin === "Pendiente" || estadoMin === "Terminado") {
//         const listadoTareas = tareas.filter (tarea => tarea.Estado.toLowerCase === estadoMin);
//         return listadoTareas;
//     }
//     return tareas;
// }

// console.log (listarTareas("Pendiente"));

//Ejercicio 4 

// const modificarDos = (titulo, estado) => {
//     if (
//         titulo === "Maquetar HTML" ||
//         titulo === "Estilar css" ||
//         titulo === "Crear js" ||
//         titulo === "Diseñar React"
//     ) {
//     return ("Ya existe") }
//     else {
//         tareas.push ({Titulo: titulo, Estado: estado})
//         // console.log (tareas)
//         return tareas
//     }
// };

// console.log (modificarDos("Estudiar SASS","Pendiente"))

//Ejercicio 5 
// const existeTarea = (texto) => {
// const tareasFiltradas = []
// tareas.forEach(tareasMencionadas => {
//     if(tareasMencionadas.Titulo.includes(texto)) {
//         tareasFiltradas.push(tareasMencionadas)
//     }
// })
//   return tareasFiltradas
// }

// console.log(existeTarea("js"))