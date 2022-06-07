function order(array, arg) {
    
    arg == 'asc' ? array.sort((a, b) => a - b) : null;
    arg == 'desc' ? array.sort((a, b) => b - a) : null;
    
    return array;

}
order([14, 7, 17, 6, 8], 'asc');
order([14, 7, 17, 6, 8], 'desc');