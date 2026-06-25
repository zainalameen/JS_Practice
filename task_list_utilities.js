function addTask(tasks, title){
    let newArray = tasks;
    return newArray.concat(title);
}

function completeTask(tasks, taskId){
    let newArray = tasks;
    newArray[taskId] = true;
}

function removeTask(tasks, taskId){
    let newArray = tasks;
    newArray[taskId] = false;
}

function countIncompleteTasks(tasks){
    let count = 0;
    for(const task of tasks){
        if(!task.completed)
            count++;
    }
}

const tasks = [
  { id: 1, title: 'Review variables', completed: true },
  { id: 2, title: 'Practice functions', completed: false },
];

const withNewTask = addTask(tasks, 'Build task utilities');
console.log(withNewTask.map((task) => task.title));

const completed = completeTask(withNewTask, 2);
console.log(countIncompleteTasks(completed));

console.log(removeTask(completed, 1).map((task) => task.id));
console.log(tasks.length);
console.log(countIncompleteTasks(tasks));

