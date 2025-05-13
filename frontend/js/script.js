fetch('/frontend/pages/components/navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navbar').innerHTML = data;

    // Espera a que el DOM del navbar esté cargado
    const menuIcon = document.querySelector('.menu-icon');
    const dropdown = document.getElementById('dropdown-menu');
    const popup = document.getElementById('popup');
    const background = document.getElementById('background');

    if (menuIcon && dropdown) {
        menuIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });

        // Oculta el menú si haces clic fuera
        document.addEventListener('click', () => {
            dropdown.style.display = 'none';
        });

        dropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Acción para "Cerrar Sesión"
        document.getElementById('cerrar-sesion').addEventListener('click', (e) => {
            e.preventDefault();
            popup.style.display = 'flex';
            popup.style.zIndex = '1';
            background.style.display = 'flex';
            dropdown.style.display = 'none';
            document.getElementById('navbar-container').style.filter = 'blur(4px) brightness(0.4)';
            document.getElementById('menu-icon').style.filter = 'blur(4px) brightness(0.4)';
        });

        document.getElementById('btnCancelar').addEventListener('click', (e) => {
            popup.style.display = 'none';
            background.style.display = 'none';
            dropdown.style.display = 'block';
            document.getElementById('navbar-container').style.filter = 'blur(0px) brightness(1)';
            document.getElementById('menu-icon').style.filter = 'blur(0px) brightness(1)';
        });

        document.getElementById('btnCerrarSesion').addEventListener('click', (e) => {
            setTimeout(() => {
                window.location.href = '/frontend/pages/login/login.html';
            }, 1000);    
        });
    }
});