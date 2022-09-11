# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size;
- See hover states for all interactive elements on the page;
- Generate a new piece of advice by clicking the dice icon;
- Refresh the page and continue the advice they were reading;

### Screenshots

#### Desktop Layout

![Desktop](https://github.com/emanuelm45/portfolio-images/blob/main/advice-generator-app/desktop.png)

#### Mobile Layout

<p align="center">
  <img src="https://github.com/emanuelm45/portfolio-images/blob/main/advice-generator-app/mobile.png" alt="Mobile">
</p>

### Links

- Solution URL: https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db/hub/advice-generator-app-made-with-html-sass-and-vanilla-js-BPfyt38Ado
- Live Site URL: https://emanuelm45.github.io/advice-generator-app/

## My process

### Built with

- Semantic HTML5 markup
- SASS
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- Vanilla JS

### What I learned

I got a little more familiarized with fetch method to get information.

```js
const getRandomQuote = async () => {
    const req = await fetch('https://api.quotable.io/random?maxLength=100')
    const res = await req.json()
    return res
}

btnGetQuote.addEventListener('click', () => {
  getRandomQuote().then(data => {
    paragraphQuote.innerText = `${data.content}`
    paragraphAuthor.innerText = `- ${data.author}`
    adviceNumber.innerText = ++adviceCounter
  )}
```

### Continued development

I am going to search more about fetch and API to implement on my future projects.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/pt-BR/)
- [Rapid API](https://rapidapi.com/) - This WebSite helped me find a good quote API

## Author

- Frontend Mentor - [@emanuelm45](https://www.frontendmentor.io/profile/emanuelm45)
- LinkedIn - [Emanuel Marques](https://www.linkedin.com/in/emanuel-marques-541617215/)
