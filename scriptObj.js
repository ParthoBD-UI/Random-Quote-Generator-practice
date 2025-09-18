const randomQuotes = [
    {
        quote: 'The only thing we have to fear is fear itself.',
        author: 'Aristotle',
},
    {
        quote: 'All the world\'s a stage, and all the men and women merely players.',
        author: 'Socrates',
},
    {
        quote: 'A writer is someone for whom writing is more difficult than it is for other people.',
        author: 'Putin',
},
    {
        quote: 'When I let go of what I am, I become what I might be.',
        author: 'Trumph',
},
    {
        quote: 'Life is not measured by the number of breaths we take, but by the moments that take our breath away.',
        author: 'Partho',
},
    {
        quote: 'To live is the rarest thing in the world. Most people exist, that is all.',
        author: 'Mahbeer',
},
    {
        quote: 'If you don\'t know where you are going, any road will get you there.',
        author: 'Tasmia',
},
];

const quoteElement = document.querySelector('#quote');
const authorElement = document.querySelector('#author');
const button = document.querySelector('#button');

function autoQuote () {
    const quoteIndex = Math.floor(Math.random () * randomQuotes.length);
    //console.log(quoteIndex);
    quoteElement.textContent = randomQuotes [quoteIndex].quote;
    authorElement.textContent = randomQuotes [quoteIndex].author;

}
autoQuote ()
button.addEventListener('click', autoQuote);