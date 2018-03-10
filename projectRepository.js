// Revealing module pattern
var projectRepository = function () {
    var db = {};
    var get = function(id) {
        console.log("Getting project from database: " + id);
        return {
            name: "Project retrieved from DB with index " + id
        }
    };
    var save = function(project) {
        console.log("Saving " + project.name + "to the database.")
    };

    console.log('newing up project repo');
    return {
        get: get,
        save: save
    }
}

module.exports = projectRepository;