const ajustes = document.getElementById('ajustes');
const menu = document.getElementById('menu');
const bg = document.getElementById('bg');
const form = document.getElementById('form');
const cerrar = document.getElementById('cerrar');
const eye = document.getElementById('eye');
const pass = document.getElementById('pass');
const user = document.getElementById('user');
const newUsuario = document.getElementById('nuevoUsuario');
const formAdmin = document.getElementById('admin');
const btnIniciar = document.getElementById('btnInicio');
const popup = document.getElementById('popup');
const lblCorrecto = document.getElementById('lblCorrecto');
const lblError = document.getElementById('lblError');
const lblRellenar = document.getElementById('lblRellenar');
const btnPopup = document.getElementById('btnCerrar');
let wpass = false;


ajustes.addEventListener('click', () => {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
        menu.style.zIndex = '1';
        form.style.zIndex = '0';
        ajustes.style.filter = 'blur(4px)';
        ajustes.style.transform = 'rotate(0deg)';
        ajustes.style.transition = 'transform 0.5s ease';
        ajustes.style.backgroundImage = 'url(/frontend/img/ajustes.svg)';
        ajustes.style.cursor = 'default';
        bg.style.filter = 'blur(20px) brightness(0.4)';
        form.style.filter = 'blur(20px)';
    }
});

cerrar.addEventListener('click', () => {
    menu.style.display = 'none';
    bg.style.filter = 'blur(0px) brightness(1)';
    form.style.filter = 'blur(0px)';
    ajustes.style.filter = 'blur(0px)';
});

ajustes.addEventListener('mouseenter', () => {
    if (menu.style.display === 'none') {
    ajustes.style.transform = 'rotate(70deg)';
    ajustes.style.transition = 'transform 0.5s ease, background-image 0.5s ease';
    ajustes.style.backgroundImage = 'url(/frontend/img/ajustes-blanco.svg)';
    ajustes.style.cursor = 'pointer';
    } else {
        ajustes.style.transform = 'rotate(0deg)';
        ajustes.style.transition = 'transform 0.5s ease';
        ajustes.style.backgroundImage = 'url(/frontend/img/ajustes.svg)';
        ajustes.style.cursor = 'default';
    }
});

ajustes.addEventListener('mouseleave', () => {
    ajustes.style.transform = 'rotate(0deg)';
    ajustes.style.transition = 'transform 0.5s ease';
    ajustes.style.backgroundImage = 'url(/frontend/img/ajustes.svg)';
    ajustes.style.cursor = 'default';
});

eye.addEventListener('click', () => {
    if (!wpass) {
        pass.type = 'text';
        eye.style.backgroundImage = 'url(/frontend/img/visibility-off.svg)';
        wpass = true;
    } else {
        pass.type = 'password';
        eye.style.backgroundImage = 'url(/frontend/img/visibility.svg)';
        wpass = false;
    }
});

btnIniciar.addEventListener('click', () => {
    if (user.value === '' || pass.value === '') {
        popup.style.display = 'flex';
        lblRellenar.style.display = 'flex';
        form.style.display = 'none';
    }else
    if (user.value === 'admin' && pass.value === '12345') {
        popup.style.display = 'flex';
        lblCorrecto.style.display = 'flex';
        btnPopup.style.display = 'none';
        form.style.display = 'none';
        setTimeout(() => {
            window.location.href = '/frontend/pages/inicio.html';
        }, 1000);
    } else {
        
    }
});

btnPopup.addEventListener('click', () => {
    popup.style.display = 'none';
    form.style.display = 'flex';
    lblCorrecto.style.display = 'none';
    lblRellenar.style.display = 'none';
    lblError.style.display = 'none';
});