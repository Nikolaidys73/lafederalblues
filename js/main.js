const productos = [
    {nombre: "CD A LO LEJOS", precio: 2000},
    {nombre: "REMERA A LO LEJOS", precio: 2500},
    {nombre: "REMERA AUTOGRAFIADA", precio: 3000},
    {nombre: "CD DEMO", precio: 2000},
    {nombre: "REMERA DEMO", precio: 2000},
    {nombre: "REMERA DEMO AUTOGRAFIADA", precio: 2500},
];
let carrito = []

let seleccion = prompt("Hola, desea adquirir algun producto? Ingrese si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresa si o no")
    seleccion = prompt ("Hola, desea adquirir algun producto?")
}

if(seleccion == "si"){
    alert("A continuaciòn nuestra lista de productos")
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todosLosProductos.join(" - "))
} else if (seleccion == "no"){
    alert("Gracias, vuelva pronto!")
}

while(seleccion != "no"){
    let producto = prompt("agrega un producto, escribiendo la opciòn en mayusculas igual a como fue detallada c/u. Ej: CD A LO LEJOS")
    let precio = 0

    if(producto == "CD A LO LEJOS" ||  producto == "REMERA A LO LEJOS" || producto == "REMERA AUTOGRAFIADA" || producto == "CD DEMO" ||  producto == "REMERA DEMO" ||  producto == "REMERA DEMO AUTOGRAFIADA" ){
        switch(producto) {
            case "CD A LO LEJOS":
                precio = 2000;
                break;
            case "REMERA A LO LEJOS":
                precio = 2500;
                break;
            case "REMERA AUTOGRAFIADA":
                precio = 3000;
                break;
            case "CD DEMO":
                precio = 2000;
                break;
            case "REMERA DEMO":
                precio = 2000;
                break;
            case "REMERA DEMO AUTOGRAFIADA":
                precio = 2000;
                break;
                default:
                    break;
        }
        
        carrito.push({producto, precio})
        console.log(carrito)
    } else {
        alert("no tenemos ese producto disponible")
    }

    seleccion = prompt("Desea adquirir algun producto mas?")
    while(seleccion === "no"){
        alert("Gracias por su compra! Vuelva pronto!")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, Precio total: ${carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio, 0)
console.log(`el total a pagar por su compra es: ${total}`)