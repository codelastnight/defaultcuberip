import * as BABYLON from "babylonjs";
interface BabylonSceneInit {
    camera: BABYLON.ArcRotateCamera;
    engine: BABYLON.Engine;
    scene: BABYLON.Scene;
    cube: BABYLON.Mesh;
}
export declare const initScene: () => BabylonSceneInit;
export {};
