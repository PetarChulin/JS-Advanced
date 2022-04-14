function daysInMonth (month, year) { 
    return new Date(year, month, 0).getDate();
}
console.log(daysInMonth(1 , 2021));

// const days = (y, m) => new Date(y, m, 0).getDate();