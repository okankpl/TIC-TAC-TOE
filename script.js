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
            const symbol = fields[index] === 'cross' ? 'X' : fields[index] === 'circle' ? 'O' : '';
            tableHtml += `<td>${symbol}</td>`;
        }
        tableHtml += '</tr>';
    }
    tableHtml += '</table>';

    // Füge den HTML-Code in den Container ein
    document.getElementById('content').innerHTML = tableHtml;
}

