function search() {

   let input = document.getElementsByTagName('input')[0].value;
   let towns = Array.from(document.querySelectorAll('ul li'));
   let result = document.getElementById('result');

   let matches = 0;
   for (let i = 0; i < towns.length; i++) {
      let town = towns[i];
      if (input && town.textContent.indexOf(input) >= 0) {
         town.innerHTML = `<bold><u>${town.textContent}</u></bold>`;
         matches++;
      } else {
         town.innerHTML = town.textContent;
      }
   }
   result.textContent = `${matches} matches found`
}
