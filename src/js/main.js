'use strict';

// // Arrow Design
// const arrowDesign = document.querySelector('.js_arrowDesign');
// const designContainer = document.querySelector('.js_designContainer');
// const designHeader = document.querySelector('.js_designHeader');

// function handleClickHeaderDesign() {
//   designContainer.classList.toggle('js_collapsed');
//   arrowDesign.classList.toggle('js_arrowRotate');
// }

// designHeader.addEventListener('click', handleClickHeaderDesign);

// //Arrow Fill
// const arrowFill = document.querySelector('.js_arrowFill');
// const fillContainer = document.querySelector('.js_fillContainer');
// const formHeader = document.querySelector('.js_formHeader');

// function handleClickHeaderFill() {
//   fillContainer.classList.toggle('js_collapsed');
//   arrowFill.classList.toggle('js_arrowRotate');
// }

// formHeader.addEventListener('click', handleClickHeaderFill);

// //Arrow share

// const arrowShare = document.querySelector('.js_arrowShare');
// const shareContainer = document.querySelector('.js_shareContainer');
// const shareHeader = document.querySelector('.js_shareHeader');

// function handleClickHeaderShare() {
//   shareContainer.classList.toggle('js_collapsed');
//   arrowShare.classList.toggle('js_arrowRotate');
// }

// shareHeader.addEventListener('click', handleClickHeaderShare);

// Collapsable Headers
const designHeader = document.querySelector('.js_designHeader');
const formHeader = document.querySelector('.js_formHeader');
const shareHeader = document.querySelector('.js_shareHeader');

function handleClickHeader(ev) {
  ev.currentTarget.nextElementSibling.classList.toggle('js_collapsed');
  ev.currentTarget.lastElementChild.classList.toggle('js_arrowRotate');
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
  palette: '',
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

/*const inputData = {};
inputData.name = document.querySelector('.js_inputName');
inputData.job = document.querySelector('.js_inputJob');

const previewName = document.querySelector('.js_previewName');
const previewJob = document.querySelector('.js_previewJob');

function printNamePreview() {
  if (inputData.name.value === '') {
    previewName.innerHTML = 'Nombre Apellido';
  } else {
    previewName.innerHTML = inputData.name.value;
  }
}
function printJobPreview() {
  if (inputData.job.value === '') {
    previewJob.innerHTML = 'Front-end developer';
  } else {
    previewJob.innerHTML = inputData.job.value;
  }
}

inputData.name.addEventListener('keyup', printNamePreview);
inputData.job.addEventListener('keyup', printJobPreview);

// Iconos - mail

const previewMail = document.querySelector('.js_previewMail');
const inputMail = document.querySelector('.js_inputMail');

function handleMailLink() {
  return (previewMail.href = `mailto:${inputMail.value}`);
}

inputMail.addEventListener('keyup', handleMailLink);

// Iconos - linkedin

const previewLinkedin = document.querySelector('.js_previewLinkedin');
const inputLinkedin = document.querySelector('.js_inputLinkedin');

function handleLinkedinLink() {
  return (previewLinkedin.href = `${inputLinkedin.value}`);
}

inputLinkedin.addEventListener('keyup', handleLinkedinLink);

//Iconos -PHONE
const previewPhone = document.querySelector('.js_previewPhone');
const inputPhone = document.querySelector('.js_inputPhone');

function handlePhoneLink() {
  return (previewPhone.href = `${inputPhone.value}`);
}

inputPhone.addEventListener('keyup', handlePhoneLink);

//Iconos - GITHUB
const previewGithub = document.querySelector('.js_previewGithub');
const inputGithub = document.querySelector('.js_inputGithub');

function handleGithubLink() {
  return (previewGithub.href = `${inputGithub.value}`);
}

inputGithub.addEventListener('keyup', handleGithubLink);*/
