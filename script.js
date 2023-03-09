const wrapper = document.querySelector('.wrapper');
const loginLInk = document.querySelector('.login-link');
const registerLink = document.querySelecto('.register-Link');
const btnPopup = document.querySelecto('.btnlogin-popup');
const iconClose = document.querySelecto('.icon-close');

registerLink.addEvenlistener('click', ()=> {
     wrapper.classList.add('active');
});

loginLInk.addEventListener('click',()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEvenlistener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEvenlistener('click', ()=> {
    wrapper.classList.remove('active-popup');
});