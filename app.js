const getRandomQuote = async () => {
    const req = await fetch('https://api.quotable.io/random?maxLength=100')
    const res = await req.json()
    return res
}

const containerQuote = document.querySelector('.quote')
const adviceNumber = document.querySelector('h2.advice-number span')
const paragraphQuote = containerQuote.querySelector('q')
const paragraphAuthor = containerQuote.querySelector('.author')
const btnGetQuote = document.querySelector('.container__btn-get-quote')

let adviceCounter = 0;

btnGetQuote.addEventListener('click', () => {
    getRandomQuote().then(data => {
        paragraphQuote.innerText = `${data.content}`
        paragraphAuthor.innerText = `- ${data.author}`
        adviceNumber.innerText = ++adviceCounter

        localStorage.setItem('quote', data.content)
        localStorage.setItem('author', data.author)
        localStorage.setItem('number', adviceCounter)

        containerQuote.style.animation = 'appear-text .8s ease forwards'
        adviceNumber.style.animation = 'appear-text .8s ease forwards'
        paragraphQuote.style.quotes = 'initial'
        containerQuote.addEventListener('animationend', () => {
            containerQuote.style.animation = 'none'
            adviceNumber.style.animation = 'none'

        })
    })
})

window.onload = () => {
    const quoteData = localStorage.getItem('quote')
    const authorData = localStorage.getItem('author')
    const numberData = localStorage.getItem('number')
    if (quoteData) {
        paragraphQuote.innerText = quoteData
        paragraphAuthor.innerText = `- ${authorData}`
        adviceCounter = numberData
        adviceNumber.innerText = numberData
    }
    return
}