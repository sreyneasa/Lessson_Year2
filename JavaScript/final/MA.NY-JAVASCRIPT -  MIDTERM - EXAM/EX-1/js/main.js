const createPoster = (event) => {
   // TODO: Create poster here
   let container = document.createElement('div');
   container.className = "container";
   document.body.appendChild(container);

   let poster = document.createElement('div');
   poster.className = 'poster';
   container.appendChild(poster);

   let poster_img = document.createElement('div');
   poster_img.className = 'poster-img';
   poster.appendChild(poster_img);

   let images = document.createElement('img');
   images.className = ('img');
   images.src ="images/poster.jpg";
   poster_img.appendChild(images);

   let poster_text = document.createElement('div');
   poster_text.className = 'poster-text';
   poster_img.appendChild(poster_text);

   let h1 = document.createElement('h1');
   h1.className = 'h1';
   h1.textContent="កង្រីជាតិថ្មី"
   poster_text.appendChild(h1);

   let p = document.createElement('p');
   p.className = "p";
   p.textContent = " រឿងព្រេងខ្មែរ​ ជារឿងនិទានប្រកបដោយគតិអប់រំទាក់ទិននឹងសីលធម៌សង្គម និង សៀវភៅរូបភាពសំរាប់កុមារជាដើម។"
   poster_text.appendChild(p);
   

}

// Main code 
const container = document.querySelector('.container');

// TODO:  Call function to create 10 poster here
createPoster ()

