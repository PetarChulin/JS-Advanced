function solve() {

   let listArea = document.querySelector('textarea');
   
   let addBtns = [...document.querySelectorAll('div[class="product-add"]')];
   let checkOutBtn = document.querySelector('button[class="checkout"]');  

   let bought = new Set();
   let totalPrice = 0;

   checkOutBtn.addEventListener('click', () => {
      listArea.textContent += `You bought ${Array.from(bought).join(', ')} for ${totalPrice.toFixed(2)}.`
   });
   let disabledButtons = Array.from(document.querySelectorAll('button'));
   checkOutBtn.addEventListener('click', () => {
      disabledButtons.forEach(b => b.disabled = true)
   });

   addBtns.forEach(b => b.addEventListener('click', (e) => {
      listArea.textContent += 
      `Added ${e.target.parentNode.previousElementSibling
         .children[0].textContent} for ${e.target.parentNode.nextElementSibling.textContent} to the cart.\n`

      bought.add(e.target.parentNode.previousElementSibling.children[0].textContent);

      totalPrice += Number(e.target.parentNode.nextElementSibling.textContent);
   }));
}
