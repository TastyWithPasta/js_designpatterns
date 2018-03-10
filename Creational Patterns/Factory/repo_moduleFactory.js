// This file is called moduleFactory as it is a factory for creating modules.
// The () is the function being called as part of the module pattern.


// Manual factory
var repoFactory = function () {
    this.getRepo = function (repoType) {
        if(repoType === "task") {
            var taskRepo = require("./repo_module_task")();
            return taskRepo;
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
}

module.exports = new repoFactory;