const nav = document.getElementById('barraNav');

window.onscroll = function(menu){
    if (window.pageYOffset > 120) {
        nav.style.boxShadow = "0px 2px 15px -6px rgba(0,0,0,0.35)";
        nav.style.transition = "all 0.2s ease";
        nav.style.background = "white";
        nav.style.height = "75px";
        
    }else{
        nav.style.boxShadow = "0px 0px 0px rgb(0,0,0)";
        nav.style.transition = "all 0.2s ease";
        nav.style.background = "transparent";
    }
};
menu();

const botonHome = document.getElementsByClassName('boton-home');