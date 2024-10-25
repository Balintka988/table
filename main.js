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

createHTMLelement  ('table', 'person_table', document.body);
createHTMLelementWithParentId('thead', 'person_thead', 'person_table');
createHTMLelementWithParentId('tr', 'person_tr', 'person_thead');

createHTMLelementWithParentId('tbody', 'person_tbody', 'person_table');


createTableHeaderCell();


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
        renderTable(array);
        form.reset()
    }
})  

renderTable(array);



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

