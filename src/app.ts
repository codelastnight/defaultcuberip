import * as BABYLON from "babylonjs";
import {initScene} from './components/scene'
import {sleep, getElement} from './components/helper'
import * as Event from './components/events';
import 'normalize.css'; 
import './style.scss';

// this is the data state
import * as state from './components/appState'


/**
 * run every render
 * @param cube 
 * @param camera 
 * @param scene 
 */
const onRender = function(cube: BABYLON.Mesh, camera: BABYLON.ArcRotateCamera,scene: BABYLON.Scene) {
    cube.outlineWidth = camera.radius *0.0015;
    scene.render();
}

/**
 * init when loaded
 */
const start = function(cube: BABYLON.Mesh) {
//load scene

    /// unselect cube
    cube.setEnabled(true)
    winModal.classList.add('disable')

   
}



/**
 * run when user SUCCsessfully deletes  cube
 * and den dispose n garbage colle
 * 
 * @param cube the mesh to delete
 */
const deleteHandler = async function(cube: BABYLON.Mesh) {
    if (state.GetSetCubeActive()) {

        //delete da cube. this is my final message. goodbye
        state.GetSetCubeActive(false)
        cube.renderOutline = false;
        cube.setEnabled(false)

        // wait a bit then show winning screen
        await sleep(400)
        winModal.classList.remove('disable')
    }
}


/**
 * init the scene
 */

const winModal = Event.Init();

// get babylon data from initilization
const {scene, camera, engine, cube} = initScene();

start(cube);


// restart game
getElement('restart').addEventListener("mousedown",(evt) => Event.handleEvt(evt,()=>start(cube)))
getElement('restart').addEventListener("touchstart",(evt) => Event.handleEvt(evt,()=>start(cube)))


/**
 * add listener for keypress
 */
document.addEventListener('keydown', event => Event.KeyCheck(event, () => deleteHandler(cube)))
/**
 * listener if pointer clicks on cube
 */
scene.onPointerObservable.add ((evt) => { cube.renderOutline = Event.onClickCheck(evt,cube.renderOutline)},BABYLON.PointerEventTypes.POINTERDOWN)

// render that shit
engine.runRenderLoop(() => onRender(cube,camera,scene))

document.querySelectorAll(".dropdown").forEach((value) => {
    // add event handlers to all delete buttons
    if (value.hasAttribute("delete")) {
        value.addEventListener("mousedown", (evt) => Event.handleEvt(evt, ()=>deleteHandler(cube)))
        value.addEventListener("touchstart", (evt) => Event.handleEvt(evt, ()=>deleteHandler(cube)))
    } else {
    // add event handlers to non-delete dropdown buttons

        // value.addEventListener("mousedown", (evt) => Event.handleEvt(evt, ()=>deleteHandler(cube)))
        // value.addEventListener("touchstart", (evt) => Event.handleEvt(evt, ()=>deleteHandler(cube)))
    
    }
  

})
