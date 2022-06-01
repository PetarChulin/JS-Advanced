function area() {
    return Math.abs(this.x * this.y);
};
function vol() {
    return Math.abs(this.x * this.y * this.z);
};
const solve = (area, vol, input) => JSON.parse(input).map(p => ({
    area: area.call(p),
    volume: vol.call(p),
}));
// function solve(area, vol, input) {
//     let coords = JSON.parse(input);
//     let result = [];
//     console.log(coords);

//     for (const p of coords) {
//         result.push({
//             area: area.call(p),
//             volume: vol.call(p),
//         });
//     }
//     console.log(result);
// };
console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`));
