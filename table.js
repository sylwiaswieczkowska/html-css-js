function addPerson(event) {
    event.preventDefault();
    const person = getPersonFromFrom();
    addPersonToTable(person);
}

function getPersonFromFrom() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;
    const sex = document.getElementById('sex').value;
    const description = document.getElementById('description').value;

    return {
        name: name,
        surname: surname,
        age: age,
        sex: sex,
        description: description,
    };

}

function addPersonToTable(person) {
    const row = document.createElement('tr');
    const name = document.createElement('td');
    name.textContent = person.name;
    row.appendChild(name);
    const surname = document.createElement('td');
    surname.textContent = person.surname;
    row.appendChild(surname);
    const age = document.createElement('td');
    age.textContent = person.age;
    row.appendChild(age);
    const sex = document.createElement('td');
    sex.textContent = person.sex;
    row.appendChild(sex);
    const description = document.createElement('td');
    description.textContent = person.description;
    row.appendChild(description);

    document.getElementsByTagName('table')[0].appendChild(row);

}