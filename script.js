const randomQuote = [
'The only thing we have to fear is fear itself.',
'All the world\'s a stage, and all the men and women merely players.',
'A writer is someone for whom writing is more difficult than it is for other people.',
'When I let go of what I am, I become what I might be.',
'Life is not measured by the number of breaths we take, but by the moments that take our breath away.',
'To live is the rarest thing in the world. Most people exist, that is all.',
'If you don\'t know where you are going, any road will get you there.',
];

const quoteElement = document.querySelector('#quote');
const authorElement = document.querySelector('#author');
const button = document.querySelector('#button');

function autoQuote () {
    const quoteIndex = Math.floor(Math.random () * randomQuote.length);
    console.log(quoteIndex);
    quoteElement.textContent = randomQuote [quoteIndex];

}
autoQuote ()
button.addEventListener('click', autoQuote);