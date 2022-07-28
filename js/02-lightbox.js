import { galleryItems } from "./gallery-items.js";
// Change code below this line
const elemDiv = document.querySelector(".gallery");
const elemMass = galleryItems
  .map(
    (index) => `<li class="gallery__item"> 
                  <a class="gallery__link" href="${index.original}">
                  <img class="gallery__image" src=${index.preview} alt=${index.description}"/> 
                  </a> </li>`
  )
  .join("");
elemDiv.insertAdjacentHTML("beforeend", elemMass);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
