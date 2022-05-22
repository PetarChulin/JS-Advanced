function tax(name, population, treasury) {
    let city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population *= (percentage / 100) + 1;
        },
        applyRecession(percentage) {
            this.treasury *= 1 - (percentage / 100);
       }      
    };
    return city;
}
const city = 
  tax('Tortuga',  7000,  15000);
console.log(city);


