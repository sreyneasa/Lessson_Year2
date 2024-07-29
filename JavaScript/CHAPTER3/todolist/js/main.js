let cards = [
  { description: 'card1', link: 'google.com' },
  { description: 'card2', link: 'google.com' },
  { description: 'card3', link: 'google.com' }
];

let container = document.createElement('div');
container.classList.add('container');

let row = document.createElement('div');
row.classList.add('row');
container.appendChild(row);

const col = document.createElement('div');
col.classList.add('col-6', 'mt-5');
row.appendChild(col);

const h2 = document.createElement('h2');
h2.textContent = 'All tasks';
col.appendChild(h2);

for (let i = 0; i < cards.length; i++) {
  const row2 = document.createElement('div');
  row2.classList.add('row');
  col.appendChild(row2);

  const card = document.createElement('div');
  card.classList.add('card', 'p-4', 'border-danger', 'mt-2');
  row2.appendChild(card);

  const span = document.createElement('span');
  card.appendChild(span);

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('name', 'markAsDone');
  checkbox.setAttribute('id', 'markAsDone');
  span.appendChild(checkbox);

  const paragraph = document.createElement('p');
  paragraph.textContent = cards[i].description;
  span.appendChild(paragraph);

  const link = document.createElement('a');
  link.setAttribute('href', cards[i].link);
  link.textContent = 'Read more';
  span.appendChild(link);

  const button = document.createElement('button');
  button.classList.add('btn', 'btn-danger');
  button.textContent = 'Delete';
  card.appendChild(button);
}

// Append the container to the document body or any desired parent element
document.body.appendChild(container);


//           one card ------------------

// let container = document.createElement('div');
// container.classList.add('container');

// let row = document.createElement('div');
// row.classList.add('row');
// container.appendChild(row);

// const col = document.createElement('div');
// col.classList.add('col-6', 'mt-5');
// row.appendChild(col);

// const h2 = document.createElement('h2');
// h2.textContent = 'All tasks';
// col.appendChild(h2);

// const row2 = document.createElement('div');
// row2.classList.add('row');
// col.appendChild(row2);

// const card = document.createElement('div');
// card.classList.add('card', 'p-4', 'border-danger', 'mt-2');
// row2.appendChild(card); // Fixed: Changed 'innerRow' to 'row2'

// const span = document.createElement('span');
// card.appendChild(span);

// const checkbox = document.createElement('input');
// checkbox.setAttribute('type', 'checkbox');
// checkbox.setAttribute('name', 'markAsDone');
// checkbox.setAttribute('id', 'markAsDone');
// span.appendChild(checkbox);

// const paragraph = document.createElement('p');
// paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. tiae voluptates labore?';
// span.appendChild(paragraph);

// const link = document.createElement('a');
// link.setAttribute('href', 'google.com'); // Fixed: Corrected the URL
// link.textContent = 'Read more';
// span.appendChild(link);

// const button = document.createElement('button');
// button.classList.add('btn', 'btn-danger');
// button.textContent = 'Delete';
// card.appendChild(button);

// // Append the container to the document body or any desired parent element
// document.body.appendChild(container);