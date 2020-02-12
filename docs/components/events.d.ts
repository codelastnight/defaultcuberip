import * as BABYLON from 'babylonjs';
export declare const Init: () => HTMLElement;
/**
 * opens the menu in the UI
 *
 * @param element the menu element
 * @param pos  mouse position
 */
export declare const openMenu: (element: HTMLElement, pos?: Pos | null) => void;
/**
 *
 * @param evt pointer event
 * @param pick info from babylon
 * @param cube mesh
 */
export declare const onClickCheck: (evt: BABYLON.PointerInfo, cubeOutline: boolean) => boolean;
/**
 * check for delte and backspace
 * @param ev keyboard event
 * @param mesh the mesh to delete
 */
export declare const KeyCheck: (ev: KeyboardEvent, deletefn: Function) => any;
