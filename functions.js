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
//létrehozni egy ekementet createElement(tag)
//id-t adni neki (stringet adni neki)
//szeretnénk appendchildolni valamire (parent)

//előszedjük parent id(string) alapján a parent elementet
//ha definiált a parentElement(if) 
//meghívjuk a createHTML elementet 3paraméterre van szüksége

//elkérjük a table_header row-t id szerint


function createHTMLelement(tag, id, parent){
    const HTMLelement = document.createElement(tag);
    HTMLelement.id = id;
    parent.appendChild(HTMLelement);
}

function createHTMLelementWithParentId(tag, id, parentId){
    const parent_element = document.getElementById(parentId);
    if (parent_element != undefined){
        createHTMLelement(tag, id, parent_element);
    }
}

function createTableHeaderCell(){
    const head_tr = document.getElementById('person_tr');
    //-----------Amit órán csináltunk
    createTableCell("th", 'vezetéknév', head_tr)
    const keresztnev1 = createTableCell("th", 'keresztnév', head_tr)
    createTableCell("th", 'haziallat', head_tr)
    createTableCell("th", 'hazas', head_tr)
    keresztnev1.colSpan = 2;//a keresztnév1 cellát olyanra állítjuk be hogy 2cellát foglaljon el
}

function renderTable(person_array){
    const tbody = document.getElementById("person_tbody");
    tbody.innerHTML = "";
    for(const pers of person_array){
        const tbody_tr = document.createElement('tr');
        tbody.appendChild(tbody_tr);
     
        createTableCell("td", pers.lastname, tbody_tr );

        const keresztnev = createTableCell("td", pers.firstname1, tbody_tr );//azért kellett változóba tenni, hogy később hozzá tudjunk adni colSpan-t
        
        if(!pers.firstname2){//ha firstname2 undefined akkor firstname1 cella kettőt fog elfoglalni más esetben meg odateszi
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


//ez a függvényünk megnézi, hogy a mezőink ki vannak e töltve. ha bármelyik nincsen kitöltve akkor hamisra állítja a van_e változónkat hamisra állítja
function validateFields(lastname, firstname1, pet) {
    let van_e = true;//adunk egy kezdeti értéket ennek a boolean-nak

    if (!validateElement(lastname)) {
        van_e = false;
    }

    if (!validateElement(firstname1)) {
        van_e = false;
    }

    if (!validateElement(pet)) {
        van_e = false;
    }

    return van_e;//visszaadja, hogy ki vannak-e töltve a mezők
}

//Ez a függvényünk ugyanúgy megnézi hogy üres e a mezőnk csak itt ha már üres akkor error message-t ad vissza
function validateElement(field) {
    const parentElement = field.parentElement;//megnézi a field mező szülőelemét és elmenti a parentElement változóba
    const error = parentElement.querySelector('.error');

    if (field.value === "") {
        error.innerHTML = "Kötelező";
        return false;
    }

    error.innerHTML = "";
    return true;
}