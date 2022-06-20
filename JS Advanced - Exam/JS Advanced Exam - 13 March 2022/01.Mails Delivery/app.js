function solve() {

    let recipientField = document.getElementById('recipientName');
    let titleField = document.getElementById('title');
    let messageField = document.getElementById('message');

    let listMailsField = document.getElementById('list');
    let sentMailField = Array.from(document.querySelectorAll('ul'))[1];
    let deletedMailField = Array.from(document.querySelectorAll('ul'))[2];

    let addBtn = document.getElementById('add');

    let resetBtn = document.getElementById('reset');

    addBtn.addEventListener('click', addMail);
    resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        clearFields()
    });

    function addMail(e) {
        let recipientName = recipientField.value;
        let title = titleField.value;
        e.preventDefault();

        if (!recipientName || !title || !messageField.value) { return; }

        let li = makeEl('li', '', listMailsField);
        makeEl('h4', `Title: ${title}`, li);
        makeEl('h4', `Recipient Name: ${recipientName}`, li);
        makeEl('span', `${messageField.value}`, li);
        let div = makeEl('div', '', li);
        div.id = 'list-action';
        let sendBtn = makeEl('button', 'Send', div);
        sendBtn.type = 'submit';
        sendBtn.id = 'send';
        let deleteBtn = makeEl('button', 'Delete', div);
        deleteBtn.type = 'submit';
        deleteBtn.id = 'delete';

        sendBtn.addEventListener('click', (e) => {
            e.preventDefault();

            let li = makeEl('li', '', sentMailField);
            makeEl('span', `To: ${recipientName}`, li);
            makeEl('span', `Title: ${title}`, li);
            let div = makeEl('div', '', li);
            div.className = 'btn';
            let button = makeEl('button', 'Delete', div);
            button.type = 'submit';
            button.className = 'delete';

            button.addEventListener('click', deleteMail);

            e.target.parentNode.parentNode.remove();
        });

        deleteBtn.addEventListener('click', deleteMail);

        clearFields();

        function deleteMail(e) {

            makeEl('li' , '', deletedMailField);
            makeEl('span', `To: ${recipientName}`, li);
            makeEl('span', `Title: ${title}`, li);
            
            e.target.parentNode.parentNode.remove();

        }
    }
    function clearFields() {
        recipientField.value = '';
        titleField.value = '';
        messageField.value = '';
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
solve();