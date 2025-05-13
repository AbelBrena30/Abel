const btn = document.getElementById('btnAdmin');
const txtPass = document.getElementById('passAdmin');
const popup = document.getElementById('popup');
const Incorrecto = document.getElementById('lblIncorrecto');
const Correcto = document.getElementById('lblCorrecto');
const bg = document.getElementById('bg');
const form = document.getElementById('form');
const cerrar = document.getElementById('btnCerrar');

btn.addEventListener('click', () => {
    if (txtPass.value === '12345') {
    popup.style.display = 'flex';
    popup.style.zIndex = '0';
    bg.style.zIndex = '0';
    form.style.display = 'none';
    Correcto.style.display = 'flex';
    Correcto.style.zIndex = '1';
    Incorrecto.style.display = 'none';
    setTimeout(() => {
        window.location.href = '/frontend/pages/reg/reg.html';
    }, 1000);
    } else {
    popup.style.display = 'flex';
    popup.style.zIndex = '0';
    bg.style.zIndex = '0';
    form.style.display = 'none';
    Incorrecto.style.display = 'flex';
    zIndex = '1';
    Correcto.style.display = 'none';
    }
});


