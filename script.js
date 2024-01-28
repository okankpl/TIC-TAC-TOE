let fields = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
];

let currentPlayer = 'circle';

function init() {
    render();
}

function render() {
    let tableHtml = '<table>';
    for (let i = 0; i < 3; i++) {
        tableHtml += '<tr>';
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            tableHtml += `<td onclick="handleClick(event, ${index})">${fields[index] ? generateSymbolSVG(fields[index]) : ''}</td>`;
        }
        tableHtml += '</tr>';
    }
    tableHtml += '</table>';

    // Füge den HTML-Code in den Container ein
    document.getElementById('content').innerHTML = tableHtml;
}

function generateSymbolSVG(symbol) {
    const width = symbol === 'circle' ? 70 : 100;
    const height = symbol === 'circle' ? 70 : 100;

    return symbol === 'circle' ? generateCircleSVG(width, height) : generateCrossSVG(width, height);
}

function generateCircleSVG(width, height) {
    return `
        <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <circle cx="${width / 2}" cy="${height / 2}" r="${width / 2 - 5}" fill="none" stroke="#00B0EF" stroke-width="5" stroke-dasharray="0 1000">
                <animate attributeName="stroke-dasharray" values="0 1000; 1000 0" dur="3s" keyTimes="0;1" fill="freeze" />
            </circle>
        </svg>
    `;
}

function generateCrossSVG(width, height) {
    return `
        <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <line x1="${width / 4}" y1="${height / 4}" x2="${width * 3 / 4}" y2="${height * 3 / 4}" stroke="#FFC000" stroke-width="5">
                <animate attributeName="x2" values="${width / 4};${width * 3 / 4}" dur="500ms" fill="freeze" />
                <animate attributeName="y2" values="${height / 4};${height * 3 / 4}" dur="500ms" fill="freeze" />
            </line>
            <line x1="${width * 3 / 4}" y1="${height / 4}" x2="${width / 4}" y2="${height * 3 / 4}" stroke="#FFC000" stroke-width="5">
                <animate attributeName="x2" values="${width * 3 / 4};${width / 4}" dur="500ms" fill="freeze" />
                <animate attributeName="y2" values="${height / 4};${height * 3 / 4}" dur="500ms" fill="freeze" />
            </line>
        </svg>
    `;
}

function handleClick(event, index) {
    if (fields[index] === null) {
        fields[index] = currentPlayer;
        render(); // Aktualisiere das Spielfeld

        // Entferne das onclick-Attribut, um weitere Klicks zu verhindern
        event.target.onclick = null;

        // Wechsle den Spieler
        currentPlayer = currentPlayer === 'cross' ? 'circle' : 'cross';
    }
}
