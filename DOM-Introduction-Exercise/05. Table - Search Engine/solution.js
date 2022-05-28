function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let result = document.getElementById('searchField').value;
      let lines = Array.from(document.querySelectorAll('tbody tr'));

      for (const line of lines) {
         line.classList.remove('select');
         result != '' && line.textContent.includes(result) ? line.className = 'select' : null;
      }
   }
}
