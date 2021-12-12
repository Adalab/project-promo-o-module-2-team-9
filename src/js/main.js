'use strict';

// Arrow Design
const arrowDesign = document.querySelector('.js_arrowDesign');
const designContainer = document.querySelector('.js_designContainer');
const designHeader = document.querySelector('.js_designHeader');

function handleClickHeaderDesign() {
  designContainer.classList.toggle('js_collapsed');
  arrowDesign.classList.toggle('js_arrowRotate');
}

designHeader.addEventListener('click', handleClickHeaderDesign);

//Arrow Fill
const arrowFill = document.querySelector('.js_arrowFill');
const fillContainer = document.querySelector('.js_fillContainer');
const formHeader = document.querySelector('.js_formHeader');

function handleClickHeaderFill() {
  fillContainer.classList.toggle('js_collapsed');
  arrowFill.classList.toggle('js_arrowRotate');
}

formHeader.addEventListener('click', handleClickHeaderFill);

//Arrow share

const arrowShare = document.querySelector('.js_arrowShare');
const shareContainer = document.querySelector('.js_shareContainer');
const shareHeader = document.querySelector('.js_shareHeader');

function handleClickHeaderShare() {
  shareContainer.classList.toggle('js_collapsed');
  arrowShare.classList.toggle('js_arrowRotate');
}

shareHeader.addEventListener('click', handleClickHeaderShare);


// --------------------------------------------------
// ICO
// --------------------------------------------------

const inputData = { };
inputData.name = document.querySelector('.js_inputName');
inputData.job = document.querySelector('.js_inputJob');
// const inputPhone = document.querySelector('.js_inputPhone');
// const inputMail = document.querySelector('.js_inputMail');
// const inputLinkedin = document.querySelector('.js_inputLinkedin');
// const inputGithub = document.querySelector('.js_inputGithub');

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
  return previewMail.href = `mailto:${inputMail.value}`;
}

inputMail.addEventListener('keyup', handleMailLink);

// Iconos - linkedin

const previewLinkedin = document.querySelector('.js_previewLinkedin');
const inputLinkedin = document.querySelector('.js_inputLinkedin');

function handleLinkedinLink() {
  return previewLinkedin.href = `${inputLinkedin.value}`;
}

inputLinkedin.addEventListener('keyup', handleLinkedinLink);


// const inputPhone = document.querySelector('.js_inputPhone');
// const inputMail = document.querySelector('.js_inputMail');
// const inputLinkedin = document.querySelector('.js_inputLinkedin');
// const inputGithub = document.querySelector('.js_inputGithub');


