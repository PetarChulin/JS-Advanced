function solve() {

  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let textArray = Array.from(text);
  let result = '';

  switch (convention) {
    case 'Camel Case':
      correct();
      break;
    case 'Pascal Case':
      correct();
      result = result.charAt(0).toUpperCase() + result.substring(1);
      break;
    default:
      result = 'Error!'
  }
  function correct () {
    for (let i = 0; i < textArray.length; i++) {
      if (textArray[i] == ' ') {
        result += (textArray[i + 1]).toUpperCase();
        textArray.splice(textArray[i], 1);
      } else {
        result += textArray[i].toLowerCase();
      }
    }
  }
  let finalResult = document.getElementById('result');
  finalResult.textContent = result;
}