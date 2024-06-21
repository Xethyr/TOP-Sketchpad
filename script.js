const containerDiv = document.getElementById('container');
const newGridBtn = document.getElementById('prompt');

for (let i = 0; i < 16 * 16; i++) {
    containerDiv.appendChild(document.createElement('div'));
}

containerDiv.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'red';
})



