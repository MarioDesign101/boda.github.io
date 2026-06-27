// Seleccionamos los elementos del DOM
        const modal = document.getElementById('miModal');
        const btnAbrir = document.getElementById('openModal');
        const btnCerrar = document.getElementById('closeModal');

        // Abrir el modal usando el método nativo .showModal()
        btnAbrir.addEventListener('click', () => {
            modal.showModal(); 
        });

        // Cerrar el modal usando el método nativo .close()
        btnCerrar.addEventListener('click', () => {
            modal.close();
        });