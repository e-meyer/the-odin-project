// first task

const container = document.getElementById('container');
const p = document.createElement('p');

p.textContent = 'Hey I\'m red'
p.style.color = 'red';

container.appendChild(p);

// second task

const h3 = document.createElement('h3')

h3.innerText = 'I\'m a blue h3!'
h3.style.color = 'blue'

container.append(h3);

// third task

const div = document.createElement('div')

div.style.border = '10px solid black'
div.style.backgroundColor = 'pink'

const h1 = document.createElement('h1')
const p2 = document.createElement('p')

h1.textContent = 'I\'m in a div'
p2.textContent = 'ME TOO!'

div.append(h1, p2)

container.append(div)


