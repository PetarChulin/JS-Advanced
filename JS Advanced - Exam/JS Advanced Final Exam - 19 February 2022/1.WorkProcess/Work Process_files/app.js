function solve() {

    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const birth = document.getElementById('birth');
    const position = document.getElementById('position');
    const salary = document.getElementById('salary');

    let body = document.getElementById('tbody');
    let budget = document.getElementById('sum');

    let hireBtn = document.getElementById('add-worker');

    hireBtn.addEventListener('click', hireWorker);

    function hireWorker(e) {

        console.log(position.value);
        console.log(salary.value);
        e.preventDefault();

        let div = document.createElement('div');
        div.classList = 'tbl-content';
        
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');

        let firedBtn = document.createElement('button');
        firedBtn.className = 'fired';
        firedBtn.textContent = 'Fired'
        td7.appendChild(firedBtn)
        let editBtn = document.createElement('button');
        editBtn.className = 'edit';
        editBtn.textContent = 'Edit';
        td7.appendChild(editBtn);

        td1.textContent = fname.value;
        td2.textContent = lname.value;
        td3.textContent = email.value;
        td4.textContent = birth.value;
        td5.textContent = position.value;
        td6.textContent = salary.value;
        

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);

        body.appendChild(tr);

        


    }

}
solve()