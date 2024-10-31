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

    if(validateFields(lastname, firstname1, pet)){
        const newperson = {
            firstname1: document.getElementById('firstname1').value,
            firstname2: document.getElementById('firstname2').value,
            lastname: document.getElementById('lastname').value,
            married: document.getElementById('married').checked,
            pet: document.getElementById('pet').value,
        }
        array.push(newperson);
        console.log(array);
        renderTable(array);
        form.reset()
        
    }
})  

renderTable(array);

