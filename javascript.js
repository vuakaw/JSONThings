const header = document.querySelector('header');
const section = document.querySelector('section');
const requestURL = 'https://raw.githubusercontent.com/vuakaw/JSONThings/main/School.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    const superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}

function populateHeader(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['Equipo'];
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = 'Ciudad: ' + jsonObj['homeTown'] + ' // Formados: ' + jsonObj['formed'];
    header.appendChild(myPara);
}

function showHeroes(jsonObj) {
    const heroes = jsonObj['members'];

    for (var i = 0; i < heroes.length; i++) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara0 = document.createElement('p');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');

        myH2.textContent = heroes[i].name;
        myPara0.textContent = 'Nombre: ' + heroes[i].name;
        myPara1.textContent = 'Puesto: ' + heroes[i].position;
        myPara2.textContent = 'Edad: ' + heroes[i].age;
        myPara3.textContent = 'Habilidades conocidas:';

        const tools = heroes[i].skills;
        for (var j = 0; j < tools.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = tools[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara0);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}
request.open('GET', requestURL);
request.responseType = 'text'; // recibimos una cadena de tipo "string"
request.send();

request.onload = function() {
    const superHeroesText = request.response; // cogemos la cadena de response
    const superHeroes = JSON.parse(superHeroesText); // la convertimos a objeto
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}