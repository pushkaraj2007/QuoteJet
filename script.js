const generateQuoteBtn = document.querySelector('.generate-quote-btn');
const quote = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.quote-author');
const shareOnTwitter = document.querySelector('.share-on-twitter');
const shareOnWhatsapp = document.querySelector('.share-on-whatsapp');
const copy = document.querySelector('.copy-to-clipboard');
const moreOptionsImg = document.querySelector('.more-optionsImg')
const moreOptionsDiv = document.querySelector('.more-optionsDiv')
const body = document.querySelector('body')

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

shareOnWhatsapp.onclick = ()=>{
    location.href = `https://web.whatsapp.com/send?text=${quote.innerText}%0A%0A%0A${quoteAuthor.innerText}`
}

copy.onclick = ()=>{
    let input = document.createElement('input')
    input.value = quote.innerText
    body.append(input)
    input.select()
    document.execCommand('copy')
    body.removeChild(input)
    console.log(input.value)
}

body.onclick = (e)=>{
    if(e.target !== document.querySelector('.more-optionsDiv')){
        console.log(moreOptionsDiv.className.split(' '))
        if(e.target !== document.querySelector('.more-optionsImg')){
            moreOptionsDiv.classList.add('hide')
        }
    }
    else{
        console.log('you are inside div')
    }
}