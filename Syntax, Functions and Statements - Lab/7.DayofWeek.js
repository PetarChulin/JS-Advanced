function dayOfWeek(day) {
    let word;
    switch (day) {
        case 'Monday': word = 1; break;
        case 'Tuesday': word = 2; break;
        case 'Wednesday': word = 3; break;
        case 'Thursday': word = 4; break;
        case 'Friday': word = 5; break;
        case 'Saturday': word = 6; break;
        case 'Sunday': word = 7; break;
        default: word = 'error';
    }
    console.log(word);
}
dayOfWeek('invalid');