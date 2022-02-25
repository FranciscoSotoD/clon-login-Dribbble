
const form = document.querySelector('#formulario');

export const dom = document.addEventListener('DOMContentLoaded', () => {
    prevenirFormulario();
});


function prevenirFormulario() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
}

