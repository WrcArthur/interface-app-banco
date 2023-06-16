const eye = document.getElementById('logoEye');
const valorConta = document.getElementById('accountValue');

eye.addEventListener('click', ()=> {
    if(eye.hasAttribute('clicked')) {
        valorConta.textContent = 'R$200,00';
        eye.removeAttribute('clicked');
    } else {
        valorConta.textContent = 'R$********';
        eye.setAttribute('clicked', 'clicked');
    }
});