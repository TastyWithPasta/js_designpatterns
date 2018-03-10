///// Illustrates the module pattern. Theoretically would handle database calls. \\\\\

// Standard module pattern
var repo_standardModule = function () {
    var db = {}; // This is unaccessible from the outside

    return {
        get: function(id) {
            console.log("Getting task from database: " + id);
            return {
                name: "Task retrieved from DB with index " + id
            }
        },
        save: function(task) {
            console.log("Saving " + task.name + "to the database.")
        }
    }
}

// Revealing module pattern
var repo_revealedModule = function () {

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

    return {
        get: get,
        save: save
    }
}

module.exports = repo_revealedModule();