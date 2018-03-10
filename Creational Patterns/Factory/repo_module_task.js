// Revealing module pattern
var taskRepository = function () {
    var db = {};
    var get = function(id) {
        console.log("Getting task from database: " + id);
        return {
            name: "Task retrieved from DB with index " + id
        }
    };
    var save = function(task) {
        console.log("Saving " + task.name + "to the database.")
    };

    console.log('newing up task repo');
    return {
        get: get,
        save: save
    }
}

module.exports = taskRepository;