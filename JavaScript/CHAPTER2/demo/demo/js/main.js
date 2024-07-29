const container = document.querySelector('.container');
const content = document.createElement('div')
content.className = 'content';
container.appendChild(content);

const h1 = document.createElement('h1');
h1.textContent = "Hello world";

content.appendChild(h1);

console.log(content)

const hello = document.createElement('div');
hello.setAttribute('div','hello');
hello.textContent = "Hello World";
content.appendChild(hello);

console.log(content)