//  Container 1 Apply Now button animation 

const apply = document.querySelector('.Apply');
apply.addEventListener('mouseover', () => {
  apply.classList.add('animate__shakeX');
});

apply.addEventListener('mouseout', () => {
  apply.classList.remove('animate__shakeX');
});

//animation *container 2 column4
const animation = bodymovin.loadAnimation({
  container: document.querySelector('.animationContainer'),
  path: 'cdanimation.json',
  renderer: 'svg',
  loop:false,
  name: 'cd animation',
  autoplay: false,
  
});
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animation.play();
      } else {
        animation.pause();
      }
    });
  },
  {
    threshold: 0.5,
  }
);
observer.observe(animation.wrapper);
const animationContainer = document.querySelector('.animationContainer');
animationContainer.addEventListener('mouseover', () => {
  animation.loop = true;
  animation.play();
});
animationContainer.addEventListener('mouseout', () => {
  animation.loop = false;
  animation.pause();
});
animationContainer.addEventListener('click', () => {
  animation.loop = false;
  animation.pause();
});

//media queries animation
const mediaQuery = window.matchMedia('(max-width: 820px)');
if (mediaQuery.matches) {
  animation.loop =true;
  animation.autoplay =true;
  };


// zoom image gallery *container 3 column5 
const lista = document.querySelectorAll('.column5 li');
const imgs = document.querySelectorAll('.column5 img');
const zoomImage = document.querySelector('.zoomImage');
const expandImage = document.querySelector('.zoomImage img');
lista.forEach((item, index) => {
  item.addEventListener('click', () => {
    expandImage.src = imgs[index].src;
    zoomImage.style.display = 'block';
  });
});
zoomImage.addEventListener('click', () =>{
    zoomImage.style.display ='none';
});

// Ask us Pop Up form *container 5
const popupButton = document.getElementById("popup");
const closeButton = document.getElementById ("closeButton")
const form = document.getElementById("form");
const formContainer = document.getElementById("formContainer");
const showPopup = () => {
  formContainer.style.display = "block";
};
const hidePopup = () => {
  formContainer.style.display = "none";
};
popupButton.addEventListener("click", showPopup);
closeButton.addEventListener("click", hidePopup);

popupButton.addEventListener('mouseover', () => {
  popupButton.classList.add('animate__shakeX');
});

popupButton.addEventListener('mouseout', () => {
  popup.classList.remove('animate__shakeX');
});


