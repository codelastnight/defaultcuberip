/**
 * all state stuff happens here
 * 
 */

let cubeActive = false

// cursor position
let mousePos: Pos = {
    x: 0,
    y: 0
}

// update the values
const GetSetCubeActive = (value:boolean | null = null):boolean => value !=null ? cubeActive = value : cubeActive

const GetSetMousePos = (value: Pos | null = null):Pos =>value !=null ? mousePos = value : mousePos

export {GetSetCubeActive, GetSetMousePos}