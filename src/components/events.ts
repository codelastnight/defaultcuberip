
import {getElement} from './helper'
import * as state from './appState'
import * as BABYLON from 'babylonjs'
// event listeners only gang 
// ok but fr how do i make this cleaner wtf

 // the thing that opens when you win
 const winModal = getElement('w')

 // right click dropdown
 const dropdown = getElement('rightclick')

 //when you press the x key
 const xkey = getElement('x-key')

 //when you press the x key
 const objmenu = getElement('objmenulist')

export const Init = function() {

    // add event listeners for all menus
    const menus: Array<HTMLElement> = [
        dropdown,
        xkey,
        objmenu
    ]
    menus.forEach((element) => {
        // when mouse leaves vicinity of a dropdown menu, close it. this is to mimic blender
        element.addEventListener("mouseleave", function() {
            element.classList.add("disable")
        })

        // close on click
        element.addEventListener("mousedown",function() {
                element.classList.add("disable")
        })
    })
    
    //menu on 'object' button
    getElement('objmenubtn').addEventListener("mousedown",() => openMenu(objmenu))
    
    //get mouse position
    document.addEventListener("mousemove", (e: MouseEvent) => state.GetSetMousePos({x: e.clientX, y: e.clientY }))

     //disable default rightclick
    document.oncontextmenu = function() {
        return false;
    }
    return winModal
}

/**
 * opens the menu in the UI
 * 
 * @param element the menu element
 * @param pos  mouse position
 */
export const openMenu = function(element: HTMLElement, pos: Pos|null= null,) {
    if (pos != null ) {
        element.classList.remove("disable")

        // sets the context menus at cusor position. the -48 value is an offset for the invisible padding
        element.style.setProperty("left", (pos.x - 48).toString() + "px")
        element.style.setProperty("top",  (pos.y - 48).toString() + "px")
    }
    else {
        element.classList.toggle("disable")
 
    }
}


/**
 * 
 * @param evt pointer event
 * @param pick info from babylon
 * @param cube mesh
 */
export const onClickCheck = function(evt: BABYLON.PointerInfo, cubeOutline: boolean): boolean {   
    // open up context menu on right click

    if(evt.event.button == 2) {
           openMenu(dropdown, state.GetSetMousePos() )

        }   
    // if the click hits the ground object, outline it
    else if (evt.pickInfo != null && evt.pickInfo.hit ) {
            cubeOutline = true;
           state.GetSetCubeActive(true)
           
       } 
    else {
            cubeOutline = false;
           state.GetSetCubeActive(false)
       }
       return cubeOutline;
}

/**
 * check for delte and backspace 
 * @param ev keyboard event
 * @param mesh the mesh to delete
 */
export const KeyCheck = function(ev: KeyboardEvent, deletefn: Function)
{
    const pos = state.GetSetMousePos()
    const cubeState = state.GetSetCubeActive()
    switch(ev.keyCode)
    {
        case 8: //backspace
        case 46: // delete
            if (cubeState) return deletefn();
            break;
        case 88:  // x key
            if (cubeState) return openMenu(xkey, {x: pos.x -40, y: pos.y - 40})
            break;
        default:
            console.log(String.fromCharCode(ev.keyCode))
            return
        break;
    }
}