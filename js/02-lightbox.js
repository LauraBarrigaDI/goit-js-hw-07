import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

const galleryHTML = galleryItems.map(({ preview, original, description }) => {
  return `
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" data-caption="${description}"/>
    </a>
  `;
}).join('');

gallery.insertAdjacentHTML('beforeend', galleryHTML);

const lightbox = new SimpleLightbox('.gallery', {
  captions: true,
  captionDelay: 250,
  captionsData: 'alt',
});
