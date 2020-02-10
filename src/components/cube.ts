import * as BABYLON from "babylonjs";

/**
 * creates da cube
 * @param scene the scene 
 * @param camera the camera ( for calculating outline width)
 */
export const createCube = function(scene:BABYLON.Scene, camera: BABYLON.ArcRotateCamera) {
    const mesh = BABYLON.MeshBuilder.CreateBox("defaultCube", {width: 1, height: 1, depth: 1, }, scene);
    mesh.position = BABYLON.Vector3.Zero();
    
    mesh.outlineColor = BABYLON.Color3.FromHexString("#F19929");
    mesh.outlineWidth = camera.radius *0.0015;
    mesh.renderOutline = false;
    mesh.isPickable = true;
    return mesh
}