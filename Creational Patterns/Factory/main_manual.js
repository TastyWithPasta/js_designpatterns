var Task = require('../Constructor/task_objectPrototype');
var repoFactory = require('./repo_moduleFactory_cachedManual');
//console.log(repoFactory.getRepo('task').get(1));

var task1 = new Task(repoFactory.getRepo('task').get(1));
var task2 = new Task(repoFactory.getRepo('task').get(2));

var user = repoFactory.getRepo('user').get(1);
var project = repoFactory.getRepo('project').get(1);

task1.user = user;
task1.project = project;

//console.log(task1);
task1.save(); 
