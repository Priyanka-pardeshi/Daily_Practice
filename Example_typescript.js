console.log("\nwelcome User!");
var msg = "Hello good morning";
console.log(msg);
console.log("----------------------------------------------------------------------------------------------------\n");
// Addition of Number
var a = 10;
var b = 20;
console.log("Addition is :", a + b);
console.log("------------------------------------------------------------------------------------------------------\n");
// class object
var Myclass = /** @class */ (function () {
    function Myclass() {
    }
    Myclass.prototype.display = function () {
        console.log("Hello! from function");
    };
    return Myclass;
}());
var obj = new Myclass();
obj.display();
// enum
var fruits;
(function (fruits) {
    fruits[fruits["apple"] = 1] = "apple";
    fruits[fruits["banana"] = 2] = "banana";
    fruits[fruits["kiwi"] = 3] = "kiwi";
})(fruits || (fruits = {}));
var fruit_name = fruits[2];
console.log(fruit_name);
console.log("--------------------------------------------------------------------------------------------------\n");
// function in ts
function Addition(a, b) {
    return a * b;
}
var addition = Addition(3, 4);
console.log(addition);
