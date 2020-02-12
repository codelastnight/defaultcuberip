import * as BABYLON from "babylonjs";
import {initScene} from './components/scene'
import {sleep} from './components/helper'
import {createCube} from "./components/cube";
import * as Event from './components/events';
import 'normalize.css'; 
import './style.scss';



// cursor position
let mousePos: Pos = {
    x: 0,
    y: 0
}


/**
 * check for delte and backspace 
 * @param ev keyboard event
 * @param mesh the mesh to delete
 */
const KeyCheck = function(ev: KeyboardEvent, mesh: BABYLON.Mesh)
{
   switch(ev.keyCode)
   {
      case 8: //backspace
      case 46: // delete
      if (isCubeSelected) deleteHandler(mesh);
      break;
      case 88:  // x key
        if (isCubeSelected)
        Event.openMenu(xkey, {x: mousePos.x -40, y: mousePos.y - 40})
        break;
      default:
        console.log(String.fromCharCode(ev.keyCode))
      break;
   }
}


/**
 * 
 * @param evt pointer event
 * @param pick info from babylon
 * @param cube mesh
 */
export const onClickCheck = function(evt: BABYLON.PointerInfo, cube: BABYLON.Mesh) {

    // save pointer info
    mousePos = {x: evt.event.clientX, y: evt.event.clientY }

          // open up context menu on right click

    if(evt.event.button == 2) {
        Event.openMenu(dropdown, mousePos )

        }   
    // if the click hits the ground object, outline it
    else if (evt.pickInfo != null && evt.pickInfo.hit ) {
           cube.renderOutline = true;
           isCubeSelected = true
       } 
    else {
           cube.renderOutline = false;
           isCubeSelected = false
       }

    
   }


/**
 * run when user SUCCsessfully deletes  cube
 * and den dispose n garbage colle
 * @param mesh the mesh to delete
 */
const deleteHandler = async function(cube: BABYLON.Mesh) {
    if (isCubeSelected) {
        //delete da cube. this is my final message. goodbye
        cube.dispose();

        // garbage
        engine.stopRenderLoop(() => onRender(cube,camera,scene))
        document.removeEventListener('keydown', event => KeyCheck(event, cube))
        scene.onPointerObservable.removeCallback(function(evt) { onClickCheck(evt,cube)},BABYLON.PointerEventTypes.POINTERDOWN)
        document.querySelectorAll("delete").forEach((element) => {
            element.removeEventListener("click",()=> deleteHandler(cube))
        })

        // wait a bit then show winning screen
        await sleep(400)
        winModal.classList.remove('disable')
    }
   
}

const onRender = function(cube: BABYLON.Mesh, camera: BABYLON.ArcRotateCamera,scene: BABYLON.Scene) {
    cube.outlineWidth = camera.radius *0.0015;
    scene.render();
}

/**
 * init when loaded
 */
const start = function() {
//load scene

    /// is cube selected?
    isCubeSelected = false;
    // load cube
    const cube = createCube(scene, camera) 
    winModal.classList.add('disable')

     /**
     * add listener for keypress
     */
    document.addEventListener('keydown', event => KeyCheck(event, cube))
    /**
     * listener if pointer clicks on cube
     */
    scene.onPointerObservable.add (function(evt) { onClickCheck(evt,cube)},BABYLON.PointerEventTypes.POINTERDOWN)

    // render that shit
    engine.runRenderLoop(() => onRender(cube,camera,scene))
    
    // add event handlers to all delete buttons
    document.querySelectorAll("[delete]").forEach((value) => {
        value.addEventListener("click",()=> deleteHandler(cube))
    })
}

/**
 * start the engine
 * 
 */

// cube selected state
let isCubeSelected = false


/**
 * init the scene
 */

const {winModal,  dropdown, xkey} = Event.Init();

const {scene, camera, engine} = initScene();

start();





/**
 * Watch for browser/canvas resize events
 */
window.addEventListener("resize", function () { 
    engine.resize();
});

// restart game
const restartBtn = document.getElementById('restart') as HTMLElement
restartBtn.addEventListener("click",()=> start())



//get mouse position
 document.addEventListener("mousemove", function (e: MouseEvent) {
    mousePos = {x: e.clientX, y: e.clientY }

 })


