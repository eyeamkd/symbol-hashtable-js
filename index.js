//Basic hashtable structure has Key Value pairs, that can be achieved with Symbol 
/**
 * Create a key for the given string
 * @param key
 */
var entry = function (key, value) {
    var evaluateString = "let " + key + " = Symbol.for('" + value + "')";
    eval(evaluateString);
};
/**
 * Returns the Value for the given Key, but shown otherwise
 * @param key
 * @returns
 */
var get = function (key) {
    return Symbol.keyFor(key);
};
var test = function () {
    entry("dragon", "dracarys");
    console.log("Key is", get("dragon"));
};
test();
