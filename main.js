const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
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
 
}