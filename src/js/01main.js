'use strict';

// Collapsable Headers
const designHeader = document.querySelector('.js_designHeader');
const formHeader = document.querySelector('.js_formHeader');
const shareHeader = document.querySelector('.js_shareHeader');

//Recogemos el div del color
const cardDecoration = document.querySelector('.card__decoration');
const borderIcons = document.querySelectorAll('.js_icon_border');
const imageIcons = document.querySelectorAll('.js_icon_image');

function handleClickHeader(event) {
  event.currentTarget.nextElementSibling.classList.toggle('js_collapsed');
  event.currentTarget.lastElementChild.classList.toggle('js_arrowRotate');
}

designHeader.addEventListener('click', handleClickHeader);
formHeader.addEventListener('click', handleClickHeader);
shareHeader.addEventListener('click', handleClickHeader);

// Form
const allInputs = document.querySelectorAll('.js_allInputs');

const data = {
  palette: 1,
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  photo: '',
};

console.log(data);

for (const eachInput of allInputs) {
  eachInput.addEventListener('keyup', handleWriteInput);
}

function handleWriteInput(event) {

  const userInput = event.currentTarget.id;
  const userValue = event.currentTarget.value;

  if (userInput === 'name') {
    console.log(data.name);

    data.name = userValue;
  } else if (userInput === 'job') {
    data.job = userValue;
  } else if (userInput === 'email') {
    data.email = userValue;
  } else if (userInput === 'phone') {
    data.phone = userValue;
  } else if (userInput === 'linkedin') {
    data.linkedin = userValue;
  } else if (userInput === 'github') {
    data.github = userValue;
  } else if (userInput === 'photo') {
    data.photo = userValue;
  }
  renderPreview();
}

const previewName = document.querySelector('.js_previewName');
const previewJob = document.querySelector('.js_previewJob');
const emailPreview = document.querySelector('.js_previewEmail');

function renderPreview() {
  emailPreview.href = `mailto:${data.email}`;

  previewName.innerHTML = data.name;
  previewJob.innerHTML = data.job;
}

//Paleta de colores

const allPalettes = document.querySelectorAll('.js_palette');

for (const eachPalette of allPalettes) {
  eachPalette.addEventListener('click', handleClickPalette);
}

function handleClickPalette(ev) {
  const paletteValue = parseInt(ev.currentTarget.value);

  //Borro todas las clases porque no se cual tenia
  limpiaClases();

  if (paletteValue === 1) {
    cardDecoration.classList.add('card__decoration__palette1');
    modificaSocialIcons('social__icon__palette1');
    modificaIconsImages('icon_image__pallete1');
  } else if (paletteValue === 2) {
    cardDecoration.classList.add('card__decoration__palette2');
    modificaSocialIcons('social__icon__palette2');
    modificaIconsImages('icon_image__pallete2');
  } else if (paletteValue === 3) {
    cardDecoration.classList.add('card__decoration__palette3');
    modificaSocialIcons('social__icon__palette3');
    modificaIconsImages('icon_image__pallete3');
  }
}
//Clases que le dan color al div, es sólo un elemento
function limpiaClases() {
  cardDecoration.classList.remove('card__decoration__palette1');
  cardDecoration.classList.remove('card__decoration__palette2');
  cardDecoration.classList.remove('card__decoration__palette3');
  //Borde de los iconos
  for (const icon of borderIcons) {
    icon.classList.remove('social__icon__palette1');
    icon.classList.remove('social__icon__palette2');
    icon.classList.remove('social__icon__palette3');
  }
  //Las imagenes
  for (const image of imageIcons) {
    image.classList.remove('icon_image__pallete1');
    image.classList.remove('icon_image__pallete2');
    image.classList.remove('icon_image__pallete3');
  }

}

function modificaSocialIcons(clase) {
  //Recorremos todos los li para ponerles la clase
  for (const icon of borderIcons) {
    icon.classList.add(clase);
  }
}

//Funcion para los colores de los iconos

function modificaIconsImages(clase) {
  for (const image of imageIcons) {
    image.classList.add(clase);
  }
}

//Reset

const buttonReset = document.querySelector('.js_reset');

function handleResetForm() {
  //Inicializar el objeto data
  data.palette = 1;
  data.name = '';
  data.job = '';
  data.email = '';
  data.phone = '';
  data.linkedin = '';
  data.github = '';
  data.photo = '';

  for (const eachInput of allInputs) {
    eachInput.value = '';
  }
}

buttonReset.addEventListener('click', handleResetForm);





