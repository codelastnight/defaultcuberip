import * as BABYLON from "babylonjs";
import {initScene} from './components/scene'
import 'normalize.css'; 
import './style.scss';

/**
 * creates da cube
 * @param scene the scene 
 * @param camera the camera ( for calculating outline width)
 */
const createCube = function(scene:BABYLON.Scene, camera: BABYLON.ArcRotateCamera) {
    const mesh = BABYLON.MeshBuilder.CreateBox("defaultCube", {width: 1, height: 1, depth: 1, }, scene);
    mesh.position = BABYLON.Vector3.Zero();
    
    mesh.outlineColor = BABYLON.Color3.FromHexString("#F19929");
    mesh.outlineWidth = camera.radius *0.0015;
    mesh.renderOutline = false;
    mesh.isPickable = true;
    return mesh
}

/**
 * run when user SUCCsessfully deletes  cube
 * @param mesh the mesh to delete
 */
const deleteHandler = function(mesh: BABYLON.Mesh) {
    mesh.dispose();
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
      default:
        console.log(String.fromCharCode(ev.keyCode))
      break;
   }
}

/**
 * the main code thingy
 */

//load scene
const {scene, camera, engine} = initScene();

/// is cube selected?
let isCubeSelected = false

// load cube
const cube = createCube(scene, camera)

// render that shit
engine.runRenderLoop(() => {

    cube.outlineWidth = camera.radius *0.0015;
    scene.render();
})

/**
 * add listener for keypress
 */
document.addEventListener('keydown', event => KeyCheck(event, cube))

/**
 * listener if pointer clicks on cube
 */
scene.onPointerDown = function (evt, pickResult) {
    // if the click hits the ground object, we change the impact position
    if (pickResult.hit ) {
        cube.renderOutline = true;
        isCubeSelected = true
    } 
    // open up context menu on right click
    else if(evt.button == 2) {
        
    }
    else {
        cube.renderOutline = false;
        isCubeSelected = false
    }
};


/**
 * Watch for browser/canvas resize events
 */
window.addEventListener("resize", function () { 
    engine.resize();
});