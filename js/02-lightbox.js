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

const lightbox = new SimpleLightbox('.gallery a', {
  nav: true,
  captions: true,
  captionDelay: 250,
  captionsData: galleryImage.alt,
  close: true,
  enableKeyboard: true,
});
