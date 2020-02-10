import * as BABYLON from "babylonjs";

interface BabylonSceneInit {
	camera: BABYLON.ArcRotateCamera
	engine: BABYLON.Engine
	scene: BABYLON.Scene
}
const amount = 30;


export const initScene = function (): BabylonSceneInit  {
    // init scene
    const view = document.getElementById("view") as HTMLCanvasElement;
    const engine = new BABYLON.Engine(view, true);
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = BABYLON.Color4.FromHexString("#383838FF") 

    //optimize resolution to stay on 60fps
    // dunno if this actually works. i feel like it doesnt.
    engine.setHardwareScalingLevel(0.5)
    const options = new BABYLON.SceneOptimizerOptions();
    options.addOptimization(new BABYLON.HardwareScalingOptimization(0, 1,0.25));

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
    camera.lowerRadiusLimit = 1.9;
    camera.upperRadiusLimit = 100;
    camera.wheelPrecision = 15.0;
    camera.inertia = 0.1;
    camera.speed = 1;
    camera.panningInertia = 0.1;
    camera.setPosition(new BABYLON.Vector3(7, 4, -3.5));
    camera.panningSensibility = sensibility;
    camera.angularSensibilityX = sensibility;
    camera.angularSensibilityY = sensibility;

    camera.attachControl(view);
    
   // light
    const light = new BABYLON.HemisphericLight(
        "light",
        new BABYLON.Vector3(-2, 9, -5),
        scene)
    light.intensity = 0.6;

     // da grid thingy
    const createGrid = function(type: string,pointArr: Array<BABYLON.Vector3>, color: BABYLON.Color3) {
        const line = BABYLON.MeshBuilder.CreateLines("line",{points: pointArr},scene)
        line.isPickable = false;
        for(var i = -amount; i<=amount; i +=0.5) {
            const cloneLine = line.clone('line') as BABYLON.LinesMesh 
            type == "x" ? cloneLine.position.z = i : cloneLine.position.x = i

            // color of gridlines
            if (i == 0) cloneLine.color = color 
            else if (i % 5 == 0 )cloneLine.color = BABYLON.Color3.FromHexString('#505050')
            else cloneLine.color = BABYLON.Color3.FromHexString('#414141')
            cloneLine.convertToUnIndexedMesh();
        }
        
    }
    createGrid("x",[ new BABYLON.Vector3(-amount, 0,0),new BABYLON.Vector3(amount, 0,0)],BABYLON.Color3.FromHexString('#A34655'))
    createGrid("z",[ new BABYLON.Vector3(0, 0,-amount),new BABYLON.Vector3(0, 0,amount)],BABYLON.Color3.FromHexString('#678B2B'))

    return {camera, engine, scene}
}