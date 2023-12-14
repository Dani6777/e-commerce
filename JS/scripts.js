//Productos
const productos =[
    {
        id:'postre-01',
        titulo:'Postre de fresa',
        imagen:"./RESOURCES/postre-01.jpg",
        categoria:{
            nombre:'Pasteleria',
            id:'pasteleria'
        },
        precio: 20000
    },
    {
        id:'torta-01',
        titulo:'Pastel de durazno',
        imagen:'./RESOURCES/torta-01.jpg',
        categoria:{
            nombre:'Reposteria',
            id:'reposteria'
        },
        precio: 1000
    },
    {
        id:'cafe-01',
        titulo:'Cafe Expresso',
        imagen:'./RESOURCES/cafe-01.jpg',
        categoria:{
            nombre:'Cafes',
            id:'cafes'
        },
        precio: 1000
    },
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categorias");
const tituloPrincipal = document.querySelector("#titulo-principal");

function cargarProductos(productosElegidos){
    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto =>{
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML =`
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        `;
        contenedorProductos.append(div);
    })
}
cargarProductos(productos);
botonesCategorias.forEach(boton =>{
    boton.addEventListener("click", (e)=>{
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        if(e.currentTarget.id != "todos"){
            const productosCategoria = productos.find(producto =>producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productosCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto =>producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }else{
            tituloPrincipal.innerText = "Catalogo";
            cargarProductos(productos);
        }   
    })
})