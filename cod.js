let habitacion = parseInt (prompt("Ingrese su numero de habitacion"));

let numeroHabitacion = document.getElementById("num");
numeroHabitacion.innerText = `Habitacion ${habitacion}`;

let pedidos = document.getElementById("pedidos");

let jugo = document.getElementById("1");
let trago = document.getElementById("2");
let entrada = document.getElementById("3");
let pp = document.getElementById("4");

jugo.onclick = () => {
    pedidos.innerText = "snoothie"
}
trago.onclick = () => {
    pedidos.innerText = "trago"
}
entrada.onclick = () => {
    pedidos.innerText = "entrada"
}
pp.onclick = () => {
    pedidos.innerText = "Plato"
}