import * as BABYLON from "babylonjs";
import {initScene} from './components/scene'
import 'normalize.css'; 
import './style.scss';


const {scene, camera, engine} = initScene();
// light
const light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(-2, 9, -5),
    scene)
light.intensity = 0.6;





// da cube
const mesh = BABYLON.MeshBuilder.CreateBox("defaultCube", {width: 1, height: 1, depth: 1, }, scene);
mesh.position = BABYLON.Vector3.Zero();

mesh.outlineColor = BABYLON.Color3.FromHexString("#F19929");
mesh.outlineWidth = camera.radius *0.0015;
mesh.renderOutline = false;
mesh.isPickable = true;



//select on mouse down
scene.onPointerDown = function (_evt, pickResult) {
    // if the click hits the ground object, we change the impact position
    if (pickResult.hit ) {
        mesh.renderOutline = true;
    } else {
        mesh.renderOutline = false;
    }
};

// render that shit
engine.runRenderLoop(() => {

    mesh.outlineWidth = camera.radius *0.0015;
    scene.render();
})

 // Watch for browser/canvas resize events
window.addEventListener("resize", function () { 
    engine.resize();
});