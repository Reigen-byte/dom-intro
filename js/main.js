const hi = 'Labas rytas. Lietuva'
console.log(hi);

const titleDOM = document.getElementById('title');
console.log(titleDOM);

titleDOM.innerText = hi;

// console.log(titleDOM.classList.add('red'));

console.log(titleDOM.classList);

for (let i = 0; i < titleDOM.classList.length; i++) {
    const c = titleDOM.classList[i];
    titleDOM.classList.remove(c);
} 

const sectionTitle = 'About you';
const sectionTitleDOM = document.querySelector('.section-title > span')
console.log(sectionTitleDOM);

sectionTitleDOM.innerText = sectionTitle