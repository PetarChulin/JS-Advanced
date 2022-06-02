function solve() {
    let [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

    let tableBody = document.querySelector('tbody');
    generateBtn.addEventListener('click', generate);
    buyBtn.addEventListener('click', buy);


    function generate() {

        let input = JSON.parse(document.querySelector('textarea').value);

        for (let furniture of input) {
            let tr = document.createElement('tr');

            let tdImage = document.createElement('td');
            let tdName = document.createElement('td');
            let tdPrice = document.createElement('td');
            let tdFactor = document.createElement('td');
            let tdMark = document.createElement('td');

            tr.appendChild(tdImage);
            tr.appendChild(tdName);
            tr.appendChild(tdPrice);
            tr.appendChild(tdFactor);
            tr.appendChild(tdMark);

            let image = document.createElement('img');
            image.src = furniture.img;
            tdImage.appendChild(image);

            tdName.innerText = furniture.name;
            tdPrice.innerText = furniture.price;
            tdFactor.innerText = furniture.decFactor;

            let checkBox = document.createElement('input');
            checkBox.type = 'checkbox';

            tdMark.appendChild(checkBox);

            tableBody.appendChild(tr);
        }
    }

    function buy() {
        let result = Array.from(document.querySelectorAll('textarea'))[1];
        let output = [];

        let toBuy = Array.from(document.querySelectorAll('input[type="checkbox"]'))
            .filter(e => e.checked === true)
            .map(e => e.parentNode.parentNode);

        let bought = toBuy.map(e => Array.from(e.querySelectorAll('td'))[1].innerHTML)
            .join(', ');

        output.push(`Bought furniture: ${bought}`);

        let totalPrice = toBuy.map(e => Array.from(e.querySelectorAll('td'))[2].innerHTML).map(Number)
            .reduce((acc, current) => acc + current, 0);

        output.push(`Total price: ${totalPrice.toFixed(2)}`);

        let averageFactor = toBuy.map(e => Array.from(e.querySelectorAll('td'))[3].innerHTML).map(Number)
            .reduce((acc, current) => acc + current, 0) / toBuy.length;

        output.push(`Average decoration factor: ${averageFactor}`);

        result.value = output.join('\n');
    }
}
