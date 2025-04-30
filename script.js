// Obtener elementos del DOM
const tarjeta = document.querySelector('.tarjeta');
const verDetallesButton = document.getElementById('verDetalles');
const volverButton = document.getElementById('volver');

verDetallesButton.addEventListener('click', () => {
    tarjeta.classList.remove('volteada');
    // Agrega la clase para voltear con clic
});

volverButton.addEventListener('click', () => {
    tarjeta.classList.add('volteada'); 
    // Quita la clase para volver a la posición original
});

tarjeta.addEventListener('mouseleave', () => {
    tarjeta.classList.remove('volteada')
})