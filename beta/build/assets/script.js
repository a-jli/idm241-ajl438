console.log('meow!');

const moreLikeThisBtn = document.querySelector('.add-to-collection');
const popup = document.querySelector('.popup');
const lightbox = document.querySelector('.lightbox');
const xBtn = document.querySelector('.exit-button');

moreLikeThisBtn.addEventListener('mouseup', function (event) {
    console.log('clicked');
    popup.style.display = 'flex';
    lightbox.style.display = 'flex';
});

xBtn.addEventListener('mouseup', function (event) {
    console.log('exited');
    popup.style.display = 'none';
    lightbox.style.display = 'none';
});