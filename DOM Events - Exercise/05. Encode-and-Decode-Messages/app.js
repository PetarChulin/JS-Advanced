function encodeAndDecodeMessages() {

    let sendBtn = document.querySelector('button');
    let readBtn = Array.from(document.querySelectorAll('button'))[1];
    let decodingArea = Array.from(document.querySelectorAll('textarea'))[1];

    sendBtn.addEventListener('click', () => {

        let input = document.querySelector('textarea').value;
        let output = '';
        for (const e in input) {
            output += String.fromCharCode(input.charCodeAt(e) + 1);
        }
        decodingArea.value = output;
        document.querySelector('textarea').value = '';
    });

    readBtn.addEventListener('click', () => {

        let decoding = decodingArea.value;
        Array.from(document.querySelectorAll('textarea'))[1] = '';
        let output = '';
        for (const d in decoding) {
            output += String.fromCharCode(decoding.charCodeAt(d) - 1);
        }
        decodingArea.value = output;
    });
}