function addItem() {
    let text = document.getElementById('newItemText').value;

    let list = document.getElementById('items');
    let li = document.createElement('li');
    let a = document.createElement('a');
    
    a.textContent = '[Delete]';
    a.href = '#';
    a.addEventListener('click' , () => a.parentElement.remove());
  
    li.textContent = text;
    li.appendChild(a);
    list.appendChild(li);
    text = '';
}