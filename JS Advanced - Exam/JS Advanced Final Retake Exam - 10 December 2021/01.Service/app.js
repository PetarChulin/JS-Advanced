window.addEventListener('load', solve);

function solve() {

    let productTypeField = document.getElementById('type-product');
    let descriptionField = document.getElementById('description');
    let clientNameField = document.getElementById('client-name');
    let clientPhoneField = document.getElementById('client-phone');
    let recievedOrdersField = document.getElementById('received-orders');
    let completedOrdersField = document.getElementById('completed-orders');

    let sendFormBtn = document.querySelector('button[type="submit"]');
    let clearBtn = document.querySelector('button[class="clear-btn"]');

    sendFormBtn.addEventListener('click', sendForm);
    clearBtn.addEventListener('click', (e) => {
        while (e.target.nextElementSibling != null) {
            e.target.nextElementSibling.remove();
        }
    });

    function sendForm(e) {
        e.preventDefault();
        if (!descriptionField.value || !clientNameField.value || !clientPhoneField.value) {
            return;
        }

        let divEl = document.createElement('div');
        divEl.classList = 'container';
        let h2El = document.createElement('h2');
        let h3El = document.createElement('h3');
        let h4El = document.createElement('h4');
        let startBtn = document.createElement('button');
        startBtn.textContent = 'Start repair'
        startBtn.classList = 'start-btn';
        let finishtBtn = document.createElement('button');
        finishtBtn.textContent = 'Finish repair';
        finishtBtn.classList = 'finish-btn';
        finishtBtn.disabled = true;


        h2El.textContent = `Product type for repair: ${productTypeField.value}`;
        h3El.textContent = `Client information: ${clientNameField.value}, ${clientPhoneField.value}`;
        h4El.textContent = `Description of the problem: ${descriptionField.value}`;

        divEl.appendChild(h2El);
        divEl.appendChild(h3El);
        divEl.appendChild(h4El);
        divEl.appendChild(startBtn);
        divEl.appendChild(finishtBtn);

        recievedOrdersField.appendChild(divEl);

        descriptionField.value = '';
        clientNameField.value = '';
        clientPhoneField.value = '';

        startBtn.addEventListener('click', () => {
            startBtn.disabled = true;
            finishtBtn.disabled = false;
        });

        finishtBtn.addEventListener('click', (e) => {
           
            divEl.removeChild(startBtn);
            divEl.removeChild(finishtBtn);
            completedOrdersField.appendChild(divEl);           
        });
    }
}