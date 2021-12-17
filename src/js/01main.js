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

const previewName = document.querySelector('.js_previewName');
const previewJob = document.querySelector('.js_previewJob');
const emailPreview = document.querySelector('.js_previewMail');

function renderPreview() {
  emailPreview.href = `mailto:${data.email}`;

  previewName.innerHTML = data.name;
  previewJob.innerHTML = data.job;
}
