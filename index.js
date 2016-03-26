/* jshint node: true */

var util = require('util');

function traceName(args) {
    return util.format.apply(util, args) || 'Stack';
}

function prepareStack(stackStr, name) {
    var stackArr = stackStr.split('\n').slice(2).join('\n');
    return name + '\n' + stackArr;
}

function trace() {
    var args = arguments;
    var origLimit = Error.stackTraceLimit;
    Error.stackTraceLimit = Number.MAX_SAFE_INTEGER;
    
    var obj = {};
    Error.captureStackTrace(obj);
    Error.stackTraceLimit = origLimit;
    
    console.log(prepareStack(obj.stack, traceName(args)));
}

if (console) {
    console.trace = trace;
} else {
    module.exports = trace;
}
