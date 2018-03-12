var repo = {
    tasks: {},
    commands: [],
    select: function (id) {
        console.log('Getting task ' + id);
        return {
            name: 'New task from db'
        }
    },
    save: function (task) {
        repo.tasks[task.id] = task;
        console.log('Saved ' + task.name + ' to the db');
    },

    // Reruns all history commands
    replay: function() {
        for(var i = 0; i < repo.commands.length; i++){
            var command = repo.commands[i];
            repo.executeNoLog(command.name, command.obj);
        }
    }
}


///// That's pretty much it. Executes the function by name and passes arguments through apply. \\\\\
repo.executeNoLog = function(name) {
    var args = [].slice.call(arguments, 1); // Slice the arguments to pass them to apply
    if(repo[name]){
        return repo[name].apply(repo, args); // This paradigm (slice + apply is very useful)
    }
};

repo.execute = function(name) {
    var args = [].slice.call(arguments, 1); // Slice the arguments to pass them to apply
    // Remembers the command (command history)
    repo.commands.push({
        name: name,
        obj: args[0]
    });
    if(repo[name]){
        return repo[name].apply(repo, args); // This paradigm (slice + apply is very useful)
    }
};

repo.execute("save", {name: "Task 1", id:1});
repo.execute("save", {name: "Task 2", id:2});
repo.execute("save", {name: "Task 3", id:3});
repo.execute("save", {name: "Task 4", id:4});