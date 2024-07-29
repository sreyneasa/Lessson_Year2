let users = [
    {
      "name": "Madden Medina",
      "gender": "male",
      "company": "BOINK",
      "email": "maddenmedina@boink.com",
      "phone": "+1 (808) 442-3969",
      "address": "486 Jerome Avenue, Staples, American Samoa, 2014"
    },
    {
      "name": "Graves Talley",
      "gender": "male",
      "company": "CEDWARD",
      "email": "gravestalley@cedward.com",
      "phone": "+1 (974) 449-3500",
      "address": "807 Bristol Street, Bascom, Oklahoma, 4102"
    },
    {
      "name": "Parks Greene",
      "gender": "male",
      "company": "ASSISTIA",
      "email": "parksgreene@assistia.com",
      "phone": "+1 (898) 550-2421",
      "address": "392 Schenck Place, Taft, Virginia, 2053"
    },
    {
      "name": "Georgina Bray",
      "gender": "female",
      "company": "GOKO",
      "email": "georginabray@goko.com",
      "phone": "+1 (870) 516-2040",
      "address": "470 Taylor Street, Forbestown, District Of Columbia, 9290"
    },
    {
      "name": "Hoover Lindsey",
      "gender": "male",
      "company": "WAZZU",
      "email": "hooverlindsey@wazzu.com",
      "phone": "+1 (942) 432-2941",
      "address": "389 Herkimer Court, Beaulieu, Colorado, 2949"
    }
  ];

// HTML DOM 
const container=document.querySelector(".container");
const result=document.querySelector("#result");

// Show detail 
let showDetail=(index)=>{
  // Remove detail
  document.querySelector("#detail").remove();

  // Create new div with id : detail 
  let detail=document.createElement("div");
  detail.id="detail";

  // Create h1 for name 
  let h1= document.createElement("h1");
  h1.textContent=users[index].name;
  detail.appendChild(h1);

  // Create p for email 
  let email=document.createElement("p");
  email.textContent="Email: "+ users[index].email;
  detail.appendChild(email);
  
  // Create p for phone number 
  let phone=document.createElement("p");
  phone.textContent="Phone: "+ users[index].phone;
  detail.appendChild(phone);

  // Create p for company name 
  let company=document.createElement("p");
  company.textContent="Company: "+ users[index].company;
  detail.appendChild(company);

  // Create p for address 
  let address=document.createElement("p");
  address.textContent="Address: "+ users[index].address;
  detail.appendChild(address);

  container.appendChild(detail);
}


// display result 
for(let index=0; index<users.length; index++){
  let card=document.createElement("div");
  card.className="card";
  card.textContent=users[index].name;
  card.addEventListener("click", () =>{
    console.log('hello');
    showDetail(index);
  });
  result.appendChild(card);
}