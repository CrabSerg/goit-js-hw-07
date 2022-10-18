import { galleryItems } from './gallery-items.js';
// Change code below this line
const galeryRef = document.querySelector(`.gallery`)

const galeryMakrup = galleryItems.map((element)=>
`<div class="gallery__item">
    <a class="gallery__link" href="${element.original}">
        <img
            class="gallery__image"
            src="${element.preview}"
            data-source="${element.original}"
            alt="${element.description}"
        />
    </a>
</div>`
    // console.log(element); 
)
.join("");

galeryRef.insertAdjacentHTML("afterbegin", galeryMakrup);

console.log(galeryMakrup);
console.log(galeryRef);


