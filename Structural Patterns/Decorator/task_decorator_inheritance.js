

var Task = function (name) {
    this.name = name;
    this.completed = false;
}
Task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
    this.completed = true;
};
Task.prototype.save = function () {
    console.log('saving Task: ' + this.name);
};

// Creating a sub-Object wrapping task (inheritance really)
var UrgentTask = function(name, priority) {
    Task.call(this, name);
    this.priority = priority;
}
UrgentTask.prototype = Object.create(Task.prototype); //At this stage, the prototype is still empty (no save or complete!). It needs to be copied from Task's.
UrgentTask.prototype.notify = function() {
    console.log("Notifying Important People");
};
UrgentTask.prototype.save = function() {
    this.notify();
    Task.prototype.save.call(this);
};

var urgentTask = new UrgentTask('Urgent Task', 1);
urgentTask.save();
console.log(urgentTask);
