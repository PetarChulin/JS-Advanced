function addItem() {

    let text = document.getElementById('newItemText').value;
    let list = document.getElementById('items');
    let li = document.createElement('li');
  

    li.textContent = text;
    list.appendChild(li);
    document.getElementById('newItemText').value = '';

}