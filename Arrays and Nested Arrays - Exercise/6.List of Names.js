function sortNames(names) {

    names.sort((a, b) => a.localeCompare(b));

    names.forEach((e , i) => console.log((i + 1) + '.' + e));
}
sortNames(["John", "Bob", "Christina", "Ema"]);
