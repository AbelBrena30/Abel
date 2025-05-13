const ajustes = document.getElementById('ajustes');
const menu = document.getElementById('menu');
const bg = document.getElementById('bg');
const form = document.getElementById('form');
const cerrar = document.getElementById('cerrar');
const link = document.getElementsByClassName("link");
const txtUser = document.getElementById('user');
const txtPass = document.getElementById('pass');
const txtPass2 = document.getElementById('pass2');
const btn = document.getElementById('btnRegistrar');
const lblError = document.getElementById('lblError');
const lblSi = document.getElementById('lblSi');
const lblRellenar = document.getElementById('lblCampos');
const lblPass = document.getElementById('lblPass');
const lblPass2 = document.getElementById('lblPass2');
const lblUsuario = document.getElementById('lblUsuario');
const lblRegister = document.getElementById('lblRegister');
const btnConfirmar = document.getElementById('btnConfirmar');
const lblCaracteres = document.getElementById('lblCaracteres');
const popup = document.getElementById('popup');

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

btn.addEventListener('click', () => {
    const user = txtUser.value.trim();
    const pass1 = txtPass.value.trim();
    const pass2 = txtPass2.value.trim();

    lblRellenar.style.display = 'none';
    lblCaracteres.style.display = 'none';
    lblError.style.display = 'none';
    lblSi.style.display = 'none';
    lblUsuario.style.display = 'none';
    lblRegister.style.display = 'flex';

    if (user === '' || pass1 === '' || pass2 === '') {
        lblRellenar.style.display = 'flex';
        btnConfirmar.style.transform = 'translateY(10px)';
        btnConfirmar.style.transform = 'translateX(10px)';
        return;
    }

    if (pass1.length < 8 || pass2.length < 8) {
        lblCaracteres.style.display = 'flex';
        btnConfirmar.style.transform = 'translateY(10px)';
        return;
    }

    if (pass1 !== pass2) {
        lblError.style.display = 'flex';
        return;
    }

    lblUsuario.style.display = 'flex';
    lblRegister.style.display = 'none';
    popup.style.display = 'flex';
    form.style.display = 'none';
    setTimeout(() => {
        window.location.href = '/frontend/pages/login/login.html';
    }, 1000);
});

btnConfirmar.addEventListener('click', () => {
    if (lblUsuario.style.display === 'flex') {
        window.location.href = '/frontend/pages/login/login.html';
    } else if (lblRegister.style.display === 'flex') {
        window.location.reload();
    }
});
