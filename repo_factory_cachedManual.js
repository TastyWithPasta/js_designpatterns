// Manual cached factory
var repoFactory_cached = function () {

    this.getRepo = function (repoType) {
        if(repoType === "task") {
            if(this.taskRepo) {
                return this.taskRepo;
            } else {
                this.taskRepo = require("./taskRepository")(); // The additional () are important. Repositories use the module pattern, so the function must be called to assign its attributes.
            } 
            return this.taskRepo;
        }
        if(repoType === "user") {
            var userRepo = require("./userRepository")();
            return userRepo;
        }
        if(repoType === "project") {
            var projectRepo = require("./projectRepository")();
            return projectRepo;
        }
    };

};

module.exports = new repoFactory_cached;