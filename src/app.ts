import * as BABYLON from "babylonjs";

import 'normalize.css'; 
import './style.scss';

// init scene
const view = document.getElementById("view") as HTMLCanvasElement;
const engine = new BABYLON.Engine(view, true);


const scene = new BABYLON.Scene(engine);
scene.clearColor = BABYLON.Color4.FromHexString("#383838FF") 
//optimize resolution to stay on 60fps
engine.setHardwareScalingLevel(0.5)
const options = new BABYLON.SceneOptimizerOptions();
options.addOptimization(new BABYLON.HardwareScalingOptimization(0, 1));

// Optimizer init
const optimizer = new BABYLON.SceneOptimizer(scene, options);


// init camera, turn off inertia, and limit zoom.
const sensibility = 150;
const camera = new BABYLON.ArcRotateCamera(
    "camera",
    0,0,0,
    BABYLON.Vector3.Zero(),
    scene);
camera.allowUpsideDown = false;
camera.lowerRadiusLimit = 2;
camera.upperRadiusLimit = 100;
camera.wheelPrecision = 20.0;
camera.inertia = 0.1;
camera.speed = 1;
camera.panningInertia = 0.1;
camera.setPosition(new BABYLON.Vector3(10, 3, -10));
camera.panningSensibility = sensibility;
camera.angularSensibilityX = sensibility;
camera.angularSensibilityY = sensibility;

camera.attachControl(view);

// light
const light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(-3, 5, 0),
    scene);
light.intensity = 0.5;

// da cube
const mesh = BABYLON.MeshBuilder.CreateBox("defaultCube", {width: 1, height: 1, depth: 1, }, scene);
mesh.position = BABYLON.Vector3.Zero();
mesh
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