'use strict';

const createButton = document.querySelector('.js_create_button');
const btnTwitter = document.querySelector('.js_btnTwitter');

let dataCard = [];

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
      dataCard = data;
    });

  btnTwitter.addEventListener('click', handleTweet);
}

createButton.addEventListener('click', handleCreateCard);

//Function Twitter button

function handleTweet() {
  console.log(
    (btnTwitter.href = `https://twitter.com/intent/tweet?text=${dataCard.cardURL}`)
  );
  console.log(dataCard.cardURL);
}
