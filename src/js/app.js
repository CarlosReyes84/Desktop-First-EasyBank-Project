document.addEventListener('DOMContentLoaded', () => {
    eventlisteners();
})

const eventlisteners = () => {
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', MostrarMenu);
    
}


const MostrarMenu = () => {
    const nav = document.querySelector('.nav')

    nav.classList.toggle('mostrar')

}