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

//PINTAR LOS LINKS DE LA BARRA DE NAV

const pintarLinkNav = () => {
  //HOME
  const home = document.getElementById('home');
  let presentacion = document.getElementById('presentacion');
  let principal = document.getElementById('principal');
  let homePositionTop = presentacion.getBoundingClientRect().top;
  let homePositionBottom = principal.getBoundingClientRect().bottom;
  let screenPositionHome = window.innerHeight / 2.7;

  //MARCAR HOME
  if (
    homePositionTop < screenPositionHome &&
    homePositionBottom > screenPositionHome
  ) {
    home.style.color = '#BEE42A';
  } else {
    home.style.color = 'black';
  }
  //SERVICIOS
  const servicio = document.getElementById('serv');
  let servicioo = document.getElementById('servicios');
  let servicioPositionTop = servicioo.getBoundingClientRect().top;
  let servicioPositionBottom = servicioo.getBoundingClientRect().bottom;
  let screenPositionServ = window.innerHeight / 2.7;

  //MARCAR SERVICIOS
  if (
    servicioPositionTop < screenPositionServ &&
    servicioPositionBottom > screenPositionServ
  ) {
    servicio.style.color = '#BEE42A';
  } else {
    servicio.style.color = 'black';
  }
  //STAFF
  const staff = document.getElementById('sta');
  let stafff = document.getElementById('staff');
  let staffPositionTop = stafff.getBoundingClientRect().top;
  let staffPositionBottom = stafff.getBoundingClientRect().bottom;
  let screenPositionStaff = window.innerHeight / 2.7;
  //MARCAR STAFF
  if (
    staffPositionTop < screenPositionStaff &&
    staffPositionBottom > screenPositionStaff
  ) {
    staff.style.color = '#BEE42A';
  } else {
    staff.style.color = 'black';
  }
  //CONTACTO
  const contacto = document.getElementById('cont');
  let contactoo = document.getElementById('contacto');
  let contactoPositionTop = contactoo.getBoundingClientRect().top;
  let contactoPositionBottom = contactoo.getBoundingClientRect().bottom;
  let screenPositionContacto = window.innerHeight / 2.7;
  //MARCAR CONTACTO
  if (
    contactoPositionTop < screenPositionContacto &&
    contactoPositionBottom > screenPositionContacto
  ) {
    contacto.style.color = '#BEE42A';
  } else {
    contacto.style.color = 'black';
  }
};

const start = () => {
  btnEnviar.disabled = true;
  btnEnviar.style.cursor = 'not-allowed';

  nombreForm.addEventListener('blur', validarForm);
  apellidoForm.addEventListener('blur', validarForm);
  emailForm.addEventListener('blur', validarForm);
  comentariosForm.addEventListener('blur', validarForm);

  window.addEventListener('scroll', pintarLinkNav);
};

window.onload = start;
