/**
 * hlper funcitons
 *  i cannot code to save my life
 */


/**
 *  I am hip and cool so i use promise and async 
 * @param ms how much to sleep
 */

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))


/**
 * get html element by id
 * @param id element id
 */
export const getElement = (id: string): HTMLElement => document.getElementById(id) as HTMLElement
