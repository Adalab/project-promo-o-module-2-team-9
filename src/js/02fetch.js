'use strict';

//Boton crear tarjeta
const createButton = document.querySelector('.js_create_button');

// const btnTwitter = document.querySelector('.js_btnTwitter');

// let dataCard = [];

//Boton para recoger donde aparece el fetch en html
const twitterFetch = document.querySelector('.js_twitterFetch');

function handleCreateCard(event) {
  event.preventDefault();

  console.log(data);

  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      // dataCard = data;
      if (shareCollapse.classList.contains('js_collapsed')) {
        shareCollapse.classList.remove('js_collapsed');
        createButton.style.backgroundColor = 'gray';
        twitterFetch.innerHTML = data.cardURL;
        twitterFetch.href = data.cardURL;
      }
    });

  btnTwitter.addEventListener('click', handleTweet);
}

createButton.addEventListener('click', handleCreateCard);

// Function Twitter button

// function handleTweet() {
//   btnTwitter.href = `https://twitter.com/intent/tweet?text=${dataCard.cardURL}`;
//   console.log(dataCard.cardURL);
// }
