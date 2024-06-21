const containerDiv = document.getElementById('container');
const newGridBtn = document.getElementById('prompt');

for (let i = 0; i < 16 * 16; i++) {
    const newDiv = containerDiv.appendChild(document.createElement('div'));
    newDiv.className = 'grid-div'
}

containerDiv.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'red';
})

function promptWindow() {
    let choice = prompt('Choose a new grid size (max of 100):')
    if (!choice) {
        alert('Please enter a valid number!');
    } else {
        while (containerDiv.firstChild) {
            containerDiv.removeChild(containerDiv.firstChild);
        };
        for (let i = 0; i < choice * choice; i++) {
            const newDiv = containerDiv.appendChild(document.createElement('div'));
            newDiv.className = 'grid-div'
        };
        const gridDivs = document.querySelectorAll('.grid-div');
        gridDivs.forEach((div) => {
            div.style.flexBasis = `${Math.floor(100 / choice)}%`;
        })
    }
}

