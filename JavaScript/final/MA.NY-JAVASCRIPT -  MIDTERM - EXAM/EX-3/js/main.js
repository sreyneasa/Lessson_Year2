
const  clearInput = () => {
   //TODO: Clear data from input field
}

const createRow = (event) => {
   // TODO: Create new row with data from input field
let tbody = document.createElement('tbody');
tbody.textContent(tbody);
tbody.appendChild(tr);

let tr= document.createElement('tr');
tr.textContent(tr)
tr.appendChild(td);

let firstName = document.createElement('td');
firstName.textContent(firstName);
tr.appendChild(td);

let lastName = document.createElement('td');
lastName.textContent(lastName);
tr.appendChild(td);

let province = document.createElement('td');
province.textContent(province);
tr.appendChild(td);

let genders = document.createElement('td');
genders.textContent(genders);
tr.appendChild(td);

let skills = document.createElement('td');
skills.textContent(skills);
tr.appendChild(td);

let comment = document.createElement('td');
comment.textContent(comment);
tr.appendChild(td);

let btnSubmit  = document.createElement('td');
btnSubmit .textContent(btnSubmit);
tr.appendChild(td);
}


// Main
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const province = document.querySelector('#province');
const genders = document.querySelectorAll('input[type="radio"]');
const skills = document.querySelectorAll('.skill');
const comment = document.querySelector('#comment');
const tbody = document.querySelector('tbody');
const btnSubmit = document.querySelector('button');

// TODO: add event listeners to submit button
btnSubmit.addEventListener('click',button)




