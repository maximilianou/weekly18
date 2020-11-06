
const theArticles = document.querySelectorAll('article');
theArticles.forEach( (e) => console.log(e));

const elLasagna = document.querySelector('#lasagna') as HTMLElement;
console.log(`${elLasagna}`);
console.log(`${JSON.stringify(elLasagna)}`);
