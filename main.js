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

//itt minden sorban úgy van, hogy az első idézőjelbe azt írjuk le, hogy mit hozunnk létre az oldalon. A második idézőjelbe az Id-t írjuk,  a harmadikban meg azt, hogy mihez csatoljuk hozzá.
createHTMLelement  ('table', 'person_table', document.body);
createHTMLelementWithParentId('thead', 'person_thead', 'person_table');
createHTMLelementWithParentId('tr', 'person_tr', 'person_thead');
createHTMLelementWithParentId('tbody', 'person_tbody', 'person_table');

//ez egy függvényhívás ami majd a fejlécet fogja megcsinálni
createTableHeaderCell();



form.addEventListener('submit', function(e){//eseményfigyelő az űrlap elküldéséhez. Akkor fut le amikor rányomtunk a feltöltés gombra
    e.preventDefault()
    const form = e.currentTarget;//ez azért kellett mert feladat volt, hogy ne globális változóban legyen és így könyebb 
    if(validateFields("lastname", "firstname1", "pet")){//függvényhívás, ha minden kötelező mező ki van töltve akkor folytatódik a kód futása
        const newperson = {//itt vesszük fel a mezők értékeit egy objektumba
            firstname1: document.getElementById('firstname1').value,
            firstname2: document.getElementById('firstname2').value,
            lastname: document.getElementById('lastname').value,
            married: document.getElementById('married').checked,
            pet: document.getElementById('pet').value,
        }
        array.push(newperson);//newperson objektumot hozzáadta az array tömbhöz
        console.log(array);//konzolra kiírja a tömb tartalmát
        renderTable(array);//a táblázat új adatokkal való frissítése
        form.reset()//törli a beírt adatokat a cellákból
        
    }
})  

renderTable(array);

