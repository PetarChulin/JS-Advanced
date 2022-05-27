function colorize() {

    let rows = document.getElementsByTagName('tr')

    let colored = Array.from(rows);

    for (let i = 1; i < colored.length; i++) {
        if (i % 2 != 0) {
            colored[i].style.backgroundColor = 'teal';
        }
    }
}