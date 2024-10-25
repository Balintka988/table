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

//-----------Amit órán csináltunk
createTableCell("th", 'vezetéknév', tr)
const keresztnev1 = createTableCell("th", 'keresztnév', tr)
createTableCell("th", 'haziallat', tr)
createTableCell("th", 'hazas', tr)

keresztnev1.colSpan = 2;//a keresztnév1 cellát olyanra állítjuk be hogy 2cellát foglaljon el

const tbody = document.createElement('tbody');
table.appendChild(tbody);


const form = document.getElementById('form');
form.addEventListener('submit', function(e){
    e.preventDefault()
    const lastname = document.getElementById('lastname');
    const firstname1 = document.getElementById('firstname1');
    const firstname2 = document.getElementById('firstname2');
    const married = document.getElementById('married');
    const pet = document.getElementById('pet');

    const lastnamevalue = lastname.value;
    const firstname1value = firstname1.value;
    let firstname2value = firstname2.value;
    const marriedvalue = married.checked;
    const petvalue = pet.value;

    if(validateFields(lastname, firstname1, pet)){
        if(firstname2value === ""){
            firstname2value = undefined;
        }
        const newperson = {
            firstname1: firstname1value,
            firstname2: firstname2value,
            lastname: lastnamevalue,
            married: marriedvalue,
            pet: petvalue,
        }
        array.push(newperson);
        console.log(array);
        renderTable();
        form.reset()
    }
})  

renderTable();

function renderTable(){
    tbody.innerHTML = '';
    for(const pers of array){
        const tbody_tr = document.createElement('tr');
        tbody.appendChild(tbody_tr);
     
        createTableCell("td", pers.lastname, tbody_tr );

        const keresztnev = createTableCell("td", pers.firstname1, tbody_tr );//azért kellett változóba tenni, hogy később hozzá tudjunk adni colSpan-t
        
        if(pers.firstname2 === undefined){//ha firstname2 undefined akkor firstname1 cella kettőt fog elfoglalni más esetben meg odateszi
            keresztnev.colSpan = 2;
        }
        else{
            createTableCell("td", pers.firstname2, tbody_tr );
        }

        createTableCell("td", pers.pet, tbody_tr );
    
        createTableCell("td", pers.married ? "Igen" : "Nem", tbody_tr );//ezzel leváltottuk a "hosszabb" if else-t


        
        tbody_tr.addEventListener ('click', function(e){//console.log('clicked');
        const selected = tbody.querySelector('.selected')
        
        if (selected != undefined){
            selected.classList.remove('selected');
            
        }
        e.currentTarget.classList.add('selected')
    })
}
}

function validateFields(lastname, firstname1, pet){
    let result = true;
    if(lastname.value === ""){
        const apa = lastname.parentElement;
        const error = apa.querySelector('.error')
        error.innerHTML = "Kötelező"
        result = false;
    }
    if(firstname1.value === ""){
        const apa = firstname1.parentElement;
        const error = apa.querySelector('.error')
        error.innerHTML = 'Kötelező'
        result = false;
    }
    if(pet.value === ""){
        const apa = pet.parentElement;
        const error = apa.querySelector('.error')
        error.innerHTML = 'Kötelező'
        result = false;
    }
    return result;
}
/**
 * 
 * @param {'td'|'th'} tagName 
 * @param {string} innerHTML 
 * @param {HTMLTableRowElement} parentElement 
 */
function createTableCell(tagName, innerHTML, parentElement){
    const element = document.createElement(tagName);
    element.innerHTML = innerHTML;
    parentElement.appendChild(element);
    return element;
}
