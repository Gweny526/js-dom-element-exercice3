// 1
let h1Purple = document.getElementsByClassName('redPurple')
console.log(h1Purple);

// 2
let queryP = document.querySelectorAll('.redPurple')
console.log(queryP);

// 3
let h1Purple2 = document.querySelectorAll('.redPurple')[0]
console.log(h1Purple2);

// correction 
let recupH1 = document.querySelectorAll('h1.redPurple')
console.log(recupH1);

// 4
let allLiPSpan = document.querySelectorAll('li, p, span')
console.log(allLiPSpan);

// 5
let liImpP = document.querySelectorAll('li.important, p')
console.log(liImpP);

// 6
let h1Span = document.querySelectorAll('h1.redPurple, span.redPurple')
console.log(h1Span);