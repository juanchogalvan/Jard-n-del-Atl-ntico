document.addEventListener('DOMContentLoaded', () => {
    // Datos de los cactus (puedes expandir esto)
    const cactusData = {
        cactus1: {
            nombre: "cactus 1 (cactus 1)",
            imagen: "imagenes/cactus1.jpg",
            info: "",
            cuidados: ""
        },
        cactus2: {
            nombre: "cactus 2 (cactus 2)",
            imagen: "imagenes/cactus2.jpg",
            info: "",
            cuidados: ""
        },
        cactus3: {
            nombre: "cactus 3 (cactus 3)",
            imagen: "imagenes/cactus3.jpg",
            info: "",
            cuidados: ""
        },
        cactus4: {
            nombre: "cactus 4 (cactus 4)",
            imagen: "imagenes/cactus4.jpg",
            info: "",
            cuidados: ""
        },
        cactus5: {
            nombre: "cactus 5 (cactus 5)",
            imagen: "imagenes/cactus5.jpg",
            info: "",
            cuidados: ""
        },
        cactus6: {
            nombre: "cactus 6 (cactus 6)",
            imagen: "imagenes/cactus6.jpg",
            info: "",
            cuidados: ""
        }
    };

    const cactusCards = document.querySelectorAll('.cactus-card');
    const modalCactus = document.getElementById('modalCactus');
    const cerrarModalCactus = modalCactus.querySelector('.cerrar-modal');
    const modalImg = document.getElementById('modalImg');
    const modalNombre = document.getElementById('modalNombre');
    const modalInfo = document.getElementById('modalInfo');
    const modalCuidados = document.getElementById('modalCuidados');
    const modalPrecio = document.getElementById('modalPrecio');
    const btnComprar = document.getElementById('btnComprar');

    const modalCompra = document.getElementById('modalCompra');
    const cerrarModalCompra = modalCompra.querySelector('.cerrar-modal');
    const formCompra = document.getElementById('formCompra');

    // Event listeners para abrir el modal de detalles del cactus
    cactusCards.forEach(card => {
        card.addEventListener('click', (event) => {
            // Asegurarse de que el clic no fue en el botón "Ver más" (ya que tiene su propio handler)
            if (!event.target.classList.contains('btn-ver-mas')) {
                const cactusId = card.dataset.id;
                const data = cactusData[cactusId];

                modalImg.src = data.imagen;
                modalImg.alt = data.nombre;
                modalNombre.textContent = data.nombre;
                modalInfo.textContent = `Información: ${data.info}`;
                modalCuidados.textContent = `Cuidados: ${data.cuidados}`;
                modalPrecio.textContent = `Precio: ${card.querySelector('.precio').textContent}`; // Toma el precio del HTML
                modalCactus.style.display = 'flex'; // Usar flex para centrar
            }
        });

        // Manejar el clic en el botón "Ver más" específicamente
        const btnVerMas = card.querySelector('.btn-ver-mas');
        btnVerMas.addEventListener('click', () => {
            const cactusId = card.dataset.id;
            const data = cactusData[cactusId];

            modalImg.src = data.imagen;
            modalImg.alt = data.nombre;
            modalNombre.textContent = data.nombre;
            modalInfo.textContent = `Información: ${data.info}`;
            modalCuidados.textContent = `Cuidados: ${data.cuidados}`;
            modalPrecio.textContent = `Precio: ${card.querySelector('.precio').textContent}`;
            modalCactus.style.display = 'flex';
        });
    });

    // Cerrar el modal de detalles del cactus
    cerrarModalCactus.addEventListener('click', () => {
        modalCactus.style.display = 'none';
    });

    // Abrir el modal de compra desde el modal de cactus
    btnComprar.addEventListener('click', () => {
        modalCactus.style.display = 'none'; // Cierra el modal del cactus
        modalCompra.style.display = 'flex'; // Abre el modal de compra
    });

    // Cerrar el modal de compra
    cerrarModalCompra.addEventListener('click', () => {
        modalCompra.style.display = 'none';
    });

    // Cerrar modales si se hace clic fuera de ellos
    window.addEventListener('click', (event) => {
        if (event.target === modalCactus) {
            modalCactus.style.display = 'none';
        }
        if (event.target === modalCompra) {
            modalCompra.style.display = 'none';
        }
    });

    // Manejar el envío del formulario de compra
    formCompra.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que la página se recargue

        const nombre = document.getElementById('nombreUsuario').value;
        const direccion = document.getElementById('direccion').value;
        const telefono = document.getElementById('telefono').value;
        const email = document.getElementById('email').value;

        // Aquí es donde en un sitio real se enviaría la información a un servidor.
        // Para este bosquejo, simplemente mostraremos un mensaje de confirmación.
        alert(`¡Gracias por tu compra, ${nombre}!\n\nHemos recibido tu pedido y nos contactaremos contigo pronto para coordinar el envío a:\n${direccion}\nTeléfono: ${telefono}\nCorreo: ${email}`);

        // Puedes resetear el formulario si quieres
        formCompra.reset();
        modalCompra.style.display = 'none'; // Cierra el modal de compra
    });
});