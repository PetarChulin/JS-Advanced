function solve() {


    const taskField = document.getElementById('task');
    const descriptionField = document.getElementById('description');
    const dateField = document.getElementById('date');


    let [_, open, inProgress, complete] = Array.from(document.querySelectorAll('section'));
    

    document.getElementById('add').addEventListener('click', (e) => {
        if (taskField.value != '' && descriptionField.value != '' && dateField.value != '') {
            addTask(e, taskField.value, descriptionField.value, dateField.value);
        }
    });

    function addTask(e, taskField, descriptionField, dateField) {
        e.preventDefault();

        const article = makeEl('article');
        makeEl('h3', `${taskField}`, article);
        makeEl('p', `Description: ${descriptionField}`, article);
        makeEl('p', `Due Date: ${dateField}`, article,);

        const div = makeEl('div');
        div.setAttribute('class', 'flex');
        let startBtn = makeEl('button', 'Start', div);
        startBtn.className = 'green';
        let delBtn = makeEl('button', 'Delete', div);
        delBtn.className = 'red';
        article.appendChild(div);

        open.children[1].appendChild(article);

        let finishBtn = '';

        startBtn.addEventListener('click', () => {

            startBtn.remove();
            finishBtn = makeEl('button', 'Fisnish', div);
            finishBtn.className = 'orange';
            inProgress.children[1].appendChild(article);

            finishBtn.addEventListener('click', (e) => {
                complete.children[1].appendChild(article)
                e.target.parentNode.remove();

            });
        });
        delBtn.addEventListener('click', (e) => {
            e.target.parentNode.parentNode.remove();
        });

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