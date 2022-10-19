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
)
.join("");


galeryRef.insertAdjacentHTML("afterbegin", galeryMakrup);


const instance = Object.create
basicLightbox.create(`
    <img src="${element.original}" width="800" height="600">
`)

instance.show()


console.log(instance)

