class TaskList {
    constructor() {
        this.taskInput = document.querySelector('.task-input')
        this.addBtn = document.querySelector('.add-btn');
        this.taskText = '';
    }
    addTodo() {
        let task = this.taskInput.value;
        this.taskText = task;
        task != '' ? console.log(task) : alert('please write something');
        this.taskInput.value = '';
    }
}

let newTask = new TaskList;

newTask.addBtn.addEventListener('click', function () {
    newTask.addTodo()
})