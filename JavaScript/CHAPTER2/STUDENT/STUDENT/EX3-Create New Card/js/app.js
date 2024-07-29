// Create a new card
function createCard() {
  const card = document.createElement('div');
  card.classList.add('card');

  // Card Body
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  card.appendChild(cardBody);

  // Card Image
  const cardImage = document.createElement('img');
  cardImage.src = 'images/sample.png';
  cardBody.appendChild(cardImage);

  // Card Text
  const cardText = document.createElement('p');
  cardText.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, atque.';
  cardBody.appendChild(cardText);

  // Card Footer
  const cardFooter = document.createElement('div');
  cardFooter.classList.add('card-footer');
  card.appendChild(cardFooter);

  // Button in Card Footer
  const cardButton = document.createElement('button');
  cardButton.classList.add('button');
  cardButton.textContent = 'Add Card';
  cardFooter.appendChild(cardButton);

  // Add card to container
  container.appendChild(card);
}

// Main
const btnCreate = document.querySelector('#create');
const container = document.querySelector('.container');

btnCreate.addEventListener('click', createCard);


// // create a new card

// function createCard() {
//   const card = document.createElement('div');
//   card.classList.add('card');

//   // TODO CARD BODY 
//   // Create a div named "cardBody"
//   // Add class name "card-body" to cardBody
//   // append cardBody to card 
  

//   // TODO CARD IMAGE 
//   // create a img named cardImage
//   // add src images/sample.png to the cardImage 
//   // append cardImage to cardBody 


//   //  TODO CARD TEXT 
//   // Create a p named cardText
//   // add text above to cardText
//   // text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, atque."
//   // append cardText to cardBody 
  

//   // TODO CARD FOOTER 
//   // create a div named cardFooter
//   // add class name "card-footer" to cardFooter
//   // append cardFooter to  card


//   // TODO BUTTON IN CARD FOOTER 
//   // create a button named cardButton
//   // add class name "button" to cardButton
//   // add text content "Add Card" to cardButton 
//   // append cardButton to cardFooter 


//   // add card to containers
//   container.appendChild(card)
// }


// // Main
// const btnCreate = document.querySelector('#create');
// const container = document.querySelector('.container');

// btnCreate.addEventListener('click', createCard);



