let tbody=document.querySelector('tbody');
const users = [
  {
    id: 1,
    name: "Madden Medina",
    gender: "male",
    company: "BOINK",
    phone: "+1 (808) 442-3969",
    address: "486 Jerome Avenue, Staples, American Samoa, 2014",
  },
  {
    id: 2,
    name: "Graves Talley",
    gender: "male",
    company: "CEDWARD",
    phone: "+1 (974) 449-3500",
    address: "807 Bristol Street, Bascom, Oklahoma, 4102",
  },
  {
    id: 3,
    name: "Parks Greene",
    gender: "male",
    company: "ASSISTIA",
    phone: "+1 (898) 550-2421",
    address: "392 Schenck Place, Taft, Virginia, 2053",
  },
  {
    id: 4,
    name: "Georgina Bray",
    gender: "female",
    company: "GOKO",
    phone: "+1 (870) 516-2040",
    address: "470 Taylor Street, Forbestown, District Of Columbia, 9290",
  },
  {
    id: 5,
    name: "Hoover Lindsey",
    gender: "male",
    company: "WAZZU",
    phone: "+1 (942) 432-2941",
    address: "389 Herkimer Court, Beaulieu, Colorado, 2949",
  },
];

// function deleteTr(event){
//   event.target.closest('tr').remove();
// }


function getData(object) {
  for (let value of object){
    let tr = document.createElement('tr');
    let tdID = document.createElement('td');
    let tdName = document.createElement('td');
    let tdGender = document.createElement('td');
    let tdCompany = document.createElement('td');
    let tdPhone = document.createElement('td');
    let tdAddress = document.createElement('td');
    let btn = document.createElement('button');

    btn.textContent='delete';
    btn.addEventListener('click', function(event){
      event.target.parentElement.remove()
      
    });

    tdID.textContent=value['id'];
    tdName.textContent=value.name;
    tdGender.textContent=value.gender;
    tdCompany.textContent=value.company;
    tdPhone.textContent=value.phone;
    tdAddress.textContent=value.address;
    


    tr.appendChild(tdID);
    tr.appendChild(tdName);
    tr.appendChild(tdGender);
    tr.appendChild(tdCompany);
    tr.appendChild(tdPhone);
    tr.appendChild(tdAddress);
    tr.appendChild(btn);
    tbody.appendChild(tr);
  }

}

getData(users);

