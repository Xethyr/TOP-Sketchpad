const containerDiv = document.getElementById('container');
const newGridBtn = document.getElementById('prompt');

for (let i = 0; i < 16; i++) {
    const columnDiv = containerDiv.appendChild(document.createElement('div'));
    columnDiv.className = 'column';
    for (let j = 0; j < 16; j++) {
        const rowDiv = columnDiv.appendChild(document.createElement('div'));
     rowDiv.className = 'row';
    }
}



containerDiv.addEventListener('mouseover', (e) => {
    if (e.target.className === 'row') {
        e.target.style.backgroundColor = 'red';
    }
})

function promptWindow() {
    let choice = prompt('Choose a new grid size (max of 100):')
    if (!choice) {
        alert('Please enter a valid number!');
    } else {
        while (containerDiv.firstChild) {
            containerDiv.removeChild(containerDiv.firstChild);
        };
        for (let i = 0; i < choice; i++) {
            const columnDiv = containerDiv.appendChild(document.createElement('div'));
            columnDiv.className = 'column';
            for (let j = 0; j < choice; j++) {
                const rowDiv = columnDiv.appendChild(document.createElement('div'));
             rowDiv.className = 'row';
            }
        }
    }
}

