function populationCount(lines) {

    let registry = {};

    for (const line of lines) {

        let town = line.split(' <-> ')[0];
        let population = Number(line.split(' <-> ')[1]);

        !registry[town] ? registry[town] = 0 : null;

        registry[town] += population;
    }
    for (const e in registry) { console.log(`${e} : ${registry[e]}`); }
}
populationCount(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);