function solve(array, criterion) {

    let tickets = [];
    for (const e of array) {
        let [destinationName, price, status] = e.split('|');
        
        tickets.push({destination : destinationName, price : Number(price), status});
    }
    let sorted = '';
    if (criterion == 'destination') {
        sorted = tickets.sort((a,b) => a.destination.localeCompare(b.destination));
    } else if (criterion == 'status') {
        sorted = tickets.sort((a,b) => a.status.localeCompare(b.status));
    } else {
        sorted = tickets.sort((a,b) => a.price-b.price);
    }
    return sorted;

}
solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'

);