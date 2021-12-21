class Task {
    constructor(titleIn, descriptionIn, priorityIn) {
        this.title = titleIn;
        this.description = descriptionIn;
        this.priority = priorityIn;
    }

    getTitle() {
        return this.title;
    }

    returnInArray() {
        return [this.title, this.priority];
    }

    returnAll() {
        return [this.title, this.description, this.priority];
    }
}

class TaskFolder {
    constructor(folderName) {
        this.folderName = folderName.toUpperCase();
        this.myTasks = [];
    }

    addTask(Task) {
        this.myTasks.push(Task);
    }

    getTasks() {
        return this.myTasks;
    }

    deleteTaskByIndex(taskIndex) {
        this.myTasks.splice(taskIndex, 1);
    }

    getFolderName() {
        return this.folderName;
    }
}

const DefaultData = (() => {
    const newTask = new Task("Get Healthy", "Take pain med and drink plenty of water", "important");
    const newTaskTwo = new Task("Meditate", "Go over my goals and then silence mind", "important");

    const defaultTasks = new TaskFolder("default");
    const mentalHealth = new TaskFolder("mental health");   

    const setupDefault = () => {
        defaultTasks.addTask(newTask);
        defaultTasks.addTask(newTaskTwo);
        mentalHealth.addTask(newTaskTwo);
    }

    const returnData = () => {
        setupDefault();
        return [defaultTasks, mentalHealth];
    }

    return {
        returnData,
    }
})();

export {Task, TaskFolder, DefaultData}