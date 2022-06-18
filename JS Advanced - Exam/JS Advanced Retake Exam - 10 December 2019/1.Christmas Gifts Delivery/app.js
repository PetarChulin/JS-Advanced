function solution() {

    let gift = document.querySelector('input[type=text]');

    let addBtn = document.querySelector('button');
    let listParent = '';

    addBtn.addEventListener('click', addGifts);
    addBtn.addEventListener('click', sortGifts);

    let [_, giftList, sentGifts, discardedGifts] = Array.from(document.querySelectorAll('section'));

    function addGifts() {
        listParent = giftList.children[1];
        let liEl = makeEl('li', `${gift.value}`, listParent);
        liEl.className = 'gift';
        let sendBtn = makeEl('button', 'Send', liEl);
        sendBtn.id = 'sendButton';
        let discardBtn = makeEl('button', 'Discard', liEl);
        discardBtn.id = 'discardButton';
        console.log(gift.value);

        let sendParent = sentGifts.children[1];

        sendBtn.addEventListener('click', (e) => {

            liEl.removeChild(sendBtn);
            liEl.removeChild(discardBtn);
            sendParent.appendChild(liEl);

        });
        let discardParent = discardedGifts.children[1];

        discardBtn.addEventListener('click', (e) => {

            liEl.removeChild(sendBtn);
            liEl.removeChild(discardBtn);
            discardParent.appendChild(liEl);
        });

        gift.value = '';
    }
    function sortGifts () {       
        let sorted = Array.from(listParent.children)       
        sorted.sort((a,b) => a.innerHTML.localeCompare(b.innerHTML));
        sorted.forEach(g => listParent.appendChild(g));
    }

    function makeEl(type, content, parent) {
        const element = document.createElement(type);
        element.textContent = content;
        if (parent) {
            parent.appendChild(element);
        }
        return element;
    }
}