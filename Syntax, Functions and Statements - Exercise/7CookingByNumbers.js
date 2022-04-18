function cooking(num, ...strings) {

    let commands = strings;

    for (let i = 0; i < commands.length; i++) {

        let type = commands[i];

        switch (type) {
            case 'chop': num = num / 2;
                console.log(num);
                break;
            case 'dice': num = Math.sqrt(num);
                console.log(num);
                break;
            case 'spice': num = num + 1;
                console.log(num);
                break;
            case 'bake': num = num * 3;
                console.log(num);
                break;
            case 'fillet': num = (num * 0.80).toFixed(1);
                console.log(num);
                break;
        }
    }
}
cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');