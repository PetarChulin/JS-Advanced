function solve(input) {
    let data = [];

    for (const e of input) {
        let [command, value] = e.split(' ');
        command == 'add' ? add(value) : null;
        command == 'remove' ? remove(value) : null;
        command == 'print' ? print() : null;
    }
    function add(word) { data.push(word); }
    function remove(word) { data = data.filter(e => e != word); }
    function print() { console.log(data.join(',')); }
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);