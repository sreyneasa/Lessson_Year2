document.querySelector(".card").remove();

// Create card 
let card=document.createElement("div");
card.className="card";

// Create image 
let image=document.createElement("img");
image.src="image/image.jpg";
card.appendChild(image);

// Create p 
let p=document.createElement("p");
p.textContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat quas impedit rem labore animi itaque dignissimos earum! Rem, harum reprehenderit? A quaerat quas amet earum ipsam placeat recusandae corrupti?";

// Create a 
let a=document.createElement("a");
a.href="https://www.w3schools.com/";
a.textContent="Google";

p.appendChild(a);
card.appendChild(p);
document.body.appendChild(card);