let tasks = [

]

const createTask = (title, priority, category, dueDate) => {
    const newTask ={
        id : Date.now(),
        title: title,
        priority: priority,
        category: category,
        dueDate: dueDate,
        completed: false
    };
    tasks.push(newTask);
}

const deleteTask = (idTodelete) => {
    tasks = tasks.filter(t => t !== idTodelete);
}

const editTask = (id, newTitle) => {
    const taskToedit = tasks.find(t => t.id === id)
    if (taskToedit) {
        taskToedit.title = newTitle
    }
}

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

}, 5000);
}


// const saveToDisk = () => {
//     JSON.stringify(tasks);
//     console.log(saveToDisk);

// }


