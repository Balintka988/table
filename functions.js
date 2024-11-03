/**
 * 
 * @param {'td'|'th'} tagName 
 * @param {string} innerHTML 
 * @param {HTMLTableRowElement} parentElement 
 */
function createTableCell(tagName, innerHTML, parentElement){//ezeket az elemeket hozzuk létre ebben a függvényben
    const element = document.createElement(tagName);//létrehozunk egy cimként amit eltárolunk az element változóban ez vagy th vagy td
    element.innerHTML = innerHTML;//itt az innerHTML aktuális tartalmát megadjuk az element változónak, ami string
    parentElement.appendChild(element);//vegül hozzáadjuk a parentElementhez az elementet
    return element;//visszatérünk az elementtel
}


function createHTMLelement(tag, id, parent){
    const HTMLelement = document.createElement(tag);
    HTMLelement.id = id;//itt a HTMLelementnek adunk egy id-t
    parent.appendChild(HTMLelement);
}

function createHTMLelementWithParentId(tag, id, parentId){
    const parent_element = document.getElementById(parentId);
    if (parent_element != undefined){//csak abban az esetben tesszük ezt meg hogyha a bekért parent_element létezik
        createHTMLelement(tag, id, parent_element);//itt meghívjuk a createHTMLelement függvényünket viszont parent_elementet adunk neki parent helyett
    }
}

function createTableHeaderCell(){
    const head_tr = document.getElementById('person_tr');
    //-----------Amit órán csináltunk
    createTableCell("th", 'vezetéknév', head_tr)
    const keresztnev1 = createTableCell("th", 'keresztnév', head_tr)//eltároljuk egy változóban a keresztnevet annak érekében hogy később tudjunk hozzáadni colspant
    createTableCell("th", 'haziallat', head_tr)
    createTableCell("th", 'hazas', head_tr)
    keresztnev1.colSpan = 2;//a keresztnév1 cellát olyanra állítjuk be hogy 2cellát foglaljon el
}

function renderTable(person_array){
    const tbody = document.getElementById("person_tbody");//megkeressük a 'person_tbody'idjű törzset és eltároljuk egy változóban
    tbody.innerHTML = "";//kitöröljük az imént megadott tartalmat
    for(const pers of person_array){//végigmegyünk a person_array tömbön és itt hozzuk létre a táblázatunk sorait
        const tbody_tr = document.createElement('tr');//új sort hozunk létre
        tbody.appendChild(tbody_tr);//hozzáadjuk a tbody-ba a törzsbe
     
        createTableCell("td", pers.lastname, tbody_tr );//itt adjuk hozzá a vezetéknevet a táblázatunk sorához

        const keresztnev = createTableCell("td", pers.firstname1, tbody_tr );//azért kellett változóba tenni, hogy később hozzá tudjunk adni colSpan-t
        
        if(!pers.firstname2){//ha firstname2 undefined akkor firstname1 cella kettőt fog elfoglalni
            keresztnev.colSpan = 2;
        }
        else{
            createTableCell("td", pers.firstname2, tbody_tr );//ha van második keresztnév akkor simán hozzáadjuk azt is
        }

        createTableCell("td", pers.pet, tbody_tr );//hozzáadjuk a háziállat cellát is a 
    
        createTableCell("td", pers.married ? "Igen" : "Nem", tbody_tr );//ezzel leváltottuk a "hosszabb" if else-t


        
        tbody_tr.addEventListener ('click', function(e){//console.log('clicked');
        const selected = tbody.querySelector('.selected')
        //ha van olyan sor amire már rá lett kattintva akkor arról eltávolítjuk a kijelölést
        if (selected != undefined){
            selected.classList.remove('selected');
            
        }
        e.currentTarget.classList.add('selected')//ha van egy új kattintás egy új sorra akkor hozzáadjuk
    })
}
}

//ezt a módszert azért hagytam mert így nem tudtam megoldani azt hogy mindenhova más hibaüzenetet adjon
/*
function validateFields(fields) {
    let nincs_ures = true; // Kezdetben feltételezzük, hogy minden mezőben van valami írva

    for (const field of fields) {
        if (!validateElement(field)) {//itt nézzük meg az aktuális mezőt hogy van e benne valami
            nincs_ures = false; // Ha talál érvénytelen mezőt, false értékkel tér vissza 
        }
    }

    return nincs_ures; // Visszaadja, hogy minden mező érvényes-e
}
*/

function validateFields(lastname, firstname1, pet){
    const keresztnev = document.getElementById(lastname); //megkeressük a vezetéknevet
    const vezeteknev = document.getElementById(firstname1); // a keresztnevet
    const allat = document.getElementById(pet); // és az állat mezőjét

    let nincs_kihagyva = true;//alapból true értékkel indulunk, feltételezzük, hogy nincs kihagyás
    if(!validateElement(keresztnev, "Kell a vezetékneved")){//itt adjuk meg mindegyiknek a személyre szabott hibaüzenetét
        nincs_kihagyva = false;//ha a mező üres akkor false értékkel tér visszas
    }
    if(!validateElement(vezeteknev, "Kell a keresztneved")){
        nincs_kihagyva = false;
    }
    if(!validateElement(allat, "Az állatodat se felejtsd el")){
        nincs_kihagyva = false;
    }

    return nincs_kihagyva
}


//Ez a függvényünk ugyanúgy megnézi hogy üres e a mezőnk csak itt ha már üres akkor error message-t ad vissza ha viszont nem üres akkor meg törli
function validateElement(field, hibauzenet) {//itt kettő paramétert vesz fel a függvényünk a field amit ellenőrizni fogunk és a hozzátartozó hibaüzenet
    const parentElement = field.parentElement;
    const error = parentElement.querySelector('.error');

    if (field.value === "") {
        error.innerHTML = hibauzenet;//itt adjuk meg a hibaüzenetet ha nincs semmi beírva és ez után false értékkel tér vissza
        return false;
    }

    error.innerHTML = "";//itt töröljük ki a hibaüzenetet

    return true;
}