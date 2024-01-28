let fields = [
    'cross',
    null,
    'circle',
    null,
    null,
    'circle',
    'circle',
    null,
    'cross',
];

function init() {
    render();
}

function render() {
    let tableHtml = '<table>';
    for (let i = 0; i < 3; i++) {
        tableHtml += '<tr>';
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            const symbol = fields[index] === 'cross' ? generateAnimatedCrossSVG() : fields[index] === 'circle' ? generateAnimatedCircleSVG() : '';
            tableHtml += `<td>${symbol}</td>`;
        }
        tableHtml += '</tr>';
    }
    tableHtml += '</table>';

    // Füge den HTML-Code in den Container ein
    document.getElementById('content').innerHTML = tableHtml;
}

function generateAnimatedCircleSVG() {
    const width = 70;
    const height = 70;

    const svgTemplate = `
        <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <circle cx="${width / 2}" cy="${height / 2}" r="${width / 2 - 5}" fill="none" stroke="#00B0EF" stroke-width="5" stroke-dasharray="0 1000">
                <animate attributeName="stroke-dasharray" values="0 1000; 1000 0" dur="3s" keyTimes="0;1" fill="freeze" />
            </circle>
        </svg>
    `;

    return svgTemplate;
}

function generateAnimatedCrossSVG() {
    const width = 100;
    const height = 100;

    const svgTemplate = `
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

    return svgTemplate;
}