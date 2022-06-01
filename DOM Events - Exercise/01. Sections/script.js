function create(words) {

   let array = words;
   let contentDiv = document.getElementById('content');

   for (let i = 0; i < array.length; i++) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.style.display = 'none';
      p.textContent = array[i];
      div.addEventListener('click', () => { p.style.display = 'block'; });

      div.appendChild(p)
      contentDiv.appendChild(div);

   }
}