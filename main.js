var Task = require("./task_class");
var Repo = require("./repo_modulePattern");

//console.log(Repo.get(1));
var task1 = new Task(Repo.get(1));
var task2 = new Task("Hang out the cat.");
var task3 = new Task("Read the hamster.");
var task4 = new Task("Study the tortoise.");

task1.complete();
task2.save();
task3.save();
task4.save();