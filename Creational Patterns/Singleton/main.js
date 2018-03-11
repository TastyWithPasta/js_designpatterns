
// As this is the singleton pattern, all Repo_x will point to the same object instead of a new one.
var Repo_1 = require('./repo_singletonPattern_WithNode');
var Repo_2 = require('./repo_singletonPattern_WithNode');
var Repo_3 = require('./repo_singletonPattern_WithNode');
var Repo_4 = require('./repo_singletonPattern_WithNode');


// As all repos are pointing to the same instance, the save counter should increment
Repo_1.save(); // Saved times = 1
Repo_2.save(); // Saved times = 2
Repo_3.save(); // Saved times = 3
Repo_4.save(); // Saved times = 4