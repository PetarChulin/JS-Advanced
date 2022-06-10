window.addEventListener('load', solve);

function solve() {

    let genre = document.getElementById('genre');
    let songName = document.getElementById('name');
    let songAuthor = document.getElementById('author');
    let date = document.getElementById('date');

    let collection = document.getElementById('all-hits');
    let savedSongs = document.getElementById('saved-hits');
    let totalLikes = document.getElementById('total-likes');

    let addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addSong);

    function addSong(e) {

        if (genre.value != '' && songName.value != '' && songAuthor.value != '' && date.value != '') {

            e.preventDefault();

            let div = document.createElement('div');
            div.className = 'hits-info';
            let img = document.createElement('img');
            img.src = './static/img/img.png'
            div.appendChild(img);

            makeEl('h2', `Genre:${genre.value}`, div);
            makeEl('h2', `Name:${songName.value}`, div);
            makeEl('h2', `Author:${songAuthor.value}`, div);
            makeEl('h3', `Date:${date.value}`, div);

            let saveBtn = makeEl('button', `Save song`, div);
            saveBtn.className = 'save-btn';
            let likeBtn = makeEl('button', `Like song`, div);
            likeBtn.className = 'like-btn';
            let delBtn = makeEl('button', `Delete`, div);
            delBtn.className = 'delete-btn';

            collection.children[0].appendChild(div);

            likeBtn.addEventListener('click', (e) => {

                let likesP = document.getElementsByTagName('p')[1].textContent;

                likeBtn.disabled = true;

                let likesArray = likesP.split(' ');
                let likesCount = Number(likesArray[2]);
                likesCount += 1;

                likesArray.splice(-1);
                likesArray.push(likesCount.toString());
                let newText = likesArray.join(' ');

                document.getElementsByTagName('p')[1].textContent = newText;

            });
            saveBtn.addEventListener('click', () => {
                div.removeChild(saveBtn);
                div.removeChild(likeBtn);
                savedSongs.children[0].appendChild(div);
            });
            delBtn.addEventListener('click', (e) => {
                e.target.parentNode.remove();
            })
            clearFields();
        }
    }

    function clearFields() {

        genre.value = '';
        songName.value = '';
        songAuthor.value = '';
        date.value = '';
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