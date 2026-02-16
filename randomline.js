const quotes =[ 
"All our dreams can come true, if we have the courage to pursue them.",
"The future belongs to those who believe in the beauty of their dreams." ,
"Dreams come true. Without that possibility, nature would not incite us to have them.", 
"Dream as if you'll live forever. Live as if you'll die today.",
"Some men see things as they are and say why. I dream things that never were and say why not.", 

"Let us make our future now, and let us make our dreams tomorrow's reality."];
const button = document.querySelector('button');
const quote = document.querySelector('h1');
button.addEventListener('click',()=>{
    const index =Math.floor(Math.random()*6);
    quote.textcontent = quotes[index];
})