let habitacion;
let total = [];
let habitacionStorage = localStorage.getItem("habitacion"); //capturando el session
let totalStorage = localStorage.getItem ("total")
let numeroHabitacion = document.getElementById("num"); // capturando el h2
let cierre = document.getElementById("cierreUsuario") // capturando el boton fin de sesion
let pedidos = document.getElementById("pedidos"); //capturando el h2 pedidos
let lista = document.getElementById("cont");

//si hay habitacion en el storage
if(habitacionStorage){
  habitacion = habitacionStorage;
  numeroHabitacion.innerText = `Habitacion ${habitacion}`;
}else{
  habitacion = prompt("Ingrese su numero de habitacion");
  localStorage.setItem("habitacion", habitacion);
  Swal.fire({
    title: `Bienvenido su habitacion es ${habitacion}`,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
};

//remueve el localstorage
cierre.addEventListener("click", () => {
localStorage.removeItem("habitacion");;
})

const productos = [
    { id: 1, nombre: "smoothie", precio: 1400, img: "https://www.thereciperebel.com/wp-content/uploads/2022/04/how-to-make-a-smoothie-TRR-1200-32-of-34.jpg" },
    { id: 2, nombre: "trago", precio: 2000, img: "https://www.noticiasmontehermoso.com.ar/wp-content/uploads/2022/01/Tragos-para-la-pileta-o-la-playa.jpg" },
    { id: 3, nombre: "entrada", precio: 2000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXIhubBky-izY1v6TBKe5nZd4r7xVtUWmYtqr3L8uHosclVuDRkzsY5UM3C-3jBK4iuSI&usqp=CAU" },
    { id: 4, nombre: "plato", precio: 2800, img: "https://i.pinimg.com/736x/70/dc/38/70dc38930f0f9b306bfb38798b849d4c.jpg" },
];

//creando el producto
productos.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
        <h3>${item.id}</h3>
        <p>${item.nombre}</p>
        <img src=${item.img} alt=""><br>
        <b>$${item.precio}</b><br>
        <button id="boton${item.id}">Agregar</button>
    `;
    document.body.append(div);
    
    //boton llamando a la funcion
    let boton = document.getElementById(`boton${item.id}`);
    boton.addEventListener("click", () => agregar(item.id));
});

//funcion para agregar el pedido
const agregar = (id) => {
    let encontrado = productos.find((item) => item.id === id);
    total.push(encontrado.nombre + " $" + encontrado.precio);
    pedidos.innerHTML = "";
    total.forEach((pedido) => {
        let li = document.createElement("li");
        li.textContent = pedido;
        pedidos.appendChild(li);
    });
};

if(totalStorage){
    total = totalStorage;
    lista.innerHTML = `${pedidos}`;
  }else{
    pedidos.innerText = "No hay pedidos";
  };