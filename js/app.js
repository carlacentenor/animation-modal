const hide = document.querySelector('#hide-modal');
const modal = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');
const btnOpenModal = document.querySelector('#modal-open');
const btnCancel = document.querySelector('#btn-cancel');
const btnIconExit = document.querySelector('#icon-exit');

const hideModal = () => {
    modal.style.animation = 'modalOut .8s forwards';
    overlay.classList.remove('active');
};

const showModal = () => {
    modal.style.animation = 'modalIn .8s forwards';
    overlay.classList.add('active');
}

// Eventos
btnOpenModal.addEventListener('click', showModal);
hide.addEventListener('click', hideModal);
btnCancel.addEventListener('click', hideModal);
btnIconExit.addEventListener('click', hideModal);
overlay.addEventListener('click', (event) =>{
    if(event.target.id == 'overlay'){
        hideModal();
    }
 
})