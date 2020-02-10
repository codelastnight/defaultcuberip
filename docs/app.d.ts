import * as BABYLON from "babylonjs";
import 'normalize.css';
import './style.scss';
/**
 * check for delte and backspace
 * @param ev keyboard event
 * @param mesh the mesh to delete
 */
export declare const KeyCheck: (ev: KeyboardEvent, mesh: BABYLON.Mesh) => void;
/**
 *
 * @param evt pointer event
 * @param pick info from babylon
 * @param cube mesh
 */
export declare const onClickCheck: (evt: BABYLON.PointerInfo, cube: BABYLON.Mesh) => void;
