class TaskList {
    constructor() {
        this.taskInput = document.querySelector('.task-input');
        this.addBtn = document.querySelector('.add-btn');
        this.tagBtn = document.querySelector('.tag-btn');
        this.tasksDiv = document.querySelector('.section-tasks');
        this.tagsModal = document.querySelector('.section-tags');
        this.tags = document.querySelectorAll('.tag')
        this.status = false;
        this.category = undefined;
    }
    createTaskDiv() {
        let task = this.taskInput.value;
        let taskDiv = document.createElement('div');
        let taskH1 = document.createElement('h1');
        taskDiv.classList.add('task-div');
        taskH1.innerText = task;
        // complete delete btns
        let delBtn = document.createElement('button');
        delBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        delBtn.classList.add('del-btn')
        let checkBox = document.createElement('input');
        checkBox.classList.add('check-box')
        checkBox.setAttribute('type', 'checkbox');
        // category tag
        let cath4 = document.createElement('h4');
        this.category ? cath4.innerText = this.category : cath4.innerText = '';
        taskDiv.appendChild(cath4)
        //  appends
        taskDiv.appendChild(checkBox)
        taskDiv.appendChild(taskH1);
        taskDiv.appendChild(delBtn);
        this.tasksDiv.appendChild(taskDiv);
        this.taskInput.value = '';
    }
    featureTask(e) {
        let item = e.target;
        let parent = item.parentElement;
        if (item.classList.contains('check-box')) {
            console.log(item.checked)
            item.checked ? parent.style.textDecoration = 'line-through' : parent.style.textDecoration = ''
        }
        if (item.classList.contains('del-btn')) {
            parent.remove();
        }
    }
    showTags() {
        this.tagsModal.style.display = 'block'
    }
    featureTags(e) {
        let item = e.target;
        if (item.checked) {
            this.category = item.name;
        } else {
            this.category = '';
        }
    }

    onlyOneSelctTag(checkbox) {
        this.tags.forEach(tag => {
            if (tag !== checkbox) tag.checked = false
        })
    }

}

let tasklist = new TaskList;

tasklist.addBtn.addEventListener('click', function () {
    tasklist.createTaskDiv();
})

tasklist.tasksDiv.addEventListener('click', function (e) {
    tasklist.featureTask(e);
})

tasklist.tagBtn.addEventListener('click', function (e) {
    tasklist.showTags();
})



tasklist.tags.forEach(tag => {
    tag.addEventListener('click', function (e) {
        tasklist.featureTags(e);
        tasklist.onlyOneSelctTag(e.target)
    })
})

window.onclick = function (event) {
    if (event.target == tasklist.tagsModal) {
        tasklist.tagsModal.style.display = "none";
    }
}