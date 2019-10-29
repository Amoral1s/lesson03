'use strict';

let spamBlock = document.querySelector('.adv'),
    books = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book'),
    body = document.body;


books[0].insertBefore(book[1], book[0]);
books[0].insertBefore(book[2], book[6]);
books[0].insertBefore(book[3], book[5]);
books[0].insertBefore(book[5], book[5]);

body.setAttribute('style', 'background: url(./image/you-dont-know-js.jpg)');

book[4].childNodes[1].textContent = 'Книга 3. this и Прототипы Объектов';
book[4].childNodes[1].setAttribute('style', 'color: darkkhaki');
    
let text2 = book[0].querySelectorAll('ul'),
    textLi = book[0].querySelectorAll('li'),
    text5 = book[5].querySelectorAll('ul'),
    textLi5 = book[5].querySelectorAll('li'),
    textUl = book[2].querySelector('ul'),
    textPart = book[2].querySelectorAll('li');

text2[0].insertBefore(textLi[0], textLi[0]);
text2[0].insertBefore(textLi[2], textLi[10]);
text2[0].insertBefore(textLi[6], textLi[4]);
text2[0].insertBefore(textLi[8], textLi[6]);

text5[0].insertBefore(textLi5[9], textLi5[2]);
text5[0].insertBefore(textLi5[3], textLi5[2]);
text5[0].insertBefore(textLi5[2], textLi5[5]);
text5[0].insertBefore(textLi5[6], textLi5[5]);
text5[0].insertBefore(textLi5[7], textLi5[5]);

let newLi = document.createElement('li'),
    newLi2 = document.createElement('li');

textPart[9].remove();
newLi.textContent = 'Глава 8: За пределами ES6';
newLi2.textContent = 'Приложение A: Благодарности!';
textUl.appendChild(newLi);
textUl.appendChild(newLi2);
console.log(textPart);

spamBlock.remove();

