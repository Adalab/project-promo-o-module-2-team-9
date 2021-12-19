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

const previewName = document.querySelector('.js_previewName');
const previewJob = document.querySelector('.js_previewJob');
const previewEmail = document.querySelector('.js_previewEmail');
const previewPhone = document.querySelector('.js_previewPhone');
const previewLinkedin = document.querySelector('.js_previewLinkedin');
const previewGithub = document.querySelector('.js_previewGithub');

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


for (const eachInput of allInputs) {
  eachInput.addEventListener('keyup', handleWriteInput);
}

function handleWriteInput(event) {
  const userInput = event.currentTarget.name; // Propiedad 'name' que se almacenará en nuestro objeto
  const userValue = event.currentTarget.value; //Valor que la usuaria está escribiendo en el input

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
    data.photo = fr;
  }
  renderPreview();
}

function renderPreview() {
  if (data.name === '') {
    previewName.innerHTML = 'Nombre Apellido';
  } else {
    previewName.innerHTML = data.name;
  }

  if (data.job === '') {
    previewJob.innerHTML = 'Front-end developer';
  } else {
    previewJob.innerHTML = data.job;
  }

  if (data.email === '') {
    previewEmail.href = '';
  } else {
    previewEmail.href = `mailto:${data.email}`;
  }

  if (data.phone === '') {
    previewPhone.href = '';
  } else {
    previewPhone.href = data.phone;
  }

  if (data.name === '') {
    previewLinkedin.href = '';
  } else {
    previewLinkedin.href = data.linkedin;
  }

  if (data.name === '') {
    previewGithub.href = 'Front-end developer';
  } else {
    previewGithub.href = data.github;
  }
}

