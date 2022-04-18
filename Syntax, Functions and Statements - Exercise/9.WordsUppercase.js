function toUpper(words) {
    let regex = /[\W]+/;

    let word = words.toUpperCase().match(/\w+/g).join(', ');

    console.log(word)
}
toUpper('Hi, how are you?');