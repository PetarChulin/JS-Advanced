class Company {

    constructor() {
        this.departments = [];
    }
    addEmployee(name, salary, position, department) {

        if (!name || !salary || !position || !department) {
            throw new Error('Invalid input!');
        }
        if (Number(salary) <= 0) {
            throw new Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push({ name, salary: Number(salary), position });

        return (`New employee is hired. Name: ${name}. Position: ${position}`);
    }
    bestDepartment() {
        let department = '';
        let maxSalary = 0;
        let result = [];

        Object.entries(this.departments).forEach(([key, value]) => {
            let depAvSalary = 0;
            value.forEach(s => {
                depAvSalary += s.salary;
            })
            depAvSalary /= value.length;
            depAvSalary > maxSalary ? (maxSalary = depAvSalary, department = key) : null;
        });
        result.push(`Best Department is: ${department}`);
        result.push(`Average salary: ${Number(maxSalary).toFixed(2)}`);
        let sorted = Object.values(this.departments[department].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name)));
        sorted.forEach(e => result.push(`${e.name} ${e.salary} ${e.position}`));

        return result.join('\n');
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

