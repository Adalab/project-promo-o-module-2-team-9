'use strict';

//Para el collapse de linkedin xD
const shareCollapse = document.querySelector('.js_shareCollapse');
//Boton crear tarjeta
const createButton = document.querySelector('.js_create_button');
//Boton para recoger donde aparece el fetch en html
const twitterFetch = document.querySelector('.js_twitterFetch');

function handleCreateCard(event) {
  event.preventDefault();

  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (shareCollapse.classList.contains('js_collapsed')) {
        shareCollapse.classList.remove('js_collapsed');
        createButton.style.backgroundColor = 'gray';
        twitterFetch.innerHTML = data.cardURL;
      }
    });
}

createButton.addEventListener('click', handleCreateCard);


