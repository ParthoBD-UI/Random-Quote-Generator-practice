const quoteElement = document.querySelector('#quote');
const authorElement = document.querySelector('#author');
const button = document.querySelector('#button');

const urlAPI = "https://api.api-ninjas.com/v1/quotes";
const keyAPI = "xwnM9sGOdga4TWUH+SUhDw==X8vJeFchTaGW7etv";


const getQuote = () => {
    fetch(urlAPI, {
        headers: { 'X-Api-Key': keyAPI,},
    })
    .then(data => data.json())
    .then(item => {
        quoteElement.textContent = item[0].quote;
        authorElement.textContent = item[0].author;
    });
};

getQuote();
button.addEventListener('click', getQuote);