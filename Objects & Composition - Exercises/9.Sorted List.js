function createSortedList() {

    let list = [];

    return {
        get size() { return list.length },

        add(element) {
            list.push(element);
            list.sort((a, b) => a - b);
        },
        get(index) {
            if (index >= 0 && index < this.size) {
                return list[index];
            }
        },
        remove(index) {
            if (index >= 0 && index < this.size) {
                list.splice(index, 1);
            }
        },
    }
}
let list = createSortedList();
list.add(8);
list.add(5);
list.add(6);
console.log(list.get(0));
list.remove(1);
console.log(list.get(1));
console.log(list.size);


