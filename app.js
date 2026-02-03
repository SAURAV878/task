import fs from 'fs';


let tasks = [


]
let nextId = 1;
const createTask = (title, priority, category, dueDate) => {
    const newTask ={
        id : nextId ++,
        title: title,
        priority: priority.toLowerCase(),
        category: category,
        dueDate: dueDate,
        completed: false
    };
    tasks.push(newTask);
    return newTask;
}

const deleteTask = (idTodelete) => {
    tasks = tasks.filter(t => t.id !== idTodelete);
};


const editTask = (id, newTitle) => {
    const taskToedit = tasks.find(t => t.id === id)
    if (taskToedit) {
        taskToedit.title = newTitle
    }
};


const getAnalytics = () => {
    const analytics = tasks.reduce((acc, task) => {
        acc.total = acc.total + 1;

        if(task.completed === true) {
            acc.completedCount = acc.completedCount + 1;
        }

        if(task.priority === 'high') {
            acc.highCount = acc.highCount +1;
        }

        return acc;
    }, {
        total: 0,
        completedCount: 0,
        highCount: 0
    });

    return analytics;

}

const searchTasks = (term) => {
    const lowerTerm = term.toLowerCase();

    return tasks.filter (t => t.title.toLowerCase().includes(lowerTerm));
}


let searchTimer = null;

const debouncedSearch = (term) => {
    if(searchTimer != null) {
        clearTimeout(searchTimer);
    }

    searchTimer = setTimeout(() => {
        const results = searchTasks(term);
        console.log(results);

}, 4000);
}


const saveToDisk = () => {
    fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
    console.log('data save to task.json');

}

const loadFromDisk = () => {
    if (fs.existsSync('tasks.json')) {
        const data = fs.readFileSync('tasks.json', 'utf-8');
        tasks = JSON.parse(data);
        console.log('data load in memory heap');

        tasks.forEach ((task, index) => {
            task.id = index + 1;
        });

        nextId = tasks.length + 1;

    }  else {
        console.log('no file found');
    }

}

const syncWithServer = () => {
    return new Promise((resolve) => {
        
        setTimeout (() => {
            resolve();
            console.log('server synced successfully');

        }, 3000);
    })
}

const addTask = async(title, priority, category,dueDate) => {

    createTask(title,priority,category, dueDate);

    saveToDisk();

    await syncWithServer();
    console.log('task is on task.json');

}

loadFromDisk();


const result = searchTasks('buy gaming computer') 
console.log(result);


console.log(getAnalytics());


