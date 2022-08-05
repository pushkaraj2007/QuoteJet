const generateQuoteBtn = document.querySelector('.generate-quote-btn');
const quote = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.quote-author');
const shareOnTwitter = document.querySelector('.share-on-twitter');
const moreOptionsImg = document.querySelector('.more-optionsImg')
const moreOptionsDiv = document.querySelector('.more-optionsDiv')

const generateQuote = async ()=>{
    let res = await fetch('https://api.quotable.io/random');
    let response = await res.json()
    quote.innerText = `"${response.content}"`
    quoteAuthor.innerText = `- ${response.author}`
}

generateQuote();

generateQuoteBtn.onclick = async ()=>{
    try {
       await generateQuote()
    } catch (error) {
        console.log(error)
    }
}

moreOptionsImg.onclick= ()=>{
    moreOptionsDiv.classList.toggle('hide')
}

shareOnTwitter.onclick = ()=>{
    location.href = `https://twitter.com/intent/tweet?text=${quote.innerText}%0A%0A${quoteAuthor.innerText}`
}