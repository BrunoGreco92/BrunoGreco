let productos =
    [
        {
            "id": 1,
            "name": "Chief",
            "price": 500000,
            "description": "Maquina Chief bla bla bla",
            "type": "Maquinaria",
            "img": "img/chief.jpg"
        },
        {
            "id": 2,
            "name": "Davidson",
            "price": 750000,
            "description": "Maquina Davidson bla bla bla",
            "type": "Maquinaria",
            "img": "img/Davidson.webp"
        },
        {
            "id": 3,
            "name": "Multilith",
            "price": 1000000,
            "description": "Maquina Multilith bla bla bla",
            "type": "Maquinaria",
            "img": "img/multilith1250.jpeg"
        },

        {
            "id": 4,
            "name": "Solna",
            "price": 1500000,
            "description": "Maquina Solna bla bla bla",
            "type": "Maquinaria",
            "img": "img/Solna.webp"
        },

        {
            "id": 5,
            "name": "Engranajes",
            "price": 15000,
            "description": "Engranajes bla bla bla",
            "type": "Repuestos",
            "img": "img/Engranajes.webp"
        },

        {
            "id": 6,
            "name": "Rodillos",
            "price": 50000,
            "description": "Rodillos bla bla bla",
            "type": "Repuestos",
            "img": "img/Rodillos.webp"
        },


        {
            "id": 7,
            "name": "Numeradora",
            "price": 75000,
            "description": "Numeradora bla bla bla",
            "type": "Repuestos",
            "img": "img/Numeradora.PNG"
        }

    ];


productos.forEach(gg => { console.log(gg.name) });

let contenedorProductos = document.getElementById('Maquinaria');
let contenedorRepuestos = document.getElementById("Repuestos");

productos.forEach(producto => {
    let htmlproducto = '<div class="item_flex">' +
        '<img src="' + producto.img + '"  width="150" height="100" alt="">' +
        '<h3>' + producto.name + '</h3>' +
        '<span class="precio">$' + producto.price + '</span></br>' +
        '<input class="descripcion" type="hidden" value="' + producto.description + '"  />' +
        '<input class="productid" type="hidden"  value="' + producto.id + '" />' +
        '<input class="productname" type="hidden"  value="' + producto.name + '" />' +
        '<input class="productprice" type="hidden"  value="' + producto.price + '" />' +
        '<button class="botonvermas" type="button">' +
        '<a class="open-modal">Ver Más</a>' +
        '</button>' +
        '</div>';

    if (producto.type == "Maquinaria") {
        contenedorProductos.innerHTML += htmlproducto

    }
    else if (producto.type == "Repuestos") {
        contenedorRepuestos.innerHTML += htmlproducto

    }
})


const modal = document.getElementById('myModal');
const modalCarrito = document.getElementById('myModalCarrito');
const btnComprar = document.getElementById('Comprar');
const openModal = document.getElementsByClassName('botonvermas')[0];
const closeModal = document.querySelector('.close');
const closeModal2 = document.querySelector('.close2');


document.addEventListener('click', (event) => {
    if (event.target.matches('.open-modal')) {
        modal.style.display = 'block';
        const productoDiv = event.target.closest('.item_flex');
        const descripcionInput = productoDiv.querySelector('.descripcion');
        const descripcion = descripcionInput.value
        const productidInput = productoDiv.querySelector('.productid');
        const productid = productidInput.value
        const productnameInput = productoDiv.querySelector('.productname');
        const productname = productnameInput.value
        const productpriceInput = productoDiv.querySelector('.productprice');
        const productprice = productpriceInput.value
        document.getElementById('Descripcion').textContent =
            descripcion;
        btnComprar.dataset.descripcion = descripcion;
        btnComprar.dataset.productid = productid;
        btnComprar.dataset.productname = productname;
        btnComprar.dataset.productprice = productprice;
        document.getElementById('NameModal').textContent =
            productname;
    }
    if (event.target.matches('.open-modal-carrito')) {
        modalCarrito.style.display = 'block';
        let carrito = document.getElementById("Carrito");
        Object.keys(localStorage).forEach(function (key) {
            let itemCarrito = JSON.parse (localStorage.getItem(key));

            carrito.innerHTML += ' <div class="comentario">'+
                   '<p><strong<u> '+ itemCarrito.name +' </u>:</strong>$'+ itemCarrito.price+'</p>'+
                '</div>'
        });
    }

});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

closeModal2.addEventListener('click', () => {
    modalCarrito.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        modalCarrito.style.display = 'none' ;
    
        
    }
});

btnComprar.addEventListener("click", function () {


    let productId = this.dataset.productid;
    let name = this.dataset.productname;
    let price = this.dataset.productprice;
    let pedido = {
        "id": Date.now(),
        "productoId": productId,
        "name": name,
        "price": price,
        "amount": 1
    }
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem(pedido.id, JSON.stringify(pedido));
    }

});