/* myCustomMod.js */
var  myCustomMod = {};      // 很重要，和shim中exports值必须一致
myCustomMod.add = function(num1, num2) {
    return num1 + num2;
};
myCustomMod.max = function() {
    return Math.max.apply(Math, [].slice.call(arguments));
}