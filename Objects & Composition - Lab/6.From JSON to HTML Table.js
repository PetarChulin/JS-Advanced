function fromJSONToHTMLTable(input) {

    let table = JSON.parse(input);

    let output = ['<table>'];
    output.push(makeKeyRow(table));
    table.forEach((obj) => output.push(makeValueRow(obj)));
    output.push('</table>');

    console.log(output.join('\n'));

    function makeKeyRow(table) {      
        let result = '  <tr>';
        Object.keys(table[0]).forEach(key => {
            result += `<th>${escapeSymbols(key)}</th>`;
        });
        result += '</tr>';
        return result;
    }
    function makeValueRow(obj) {
        let result = '  <tr>';
        Object.values(obj).forEach(value => {
            result += `<td>${escapeSymbols(value)}</td>`;
        });
        result += '</tr>';
        return result;
    }

    function escapeSymbols(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}
fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
);
