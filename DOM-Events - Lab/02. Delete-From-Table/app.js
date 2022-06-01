function deleteByEmail() {
    
    let input = document.querySelector('input').value;
   
    let entries = Array.from(document.querySelector('tbody').children);
    
    for (const e of entries) {
        if (e.children[1].textContent == input) {
            e.remove();
            document.getElementById('result').textContent = 'Deleted.';
        } else {
            document.getElementById('result').textContent = 'Not found.';
        }
    }
}