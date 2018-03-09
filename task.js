var task = {};
//var task = new Object();
//var task = Object.create(Object.prototype);

task.title = "My task";
task.description = "My description";
task.toString = function() {
    return this.title + ' ' + this.description;
}

console.log(task.toString());
