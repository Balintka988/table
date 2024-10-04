let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]
 
const table = document.createElement('table');
document.body.appendChild(table);
 
const thead = document.createElement('thead');
table.appendChild(thead);
 
const tr = document.createElement('tr');
thead.appendChild(tr);
 
const th_lastname = document.createElement('th');
tr.appendChild(th_lastname);
th_lastname.innerHTML='vezetéknév';
 
const th_firstname = document.createElement('th');
tr.appendChild(th_firstname);
th_firstname.innerHTML='keresztnév';
 
th_lastname.colSpan=2;

const th_pet = document.createElement('th');
tr.appendChild(th_pet);
th_pet.innerHTML="haziallat";

const th_married = document.createElement('th');
tr.appendChild(th_married);
th_married.innerHTML="hazas";

 
const tbody = document.createElement('tbody');
table.appendChild(tbody);
 
for(const pers of array){
    const tbody_tr = document.createElement('tr');
    tbody.appendChild(tbody_tr);
 
    const tbody_td_lastname = document.createElement('td');
    tbody_tr.appendChild(tbody_td_lastname);
   
    tbody_td_lastname.innerHTML = pers.lastname;
 
    const tbody_td_firstname = document.createElement('td');
    tbody_tr.appendChild(tbody_td_firstname);
   
    tbody_td_firstname.innerHTML = pers.firstname1;

    
 
    if(pers.firstname2 === undefined){
        tbody_td_firstname.colSpan = 2
    }
    else{
        const tbody_td_firstname = document.createElement('td');
        tbody_tr.appendChild(tbody_td_firstname);
       
        tbody_td_firstname.innerHTML = pers.firstname2;
    }
tbody_tr.addEventListener ('click', function(e){
    //console.log('clicked');
    const selected = tbody.querySelector('.selected')
    
    if (selected != undefined){
        selected.classList.remove('selected');
        
    }
    e.currentTarget.classList.add('selected')
})

const td_pet = document.createElement('td');
    tbody_tr.appendChild(td_pet);
    td_pet.innerHTML = pers.pet;

    const td_married = document.createElement('td');
    tbody_tr.appendChild(td_married);
    td_married.innerHTML = pers.married;


    if(pers.married === true){
        td_married.innerHTML = "Igen"
    }
    else{
        td_married.innerHTML = "Nem"
    }
}
