function sumTable() {

    let rows = document.querySelectorAll('tr td:nth-of-type(2)');

    let sumarize = Array.from(rows);
    let sum = 0;
    for (let i = 0; i < sumarize.length; i++) {
        sum += Number(sumarize[i].textContent);
        
    }
    let sumed = document.getElementById('sum');
    sumed.textContent = sum;
    console.log(sumarize);
}