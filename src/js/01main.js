'use strict';

// Collapsable Headers
const designHeader = document.querySelector('.js_designHeader');
const formHeader = document.querySelector('.js_formHeader');
const shareHeader = document.querySelector('.js_shareHeader');

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
const emailPreview = document.querySelector('.js_previewMail');

function renderPreview() {
  emailPreview.href = `mailto:${data.email}`;

  previewName.innerHTML = data.name;
  previewJob.innerHTML = data.job;
}

// Paleta de colores

const allPalettes = document.querySelectorAll('.js_palette');

for (const eachPalette of allPalettes) {
  eachPalette.addEventListener('click', handleClickPalette);
}

function handleClickPalette(ev) {
  const paletteValue = parseInt(ev.currentTarget.value);

  if (paletteValue === 1) {
    console.log('add class css 1');
  } else if (paletteValue === 2) {
    console.log('add class css 2');
  } else if (paletteValue === 3) {
    console.log('add class css 3');
  }
}
