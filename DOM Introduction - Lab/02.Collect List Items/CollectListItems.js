function extractText() {
    let elements = document.getElementById('items');
    let textArea = document.getElementById('result');
    textArea.value = elements.textContent;
}
// function extractText() {
//     let elements = Array.from(document.querySelectorAll('li'));
//     let items = elements.map(e => e.textContent).join('\n');
//     let textArea = document.getElementById('result');
//     textArea.value = items;
// }