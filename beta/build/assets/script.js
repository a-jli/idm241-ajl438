console.log('meow!');

const moreLikeThisBtn = document.querySelector('.add-to-collection');
const popup = document.querySelector('.popup');
const lightbox = document.querySelector('.lightbox');
const lightbox0 = document.querySelector('.lightbox-0');
const lightbox1 = document.querySelector('.lightbox-1');
const lightbox2 = document.querySelector('.lightbox-2');
const lightbox3 = document.querySelector('.lightbox-3');
const lightbox4 = document.querySelector('.lightbox-4');
const xBtn = document.querySelector('.exit-button');

moreLikeThisBtn.addEventListener('mouseup', function (event) {
    console.log('clicked');
    popup.style.display = 'flex';
    lightbox0.style.display = 'flex';
    setTimeout(() => {
        lightbox1.style.display = 'flex';
    }, 50);
    setTimeout(() => {
        lightbox2.style.display = 'flex';
    }, 30);
    setTimeout(() => {
        lightbox3.style.display = 'flex';
    }, 30);
    setTimeout(() => {
        lightbox4.style.display = 'flex';
    }, 30);
    setTimeout(() => {
        lightbox.style.display = 'flex';
    }, 30);
    
});

xBtn.addEventListener('mouseup', function (event) {
    console.log('exited');
    popup.style.display = 'none';
    lightbox.style.display = 'none';
    setTimeout(() => {
        lightbox4.style.display = 'none';
    }, 30);
    setTimeout(() => {
        lightbox3.style.display = 'none';
    }, 30);
    setTimeout(() => {
        lightbox2.style.display = 'none';
    }, 30);
    setTimeout(() => {
        lightbox1.style.display = 'none';
    }, 30);
    setTimeout(() => {
        lightbox0.style.display = 'none';
    }, 30);
});