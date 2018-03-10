// This file is called moduleFactory as it is a factory for creating modules.
// The () is the function being called as part of the module pattern.

// Manual cached factory
var repoFactory_cached = function () {

    this.getRepo = function (repoType) {
        if(repoType === "task") {
            if(this.taskRepo) {
                return this.taskRepo;
            } else {
                this.taskRepo = require("./repo_module_task")(); // The additional () are important. Repositories use the module pattern, so the function must be called to assign its attributes.
            } 
            return this.taskRepo;
        }
        if(repoType === "user") {
            var userRepo = require("./repo_module_user")();
            return userRepo;
        }
        if(repoType === "project") {
            var projectRepo = require("./repo_module_project")();
            return projectRepo;
        }
    };

};

module.exports = new repoFactory_cached;