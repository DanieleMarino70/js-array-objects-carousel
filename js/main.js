//          Consegna:
//        Dato un array di oggetti letterali con:
//            - url dell'immagine
//            - titolo
//            - descrizione

// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container 
// e inseriamo l'immagine grande in modo da poter stilare lo slider.


// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, 
// la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l'immagine corrispondente.

// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l'immagine attiva dovrà cambiare alla successiva.

// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.



const images = [
  {
    image: "./img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man."
  },
  {
    image: "./img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality."
  },
  {
    image: "./img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "./img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "./img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];


// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.


//PRENDIAMO GLI ELEMENTI CON ID "main-image" e "main-image-text"


const mainContainerEl = document.getElementById("main-image");
const mainImageTextEl = document.getElementById("main-image-text");
const sliderEl = document.getElementById("slider-container");



const previousEl = document.getElementById("previous-carousel");
const nextEl = document.getElementById("next-carousel");
let activeImage = 0;
let index = 0;

  for (const image of images){
    const imgMain = document.createElement("img");
    const imgSlider = document.createElement("img");
  
    const divTextEl = document.createElement("div");
    const divSliderEl = document.createElement("div");

    const imgTitle = document.createElement("h2");
    const imgText = document.createElement("p");
  
    imgMain.src = image.image;
    imgSlider.src = image.image;
  
    imgTitle.innerHTML = image.title;
    imgText.innerHTML = image.text;
    
    divSliderEl.classList.add("cover");
    imgMain.classList.add("main-img");
    if(index == 0){
      divSliderEl.classList.add("border");
      imgMain.classList.add("active");
      divTextEl.classList.add("active");
    }
  
    if(index > 0){
      imgMain.classList.add("hide");
      divTextEl.classList.add("hide");
      divSliderEl.classList.add("item");
  
    }


   mainContainerEl.append(imgMain);
   sliderEl.append(divSliderEl);
   divSliderEl.append(imgSlider);
   mainImageTextEl.append(divTextEl);
   divTextEl.append(imgTitle, imgText);
   index++;
  }
  
  nextEl.addEventListener("click", function(){
    
    const coverSlides = document.querySelectorAll(".cover");
    const imgSlides = document.querySelectorAll(".main-img");
    const textSlides = document.querySelectorAll("#main-image-text div");
    

    imgSlides[activeImage].classList.remove("active");
    imgSlides[activeImage].classList.add("hide");

    textSlides[activeImage].classList.remove("active");
    textSlides[activeImage].classList.add("hide");


    coverSlides[activeImage].classList.add("item");
    coverSlides[activeImage].classList.remove("border");

    activeImage++;
    
    if(activeImage >= coverSlides.length){
      activeImage = 0;
    }
    imgSlides[activeImage].classList.add("active");
    imgSlides[activeImage].classList.remove("hide");

    textSlides[activeImage].classList.add("active");
    textSlides[activeImage].classList.remove("hide");

    coverSlides[activeImage].classList.add("border");
    coverSlides[activeImage].classList.remove("item");
    
    
  });



previousEl.addEventListener("click", function () {
  const coverSlides = document.querySelectorAll(".cover");
  const imgSlides = document.querySelectorAll(".main-img");
  const textSlides = document.querySelectorAll("#main-image-text div");

  imgSlides[activeImage].classList.remove("active");
  imgSlides[activeImage].classList.add("hide");

  textSlides[activeImage].classList.remove("active");
  textSlides[activeImage].classList.add("hide");

  coverSlides[activeImage].classList.add("item");
  coverSlides[activeImage].classList.remove("border");

  activeImage--;

  if (activeImage < 0) {
    activeImage = coverSlides.length - 1;
  }

  imgSlides[activeImage].classList.add("active");
  imgSlides[activeImage].classList.remove("hide");

  textSlides[activeImage].classList.add("active");
  textSlides[activeImage].classList.remove("hide");

  coverSlides[activeImage].classList.add("border");
  coverSlides[activeImage].classList.remove("item");
    
});

