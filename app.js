const tasks = [
    
]


const addtask = (title, prioriy) => {

    const newtask = {id : Date.now(), title, prioriy, status:'pendind'};
    tasks.push(newtask);
  

}


addtask()
addtask('hhh', 'k')
addtask('learn j', 'high');


console.log(tasks)