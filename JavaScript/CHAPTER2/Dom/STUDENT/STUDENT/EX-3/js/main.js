const btn = document.querySelector('button');
const img = document.querySelector('img');

btn.addEventListener('click',function() {
  img.classList.toggle('change-direction')
  //in classList.add() to add class,
  // classList.remove() to remove class
  // classList.toggle() to toggle calss(toggle mean add or remove) : first add second remove
})
