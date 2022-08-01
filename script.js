const generateQuoteBtn = document.querySelector('.generate-quote-btn');
const quote = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.quote-author');

generateQuoteBtn.onclick = async ()=>{
    try {
        let res = await fetch('https://api.quotable.io/random');
        let response = await res.json()
        quote.innerText = `"${response.content}"`
        quoteAuthor.innerText = `- ${response.author}`
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}