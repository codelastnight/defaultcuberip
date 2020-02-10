/**
 * hlper funcitons
 * 
 */

/**
 *  I am hip and cool so i use promise and async 
 * @param ms how much to sleep
 */

 export const sleep = function(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
