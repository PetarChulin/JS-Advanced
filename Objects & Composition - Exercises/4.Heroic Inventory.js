function inventory(array) {

    let list = [];

    for (const item of array) {
        let [name, level, items] = item.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        list.push({name, level, items});
    }
    console.log(JSON.stringify(list));
}
inventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);