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

/* const cambioColor = () => {
  const btnPlacas = document.getElementsByClassName('boton-placas');
  btnPlacas.style.color = 'blue';
};

const start = () => {
  document
    .getElementsByClassName('boton-placas')
    .addEventListener('click', () => cambioColor());
  return btnPlacas;
};

window.onload = start;
 */
