class Task {
  constructor(titleIn, descriptionIn, priorityIn) {
    this.title = titleIn;
    this.description = descriptionIn;
    this.priority = priorityIn;
  }

  getTitle() {
    return this.title;
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }

  setDescription(newDesc) {
    this.description = newDesc;
  }

  setPriority(newPri) {
    this.priority = newPri;
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
  const newTask = new Task(
    "Stay Healthy",
    "run 2 miles after school",
    "important"
  );
  const newTaskTwo = new Task(
    "Submit Final Paper",
    "ask jon to revise my essay and submit paper to prof",
    "important"
  );
  const newTaskThree = new Task(
    "Order Extra Coffee Pods",
    "buy bulk from sams for extra savings",
    "somewhat important"
  );
  const newTaskFour = new Task(
    "Monthly Financial Report",
    "submit excel report of this months finances to bob",
    "important"
  );
  const newTaskFive = new Task(
    "Replacement Hat",
    "lost my had need new one",
    "not important"
  );

  const defaultTasks = new TaskFolder("tasks");
  const thisWeek = new TaskFolder("this week");
  const thisMonth = new TaskFolder("this month");

  const setupDefault = () => {
    defaultTasks.addTask(newTask);
    defaultTasks.addTask(newTaskTwo);
    defaultTasks.addTask(newTaskThree);
    defaultTasks.addTask(newTaskFive);

    thisWeek.addTask(newTaskTwo);
    thisWeek.addTask(newTaskFour);
  };

  const returnData = () => {
    setupDefault();
    return [defaultTasks, thisWeek, thisMonth];
  };

  return {
    returnData,
  };
})();

export { Task, TaskFolder, DefaultData };
