import * as BABYLON from "babylonjs";

import 'normalize.css'; 
import './style.scss';

const view = document.getElementById("view") as HTMLCanvasElement;
const engine = new BABYLON.Engine(view, true);
engine.setHardwareScalingLevel(0.5);

const scene = new BABYLON.Scene(engine);

const options = new BABYLON.SceneOptimizerOptions();
options.addOptimization(new BABYLON.HardwareScalingOptimization(0, 1));

// Optimizer
const optimizer = new BABYLON.SceneOptimizer(scene, options);



const camera = new BABYLON.ArcRotateCamera(
    "camera",
    0,0,0,
    BABYLON.Vector3.Zero(),
    scene);
camera.allowUpsideDown = false;
camera.lowerRadiusLimit = 2;
camera.upperRadiusLimit = 100;
camera.wheelPrecision = 100.0;
camera.panningInertia = 0;
camera
camera.setPosition(new BABYLON.Vector3(10, 3, -10));

camera.attachControl(view);

const light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(-3, 5, 0),
    scene);

const mesh = BABYLON.MeshBuilder.CreateBox("defaultCube", {width: 1, height: 1, depth: 1}, scene);
mesh.position = BABYLON.Vector3.Zero();

engine.runRenderLoop(() => {
    scene.render();
})

 // Watch for browser/canvas resize events
window.addEventListener("resize", function () { 
    engine.resize();
});