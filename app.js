"use strict";
var Student = /** @class */ (function () {
    function Student(_name) {
        this._name = _name;
    }
    ;
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: true,
        configurable: true
    });
    return Student;
}());
var student = new Student("Bob");
student.name = "Tom";
console.info(student.name);
