function solve() {

    let recipientField = document.getElementById('recipientName');
    let titleField = document.getElementById('title');
    let messageField = document.getElementById('message');


    let listMailsField = document.getElementById('list');
    let sentMailField = Array.from(document.querySelectorAll('ul'))[1];
    let deletedMailField = Array.from(document.querySelectorAll('ul'))[2];

    let addBtn = document.getElementById('add');
    console.log(addBtn.textContent);
    let resetBtn = document.getElementById('reset');

    let recipientName = '';
    let title = '';

    addBtn.addEventListener('click', addMail);
    resetBtn.addEventListener('click', () => {
        recipientField.value = '';
        titleField.value = '';
        messageField.value = '';
    });

    function addMail(e) {
        e.preventDefault();

        if (!recipientField.value || !titleField.value || !messageField.value) {
            return;
        }

        let liEl = document.createElement('li');
        let firstH4 = document.createElement('h4');
        let secondH4 = document.createElement('h4');

        let mailText = document.createElement('span');
        let div = document.createElement('div');
        div.id = 'list-action';
        let sendBtn = document.createElement('button');
        sendBtn.type = 'submit';
        sendBtn.id = 'send';
        sendBtn.textContent = 'Send';
        let deleteBtn = document.createElement('button');
        deleteBtn.type = 'submit';
        deleteBtn.id = 'send';
        deleteBtn.textContent = 'Delete';

        recipientName = recipientField.value;
        title = titleField.value;

        firstH4.textContent = `Title: ${title}`;
        secondH4.textContent = `Recipient Name: ${recipientName}`;
        mailText.textContent = messageField.value;

        div.appendChild(sendBtn);
        div.appendChild(deleteBtn);
        liEl.appendChild(firstH4);
        liEl.appendChild(secondH4);
        liEl.appendChild(mailText);
        liEl.appendChild(div);

        listMailsField.appendChild(liEl);

        



        sendBtn.addEventListener('click', (e) => {
            e.preventDefault();

            let list = document.createElement('li');
            let toField = document.createElement('span');
            let titField = document.createElement('span');
            let div = document.createElement('div');
            div.className = 'btn';
            let button = document.createElement('button');
            button.type = 'submit';
            button.className = 'delete';
            button.textContent = 'Delete';
            button.addEventListener('click' , deleteMail);

            toField.textContent = `To: ${recipientName}`;
            titField.textContent = `Title: ${title}`;


            div.appendChild(button);
            list.appendChild(toField);
            list.appendChild(titField);
            list.appendChild(div);

            sentMailField.appendChild(list);
            e.target.parentNode.parentNode.remove();
        });

        deleteBtn.addEventListener('click', deleteMail);
       
        recipientField.value = '';
        titleField.value = '';
        messageField.value = '';

        function deleteMail(e) {
            let liDel = document.createElement('li');
            let to = document.createElement('span');
            let titleDel = document.createElement('span');

            to.textContent = `To: ${recipientName}`;
            titleDel.textContent = `Title: ${title}`;

            liDel.appendChild(to);
            liDel.appendChild(titleDel);

            deletedMailField.appendChild(liDel);
            e.target.parentNode.parentNode.remove();
        
        }

    }

}
solve();