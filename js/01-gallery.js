import { galleryItems } from "./gallery-items.js";

// Change code below this line
const elemDiv = document.querySelector(".gallery");
const elemMass =
  '<ul class="gallery">' +
  galleryItems
    .map(
      (index) => `<li class="gallery__item"> 
                  <a class="gallery__link" href="${index.original}">
                  <img class="gallery__image" src=${index.preview} alt=${index.description} source="${index.original}"/> 
                  </a> </li>`
    )
    .join("") +
  "</ul>";
elemDiv.insertAdjacentHTML("beforeend", elemMass);

let elem;
const handleClick = (event) => {
  event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
    elem = basicLightbox.create(
      `<img src=${event.target.getAttribute("source")} />`,
      {
        onShow: (elem) => {
          const listener = (event) => {
            if (event.key === "Escape") {
              elem.close();
              elemDiv.removeEventListener("keyup", listener);
            }
          };
          elemDiv.addEventListener("keyup", listener);
        },
      }
    );
    elem.show();
  } else {
    event.stopPropagation();
  }
};
elemDiv.addEventListener("click", handleClick);
