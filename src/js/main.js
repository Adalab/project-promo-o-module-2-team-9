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