import * as BABYLON from "babylonjs";
import {initScene} from './components/scene'
import {sleep} from './components/helper'
import {createCube} from "./components/cube";

import 'normalize.css'; 
import './style.scss';

const winModal = document.getElementById('w') as HTMLElement
const restartBtn = document.getElementById('restart') as HTMLElement

/**
 * check for delte and backspace 
 * @param ev keyboard event
 * @param mesh the mesh to delete
 */
export const KeyCheck = function(ev: KeyboardEvent, mesh: BABYLON.Mesh)
{
   switch(ev.keyCode)
   {
      case 8: //backspace
      case 46: // delete
      if (isCubeSelected) deleteHandler(mesh);
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
    // if the click hits the ground object, we change the impact position
       if (evt.pickInfo != null && evt.pickInfo.hit ) {
           cube.renderOutline = true;
           isCubeSelected = true
       } 
       // open up context menu on right click
       else if(evt.event.button == 2) {
           
       }
       else {
           cube.renderOutline = false;
           isCubeSelected = false
       }
   }


/**
 * run when user SUCCsessfully deletes  cube
 * and den dispose
 * @param mesh the mesh to delete
 */
const deleteHandler = async function(cube: BABYLON.Mesh) {
    
    cube.dispose();
    engine.stopRenderLoop(() => onRender(cube,camera,scene))
    document.removeEventListener('keydown', event => KeyCheck(event, cube))
    scene.onPointerObservable.removeCallback(function(evt) { onClickCheck(evt,cube)},BABYLON.PointerEventTypes.POINTERDOWN)
    await sleep(400)
    winModal.classList.remove('disabled')
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
    winModal.classList.add('disabled')

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
const {scene, camera, engine} = initScene();

start();


/**
 * Watch for browser/canvas resize events
 */
window.addEventListener("resize", function () { 
    engine.resize();
});

restartBtn.addEventListener("click",()=> start())