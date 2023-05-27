const lista = document.querySelectorAll('.column5 li');
const imgs = document.querySelectorAll('.column5 img');
const zoomImage = document.querySelector('.zoomImage');
let expandImage;
lista.forEach((item, index) => {
  item.addEventListener('click', () => {
    expandImage = document.querySelector('.zoomImage img');
    expandImage.src = imgs[index].src;
    zoomImage.style.display = 'block';
  });
});
zoomImage.addEventListener('click', () =>{
    zoomImage.style.display ="none";
});