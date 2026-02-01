console.log('print hey its my frist project');

const add = (level) => {
    console.log('my name is saurav ghimire'+ level);
}

const task = (priorty) => {
    console.log('i am BCA studnet');
    add(priorty);
    console.log('i am in 7th semster');
}

task('in xavier');
console.log('finsh');
console.log("1: User clicks 'Save Task' button");

// Simulate saving to a database (takes 2 seconds)
setTimeout(() => {
    console.log("2: Task successfully saved to database!");
}, 2000);

console.log("3: UI shows a 'Loading...' spinner");


let task1 = { title: null };
let task2 = task1; 

task2.title = "Buy Bread";

console.log("Task 1 title:", task1.title); 
console.log("Task 2 title:", task2.title);