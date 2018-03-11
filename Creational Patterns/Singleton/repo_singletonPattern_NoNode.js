
// The standard way of creating a singleton, without the use of node.js.
// The way node.js's modules work makes turns module pattern into a singleton pattern.
var taskRepo_singleton = (function () {
    var taskRepo;
    function createRepo() {
        var taskRepo = new Object("Task");
        return taskRepo;
    }
    return {
        getInstance: function () {
            if(!taskRepo) {
                taskRepo = createRepo();
            }    
            return taskRepo;
        }
    };
})();