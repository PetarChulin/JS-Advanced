function generateReport() {
    let inputs = [...document.getElementsByTagName('input')];
    let rows = [...document.getElementsByTagName('tr')];

    let result = [];
    let colsChecked = [];
    
    for (let i = 0; i < rows.length; i++) {
        let info = {};
        let row = rows[i];
        for (let y = 0; y < row.children.length; y++) {
            let checkBox = row.children[y].children[0];           
            i == 0 ? (checkBox.checked ? colsChecked.push(y) : null) : null;
            let propertyName = '';
            colsChecked.includes(y) ? (propertyName = inputs[y].name,
                info[propertyName] = row.children[y].textContent) : null;
        }
        i !== 0 ? result.push(info) : null;
    }
    document.getElementById('output').value = JSON.stringify(result, null, 1);
}