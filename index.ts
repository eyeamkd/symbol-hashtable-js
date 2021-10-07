//Basic hashtable structure has Key Value pairs, that can be achieved with Symbol 
/** 
 * Create a key for the given string
 * @param key 
 */
const entry = (key:String, value:String) => {
    let evaluateString = `let ${key} = Symbol.for('${value}')` 
    eval(evaluateString);  
} 

/**
 * Returns the Value for the given Key, but shown otherwise
 * @param key 
 * @returns 
 */

const get = (key:any) => {
    return Symbol.keyFor(key);
} 

const test = () => { 

    entry("dragon","dracarys"); 
    console.log("Key is", get("dragon"));

} 

test();