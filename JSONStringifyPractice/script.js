let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [{
    todo: "Attending CCBP sessions",
    todoStatus: "Completed",
},
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];
let jsonContainer = document.getElementById("jsonContainer");
let jsonbikes = JSON.stringify(bikes);
let jsonperson = JSON.stringify(person);
let jsontodos = JSON.stringify(todos);
let p1 = document.createElement("p");
p1.textContent = jsonbikes
jsonContainer.appendChild(p1);

let p2 = document.createElement("p");
p2.textContent = jsonperson
jsonContainer.appendChild(p2);

let p3 = document.createElement("p");
p3.textContent = jsontodos;
jsonContainer.appendChild(p3);