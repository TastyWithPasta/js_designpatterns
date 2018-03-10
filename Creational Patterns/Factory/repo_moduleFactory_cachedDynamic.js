// This file is called moduleFactory as it is a factory for creating modules.
// The () is the function being called as part of the module pattern.S

// Automatic cached factory.
var repoFactory_cachedDynamic = function() {
    var repos = this;
    var repoList = [{name:"task", source:"./repo_module_task"},
                    {name:"user", source:"./repo_module_user"},
                    {name:"project", source:"./repo_module_project"}];
    
    repoList.forEach(function(repo){
        repos[repo.name] = require(repo.source)() // Adds a property for each nams/source specified
    });
}
module.exports = new repoFactory_cachedDynamic;