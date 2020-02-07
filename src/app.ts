import * as BABYLON from "babylonjs";

const view = document.getElementById("view") as HTMLCanvasElement;
const engine = new BABYLON.Engine(view, true);

const scene = new BABYLON.Scene(engine);

const camera = new BABYLON.ArcRotateCamera(
    "camera",
    0,0,0,
    BABYLON.Vector3.Zero(),
    scene);
    
camera.setPosition(new BABYLON.Vector3(10, 3, -10));

camera.attachControl(view);

const light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(0, 1, 0),
    scene);

const mesh = BABYLON.MeshBuilder.CreateGround("mesh", {}, scene);


engine.runRenderLoop(() => {
    scene.render();
})

 // Watch for browser/canvas resize events
window.addEventListener("resize", function () { 
    engine.resize();
});