let movies = [
  {
    name: "Falcon and the winter soldier",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sunt neque, ipsum hic exercitationem dolorum.",
    image: "slider 2.png"
  },
  {
    name: "Loki",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sunt neque, ipsum hic exercitationem dolorum.",
    image: "slider 1.png"
  },
  {
    name: "Wanda vision",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sunt neque, ipsum hic exercitationem dolorum.",
    image: "slider 3.png"
  },
  {
    name: "Raya and the Last Dragon",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sunt neque, ipsum hic exercitationem dolorum.",
    image: "slider 4.png"
  },
  {
    name: "Luca",
    des:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sunt neque, ipsum hic exercitationem dolorum.",
    image: "slider 5.png"
  }
]


const carousel = document.querySelector('.carousel');
let sliders = []

//track the current slide
let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //create DOM elements
  let slide = document.createElement('div');
  let imgElement = document.createElement('img');
  let content = document.createElement('div');
  let h1 = document.createElement('h1');
  let p = document.createElement('p');

  //attaching all elements
  imgElement.appendChild(document.createTextNode(''));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);


  //setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //searching elements classname
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  // adding sliding effect

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
  }
}

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//video cards

const videoCards = [...document.querySelectorAll(".video-card")];


videoCards.map((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  // item.addEventlistener("mouseleave", () => {
  //   let video = item.children[1];
  //   video.pause();
  // });
});

//card sliders

let cardContainer = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainer.forEach((item, i) => {
  console.log(item)
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width


  nxtBtns[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth + 200;
  });
});