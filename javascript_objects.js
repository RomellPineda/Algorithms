// Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
for(var i = 0; i < students.length; i++){
    console.log('Name:', students[i].name, ',', 'Cohort:', students[i].cohort)
}

// Write a function that accepts an object of users divided into employees and managers, as shown below, and logs the information to the console.

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

for(var i = 0; i < users.employees.length; i++){
    console.log(i+1, '-', users.employees[i].last_name.toUpperCase(), users.employees[i].first_name.toUpperCase(), '-', (users.employees[i].last_name.length + users.employees[i].first_name.length));
}

for(var i = 0; i < users.managers.length; i++){
    console.log(i+1, '-', users.managers[i].last_name.toUpperCase(), users.managers[i].first_name.toUpperCase(), '-', (users.managers[i].last_name.length + users.managers[i].first_name.length));
}
