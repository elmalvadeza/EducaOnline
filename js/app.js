// const disabledItems = document.querySelectorAll('[aria-disabled="true"]');

// disabledItems.forEach(item => {
//     item.style.display = 'none';
// });

// const disableElement = localStorage.getItem('disableElement');

//         if (disableElement === 'true') {
//             const Element = document.querySelector('.entrar');
//             Element.setAttribute('disabled', 'true');
//             Element.setAttribute('aria-disabled', 'true');

//             disabledItems.forEach(item => {
//                 item.style.display = 'none';
//             });
//         }

const cursosButton = document.querySelector('.nav-list-item');
const element = document.querySelector('.entrar');
const sair = document.querySelector('.sair');


document.addEventListener('DOMContentLoaded', function() {

    const disableElement = localStorage.getItem('disableElement');
    console.log('disableElement:', disableElement);

    if (disableElement == 'true') {


        
        const user = document.querySelector('.fa-user');
        const rightContent = document.querySelector('.right-content');
        const mainLog = document.querySelector('.logged-main');
        const mainUnlog = document.querySelector('.main-unlogged');
        const cursos1 = document.querySelector('.r-a');
        const cursos2 = document.querySelector('.r');

        

        mainLog.style.display = 'block'
        mainUnlog.style.display = 'none'

        element.setAttribute('disabled', 'true');
        element.setAttribute('aria-disabled', 'true');
        element.style.display = 'none'; // Esconde o botão
        console.log('Botão escondido.'); // Verifique se isso é alcançado


        cursos1.style.display = 'none';
        cursos2.style.display = 'block';

        sair.style.display = 'block';

        
    }
});




element.addEventListener('click', function() {
    window.location.href = '../index.html';
});

sair.addEventListener('click', () => {
    localStorage.removeItem('disableElement');
    window.location.href = '../index.html';
});

console.log(localStorage);









