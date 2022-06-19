window.addEventListener('load', solve);

function solve() {

    let model = document.getElementById('model');
    let year = document.getElementById('year');
    let description = document.getElementById('description');
    let price = document.getElementById('price');
    let list = document.getElementById('furniture-list');

    document.getElementById('add').addEventListener('click', addToList);

    let totalSum = document.querySelector('.total-price');
    totalSum = Number(totalSum.textContent);

    console.log(totalSum);
    function addToList(e) {
        e.preventDefault();

        let yearP = Number(year.value);
        let priceP = Number(price.value);

        if (!model.value || !year.value || !description.value || !price.value) { return }
        if (Number(yearP) <= 0 || Number(priceP) <= 0) { return }
        
        let tr = el('tr', '', list);
        tr.className = 'info';
        el('td', `${model.value}`, tr);
        el('td', `${priceP.toFixed(2)}`, tr);
        let td = el('td', '', tr);
        let moreBtn = el('button', `More Info`, td);
        moreBtn.className = 'moreBtn';
        let buyBtn = el('button', `Buy it`, td);
        buyBtn.className = 'buyBtn';
        let tr1 = el('tr', '', list);
        tr1.className = 'hide';
        el('td', `Year: ${year.value}`, tr1);
        let desc = el('td', `Description: ${description.value}`, tr1);
        desc.colSpan = '3';

        moreBtn.addEventListener('click', () => {
            if (moreBtn.textContent == 'More Info') {
                tr1.style = 'display: contents;';
                moreBtn.textContent = `Less Info`;
            } else if (moreBtn.textContent == 'Less Info') {
                tr1.style = 'display: none;';
                moreBtn.textContent = `More Info`;
            }
        });
        buyBtn.addEventListener('click', (e) => {
            totalSum += Number(e.target.parentNode.previousElementSibling.textContent);
            document.querySelector('.total-price').textContent = totalSum.toFixed(2);
            e.target.parentNode.parentNode.remove();
        })
    }

    function el(type, content, parent) {
        const element = document.createElement(type);
        element.textContent = content;

        if (parent) {
            parent.appendChild(element);
        }
        return element;
    }
}
