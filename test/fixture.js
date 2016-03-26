/* jshint node: true */

require('../index');

function a() {
    b();
}

function b() {
    c();
}

function c() {
    console.trace('in c');
}

a();
