'use strict';


//Arrow
const arrowElement = document.querySelector('.js_arrow');
const fillContainer = document.querySelector('.js_fillContainer');
const formHeader = document.querySelector('.js_formHeader');

function handleClickHeader() {
  fillContainer.classList.toggle('js_collapsed');
  arrowElement.classList.toggle('js_arrowRotate');
}

formHeader.addEventListener('click', handleClickHeader);

// --------------------------------------------------
// ICO
// --------------------------------------------------

const inputData = {};
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
