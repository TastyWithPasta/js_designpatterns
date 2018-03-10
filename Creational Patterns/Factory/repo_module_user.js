// Revealing module pattern
var userRepository = function () {
    var db = {};
    var get = function(id) {
        console.log("Getting user from database: " + id);
        return {
            name: "User retrieved from DB with index " + id
        }
    };
    var save = function(user) {
        console.log("Saving " + user.name + "to the database.")
    };

    console.log('newing up user repo');
    return {
        get: get,
        save: save
    }
}

module.exports = userRepository;