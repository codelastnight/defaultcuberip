import * as BABYLON from "babylonjs";
interface BabylonSceneInit {
    camera: BABYLON.ArcRotateCamera;
    engine: BABYLON.Engine;
    scene: BABYLON.Scene;
}
export declare const initScene: () => BabylonSceneInit;
export {};
