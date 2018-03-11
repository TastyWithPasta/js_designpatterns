// Actually the same as just the module pattern with node.js (but stripped down a bit from the Task functionality)! 
// Calling the function as the export will essentially point to the same returned functionality (get, set) no matter how many times required is called!
var repo_singletonPattern_WithNode = function () {
    var saveCount = 0;

    var get = function() {
        console.log("Getting task from database: ");
        return {
            name: "Task retrieved from DB"
        }
    };
    var save = function() {
        console.log("Saved " + ++saveCount + " times.");
    };

    return {
        get: get,
        save: save
    }
}

module.exports = repo_singletonPattern_WithNode();