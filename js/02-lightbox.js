import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const galleryItemTemplate = document.querySelector('#gallery-item-template');

galleryItems.forEach(item => {
  const galleryItem = galleryItemTemplate.content.cloneNode(true);
  const galleryLink = galleryItem.querySelector('.gallery__link');
  const galleryImage = galleryItem.querySelector('.gallery__image');

  galleryLink.href = item.original;
  galleryImage.src = item.preview;
  galleryImage.dataset.source = item.original;
  galleryImage.alt = item.description;

  galleryContainer.appendChild(galleryItem);
});

galleryContainer.addEventListener('click', event => {
  event.preventDefault();
  
  const galleryImage = event.target.closest('.gallery__image');
  
  if (galleryImage) {
    const largeImageUrl = galleryImage.dataset.source;
    
    const modal = basicLightbox.create(`<img src="${largeImageUrl}">`);
    modal.show();
  }
});
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

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionsData: 'alt',
  enableKeyboard: true,
});
