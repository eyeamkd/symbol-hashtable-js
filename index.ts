//Basic hashtable structure has Key Value pairs, that can be achieved with Symbol 
/** 
 * Create a key for the given string
 * @param key 
 */
const entry = (key:String, value:String) => {
    let evaluateString = `let ${key} = symbol.for(${value})` 
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