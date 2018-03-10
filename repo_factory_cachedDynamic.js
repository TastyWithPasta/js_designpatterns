// Automatic cached factory.
var repoFactory_cachedDynamic = function() {
    var repos = this;
    var repoList = [{name:"task", source:"./taskRepository"},
                    {name:"user", source:"./userRepository"},
                    {name:"project", source:"./projectRepository"}];
    
    repoList.forEach(function(repo){
        repos[repo.name] = require(repo.source)() // Adds a property for each nams/source specified
    });
}
module.exports = new repoFactory_cachedDynamic;