var Task = require("./task");

var notificationService = function() {
    var message = "Nofifying ";
    this.update = function(task) {
        console.log(message + task.user + " for task " + task.name);
    };
};

var loggingService = function() {
    var message = "Logging ";
    this.update = function(task){
        console.log(message + task.user + " for task " + task.name);
    };
};

var auditingService = function() {
    var message = "Auditing ";
    this.update = function(task){
        console.log(message + task.user + " for task " + task.name);
    };
};

var mediator = (function() {
    var channels = {};
    var subscribe = function(channel, context, func) {
        if(!this.channels[channel]) {
            this.channels[channel] = [];
        }
        this.channels[channel].push({
            context: context,
            func: func
        }); //Not an array, this is bracket notation for an object
    };
    var publish = function(channel){
        console.log("Publishing started");
        if(!this.channels[channel]) {
            return false;
        }
        console.log("Channel " + channel + " exists.");
        var args = Array.prototype.slice.call(arguments, 1); // Slices the arguments into an array to apply
        console.log("Arguments sliced.");
        for( var i = 0; i < this.channels[channel].length; i++){
            var sub = this.channels[channel][i];
            sub.func.apply(sub.context, args);
        }
    }
    return {
        channels : {},
        subscribe : subscribe,
        publish : publish
    };
})();

var not = new notificationService();
var ls = new loggingService();
var audit = new auditingService();

mediator.subscribe("Complete", not, not.update);
mediator.subscribe("Complete", ls, ls.update);
mediator.subscribe("Complete", audit, audit.update);

var task1 = new Task({name:"Create a demo for Mediator pattern", user:"Christophe"});
task1.complete = function() {
    mediator.publish("Complete", this);
    Task.prototype.complete.call(this);
}

task1.complete();