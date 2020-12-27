const nav = document.getElementById('barraNav');

window.onscroll = function () {
  if (window.pageYOffset > 120) {
    nav.style.boxShadow = '0px 2px 15px -6px rgba(0,0,0,0.35)';
    nav.style.transition = 'all 0.2s ease';
    nav.style.background = 'white';
  } else {
    nav.style.boxShadow = '0px 0px 0px rgb(0,0,0)';
    nav.style.transition = 'all 0.2s ease';
    nav.style.background = 'transparent';
  }
};

//---------------VALIDAR FORMULARIO--------------

const btnEnviar = document.getElementById('enviar-btn');
const nombreForm = document.getElementById('nombre');
const apellidoForm = document.getElementById('apellido');
const emailForm = document.getElementById('email');
const comentariosForm = document.getElementById('comentarios');
const validarEmail = document.getElementById('erMail');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validarForm = (e) => {
  // Validacion input vacio muestra rojo o verde si esta con al menos un caracter
  if (e.target.value.length > 0) {
    e.target.style.border = '1px solid green';
    limpiarError();
  } else {
    e.target.style.border = '1px solid red';
    mostrarError();
  }

  // Validacion email con expresiones regulares
  if (e.target.type === 'email') {
    if (er.test(e.target.value)) {
      validarEmail.innerHTML = ``;
    } else {
      validarEmail.innerHTML = `
      <h6 class="text-danger mt-1 d-inline-block">* E-mail no válido</h6>
      `;
    }
  }

  // Pasar la Validacion

  if (
    nombreForm.value !== '' &&
    apellidoForm.value !== '' &&
    er.test(email.value) &&
    comentariosForm.value !== ''
  ) {
    btnEnviar.disabled = false;
    btnEnviar.style.cursor = 'pointer';
  } else {
    btnEnviar.disabled = true;
    btnEnviar.style.cursor = 'not-allowed';
  }
};

const mostrarError = () => {
  const errorForm = document.getElementById('error');
  errorForm.innerHTML = `
  <h6 class="text-center text-danger ">* Todos los campos son obligatorios</h6>
  `;
};

const limpiarError = () => {
  const errorForm = document.getElementById('error');
  errorForm.innerHTML = '';
};

const start = () => {
  btnEnviar.disabled = true;
  btnEnviar.style.cursor = 'not-allowed';

  nombreForm.addEventListener('blur', validarForm);
  apellidoForm.addEventListener('blur', validarForm);
  emailForm.addEventListener('blur', validarForm);
  comentariosForm.addEventListener('blur', validarForm);
};

window.onload = start;
