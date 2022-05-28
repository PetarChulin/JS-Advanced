function solve() {
  let text = document.getElementById('input');
  let array = text.value.split('.').filter(s => s != '');
  console.log(array);
  let output = document.getElementById('output');


  while (array.length > 0) {
    let sentense = array.splice(0, 3).join('. ') + '.';
    console.log(sentense);
    let p = document.createElement('p');
    p.textContent = sentense;
    output.appendChild(p);
  }
}