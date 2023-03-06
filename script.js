const quoteContainer = document.getElementById("quote-container")
const quoteText = document.getElementById("quote")
const authorText = document.getElementById("author")
const twitterBtn = document.getElementById("twitter")
const newQuoteBtn = document.getElementById("new-quote")
const loader = document.getElementById("loader")

// show loading
function loading() {
    loader.hidden = false
    quoteContainer.hidden = true
}

// hide loading
function complete() {
    quoteContainer.hidden = false
    loader.hidden = true
}

// show new quote
function newQuote() {
    loading()
    // pick a random number from localQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
    // Check if author field is blank and replace it with "unknown"
    if (!quote.author) {
        authorText.textContent = "unknown"
    } else {
        authorText.textContent = quote.author
    }
    // Check quote length to determine styling
    if (quote.text.length > 50) {
        quoteText.classList.add("long-quote")
    } else {
        quoteText.classList.remove("long-quote")
    }
    quoteText.textContent = quote.text
    complete()
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl, "-blank")
}

// Event listeners
newQuoteBtn.addEventListener("click", newQuote)
twitterBtn.addEventListener("click", tweetQuote)

// on load
newQuote()
