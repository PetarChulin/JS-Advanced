function solve(array) {
    let townArray = [];

    for (let i = 1; i < array.length; i++) {
        let table = array[i].split(/\s*\|\s*/g);
        
        let towns = {
            Town: table[1],
            Latitude: Number(Number(table[2]).toFixed(2)),
            Longitude: Number(Number(table[3]).toFixed(2))
        };

        townArray.push(towns);
    }
    console.log(JSON.stringify(townArray));
}
