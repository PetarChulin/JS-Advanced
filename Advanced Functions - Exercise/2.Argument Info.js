function solve(...input) {
    let count = {};
    for (const e of input) {
        console.log(typeof (e) + ': ' + e);
        !count[typeof (e)] ? count[typeof (e)] = 1 : count[typeof (e)] += 1;
    }   
    let sorted = Object.fromEntries(Object.entries(count).sort(([, a], [, b]) => b - a));

    for (const e in sorted) { console.log(`${e} = ${sorted[e]}`) }
}
solve('cat', 42, function () { console.log('Hello world!'); });
solve({ name: 'bob' }, 3.333, 9.999)