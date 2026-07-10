
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import '@fontsource/montserrat/400.css';

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];


const container = document.querySelector(".gallery");
container.innerHTML = createItemGal(images);
//console.log(container);
//container.addEventListener("click", handlerClick);

const gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt', 
        captionDelay: 250,    
});
gallery.on('show.simplelightbox', () => {
  
  setTimeout(() => {
    const modalForm = document.querySelector('.sl-wrapper .sl-image');
    const counter = document.querySelector('.sl-wrapper .sl-counter');
    const closeBtn = document.querySelector('.sl-wrapper .sl-close');
    const prev = document.querySelector('.sl-wrapper .sl-prev');
    const next = document.querySelector('.sl-wrapper .sl-next');

    if (modalForm) {
        
        if (counter)  modalForm.appendChild(counter); 
        if (closeBtn)  modalForm.appendChild(closeBtn); 
        if (prev)  modalForm.appendChild(prev); 
        if (next) modalForm.appendChild(next); 
    }
  }, 10); 
});

gallery.on('close.simplelightbox', () => {
    const wrapper = document.querySelector('.sl-wrapper');
    
   // console.dir(wrapper);
  const modalForm = document.querySelector('.sl-wrapper .sl-image');
  const navigation = document.querySelector('.sl-wrapper .sl-navigation');
  
  const counter = document.querySelector('.sl-wrapper .sl-counter');
  const closeBtn = document.querySelector('.sl-wrapper .sl-close');
  const prevBtn = document.querySelector('.sl-wrapper .sl-prev');
  const nextBtn = document.querySelector('.sl-wrapper .sl-next');

  if (wrapper && modalForm) {
    
    if (counter) wrapper.insertBefore(counter, modalForm);
    if (closeBtn) wrapper.appendChild(closeBtn);
  }

  if (navigation) {
    if (prevBtn) navigation.appendChild(prevBtn);
    if (nextBtn) navigation.appendChild(nextBtn);
  }
});

function createItemGal(arr) {
    const i = 0;
    return arr.map(pict => 
        `
        <li class="gallery-item" >
            <a class="gallery-link" href="${pict.original}">
                <img
                class="gallery-image"
                src="${pict.preview}"
                alt="${pict.description}"
                />
            </a>
        </li>
    `).join("");
}

/*data-source="${pict.original}"*/


