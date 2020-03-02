/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./node_modules/normalize.css/normalize.css?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst BABYLON = __importStar(__webpack_require__(/*! babylonjs */ \"babylonjs\"));\r\nconst scene_1 = __webpack_require__(/*! ./components/scene */ \"./src/components/scene.ts\");\r\nconst helper_1 = __webpack_require__(/*! ./components/helper */ \"./src/components/helper.ts\");\r\nconst Event = __importStar(__webpack_require__(/*! ./components/events */ \"./src/components/events.ts\"));\r\n__webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\r\n__webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\r\n// this is the data state\r\nconst state = __importStar(__webpack_require__(/*! ./components/appState */ \"./src/components/appState.ts\"));\r\n/**\r\n * run every render\r\n * @param cube\r\n * @param camera\r\n * @param scene\r\n */\r\nconst onRender = function (cube, camera, scene) {\r\n    cube.outlineWidth = camera.radius * 0.0015;\r\n    scene.render();\r\n};\r\n/**\r\n * init when loaded\r\n */\r\nconst start = function (cube) {\r\n    //load scene\r\n    /// unselect cube\r\n    cube.setEnabled(true);\r\n    winModal.classList.add('disable');\r\n};\r\n/**\r\n * run when user SUCCsessfully deletes  cube\r\n * and den dispose n garbage colle\r\n *\r\n * @param cube the mesh to delete\r\n */\r\nconst deleteHandler = async function (cube) {\r\n    if (state.GetSetCubeActive()) {\r\n        //delete da cube. this is my final message. goodbye\r\n        state.GetSetCubeActive(false);\r\n        cube.renderOutline = false;\r\n        cube.setEnabled(false);\r\n        // wait a bit then show winning screen\r\n        await helper_1.sleep(400);\r\n        winModal.classList.remove('disable');\r\n    }\r\n};\r\n/**\r\n * init the scene\r\n */\r\nconst winModal = Event.Init();\r\n// get babylon data from initilization\r\nconst { scene, camera, engine, cube } = scene_1.initScene();\r\nstart(cube);\r\n// restart game\r\nhelper_1.getElement('restart').addEventListener(\"mousedown\", (evt) => Event.handleEvt(evt, () => start(cube)));\r\nhelper_1.getElement('restart').addEventListener(\"touchstart\", (evt) => Event.handleEvt(evt, () => start(cube)));\r\n/**\r\n * add listener for keypress\r\n */\r\ndocument.addEventListener('keydown', event => Event.KeyCheck(event, () => deleteHandler(cube)));\r\n/**\r\n * listener if pointer clicks on cube\r\n */\r\nscene.onPointerObservable.add((evt) => { cube.renderOutline = Event.onClickCheck(evt, cube.renderOutline); }, BABYLON.PointerEventTypes.POINTERDOWN);\r\n// render that shit\r\nengine.runRenderLoop(() => onRender(cube, camera, scene));\r\n// add event handlers to all delete buttons\r\ndocument.querySelectorAll(\".dropdown\").forEach((value) => {\r\n    if (value.hasAttribute(\"delete\")) {\r\n        value.addEventListener(\"mousedown\", (evt) => Event.handleEvt(evt, () => deleteHandler(cube)));\r\n        value.addEventListener(\"touchstart\", (evt) => Event.handleEvt(evt, () => deleteHandler(cube)));\r\n    }\r\n    else {\r\n        // value.addEventListener(\"mousedown\", (evt) => Event.handleEvt(evt, ()=>deleteHandler(cube)))\r\n        // value.addEventListener(\"touchstart\", (evt) => Event.handleEvt(evt, ()=>deleteHandler(cube)))\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/components/appState.ts":
/*!************************************!*\
  !*** ./src/components/appState.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/**\r\n * all state stuff happens here\r\n *\r\n */\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nlet cubeActive = false;\r\n// cursor position\r\nlet mousePos = {\r\n    x: 0,\r\n    y: 0\r\n};\r\n// update the values\r\nconst GetSetCubeActive = (value = null) => value != null ? cubeActive = value : cubeActive;\r\nexports.GetSetCubeActive = GetSetCubeActive;\r\nconst GetSetMousePos = (value = null) => value != null ? mousePos = value : mousePos;\r\nexports.GetSetMousePos = GetSetMousePos;\r\n\n\n//# sourceURL=webpack:///./src/components/appState.ts?");

/***/ }),

/***/ "./src/components/events.ts":
/*!**********************************!*\
  !*** ./src/components/events.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst helper_1 = __webpack_require__(/*! ./helper */ \"./src/components/helper.ts\");\r\nconst state = __importStar(__webpack_require__(/*! ./appState */ \"./src/components/appState.ts\"));\r\n// event listeners only gang \r\n// ok but fr how do i make this cleaner wtf\r\n// the thing that opens when you win\r\nconst winModal = helper_1.getElement('w');\r\n// right click dropdown\r\nconst dropdown = helper_1.getElement('rightclick');\r\n//when you press the x key\r\nconst xkey = helper_1.getElement('x-key');\r\n//when you press the x key\r\nconst objmenu = helper_1.getElement('objmenulist');\r\nexports.Init = function () {\r\n    // add event listeners for all menus\r\n    const menus = [\r\n        dropdown,\r\n        xkey,\r\n        objmenu\r\n    ];\r\n    menus.forEach((element) => {\r\n        // when mouse leaves vicinity of a dropdown menu, close it. this is to mimic blender\r\n        element.addEventListener(\"mouseleave\", () => {\r\n            element.classList.add(\"disable\");\r\n        });\r\n        // close on click\r\n        element.addEventListener(\"mousedown\", () => {\r\n            element.classList.add(\"disable\");\r\n        });\r\n        element.addEventListener(\"\", () => {\r\n            element.classList.add(\"disable\");\r\n        });\r\n    });\r\n    // mobile button\r\n    //getElement('objmenubtn').addEventListener(\"touchstart\", ()=> dropdown.classList.add(\"disable\"))\r\n    //menu on 'object' button\r\n    helper_1.getElement('objmenubtn').addEventListener(\"click\", (evt) => exports.handleEvt(evt, () => exports.openMenu(objmenu, null)));\r\n    helper_1.getElement('objmenubtn').addEventListener(\"touchstart\", (evt) => exports.handleEvt(evt, () => exports.openMenu(objmenu, null)));\r\n    //get mouse position\r\n    document.addEventListener(\"mousemove\", (e) => state.GetSetMousePos({ x: e.clientX, y: e.clientY }));\r\n    //disable default rightclick\r\n    document.oncontextmenu = function () {\r\n        return false;\r\n    };\r\n    return winModal;\r\n};\r\n/**\r\n * touch support\r\n * @param evt mouse / touch event\r\n * @param fn  function to fire\r\n */\r\nexports.handleEvt = function (evt, fn) {\r\n    evt.preventDefault();\r\n    evt.cancelBubble = false;\r\n    return fn();\r\n};\r\n/**\r\n * opens the menu in the UI\r\n *\r\n * @param element the menu element\r\n * @param pos  mouse position\r\n */\r\nexports.openMenu = function (element, pos = null) {\r\n    element.classList.remove(\"disable\");\r\n    if (pos != null) {\r\n        // sets the context menus at cusor position. the -48 value is an offset for the invisible padding\r\n        element.style.setProperty(\"left\", (pos.x - 48).toString() + \"px\");\r\n        element.style.setProperty(\"top\", (pos.y - 48).toString() + \"px\");\r\n    }\r\n    return element;\r\n};\r\n/**\r\n *\r\n * @param evt pointer event\r\n * @param pick info from babylon\r\n * @param cube mesh\r\n */\r\nexports.onClickCheck = function (evt, cubeOutline) {\r\n    // open up context menu on right click\r\n    if (evt.event.button == 2) {\r\n        exports.openMenu(dropdown, state.GetSetMousePos());\r\n    }\r\n    // if the click hits the ground object, outline it\r\n    else if (evt.pickInfo != null && evt.pickInfo.hit) {\r\n        cubeOutline = true;\r\n        state.GetSetCubeActive(true);\r\n    }\r\n    else {\r\n        cubeOutline = false;\r\n        state.GetSetCubeActive(false);\r\n    }\r\n    return cubeOutline;\r\n};\r\n/**\r\n * check for delte and backspace\r\n * @param ev keyboard event\r\n * @param mesh the mesh to delete\r\n */\r\nexports.KeyCheck = function (ev, deletefn) {\r\n    const pos = state.GetSetMousePos();\r\n    const cubeState = state.GetSetCubeActive();\r\n    switch (ev.keyCode) {\r\n        case 8: //backspace\r\n        case 46: // delete\r\n            if (cubeState)\r\n                return deletefn();\r\n            break;\r\n        case 88: // x key\r\n            if (cubeState)\r\n                return exports.openMenu(xkey, { x: pos.x - 40, y: pos.y - 40 });\r\n            break;\r\n        default:\r\n            console.log(String.fromCharCode(ev.keyCode));\r\n            return;\r\n            break;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/components/events.ts?");

/***/ }),

/***/ "./src/components/helper.ts":
/*!**********************************!*\
  !*** ./src/components/helper.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/**\r\n * hlper funcitons\r\n *  i cannot code to save my life\r\n */\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n *  I am hip and cool so i use promise and async\r\n * @param ms how much to sleep\r\n */\r\nexports.sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));\r\n/**\r\n * get html element by id\r\n * @param id element id\r\n */\r\nexports.getElement = (id) => document.getElementById(id);\r\n\n\n//# sourceURL=webpack:///./src/components/helper.ts?");

/***/ }),

/***/ "./src/components/scene.ts":
/*!*********************************!*\
  !*** ./src/components/scene.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst BABYLON = __importStar(__webpack_require__(/*! babylonjs */ \"babylonjs\"));\r\nconst amount = 30;\r\nexports.initScene = function () {\r\n    // init scene\r\n    const view = document.getElementById(\"view\");\r\n    const engine = new BABYLON.Engine(view, true);\r\n    const scene = new BABYLON.Scene(engine);\r\n    scene.clearColor = BABYLON.Color4.FromHexString(\"#383838FF\");\r\n    //optimize resolution to stay on 60fps\r\n    // dunno if this actually works. i feel like it doesnt.\r\n    engine.setHardwareScalingLevel(0.75);\r\n    const options = new BABYLON.SceneOptimizerOptions();\r\n    options.addOptimization(new BABYLON.HardwareScalingOptimization(0, 1, 0.25));\r\n    // Optimizer init\r\n    const optimizer = new BABYLON.SceneOptimizer(scene, options);\r\n    // init camera, turn off inertia, and limit zoom.\r\n    const sensibility = 150;\r\n    const camera = new BABYLON.ArcRotateCamera(\"camera\", 0, 0, 0, BABYLON.Vector3.Zero(), scene);\r\n    camera.allowUpsideDown = false;\r\n    camera.lowerRadiusLimit = 1.9;\r\n    camera.upperRadiusLimit = 100;\r\n    camera.wheelPrecision = 15.0;\r\n    camera.inertia = 0.1;\r\n    camera.speed = 1;\r\n    camera.panningInertia = 0.1;\r\n    camera.setPosition(new BABYLON.Vector3(7, 4, -3.5));\r\n    camera.panningSensibility = sensibility;\r\n    camera.angularSensibilityX = sensibility;\r\n    camera.angularSensibilityY = sensibility;\r\n    camera.attachControl(view);\r\n    // light\r\n    const light = new BABYLON.HemisphericLight(\"light\", new BABYLON.Vector3(-2, 9, -5), scene);\r\n    light.intensity = 0.6;\r\n    // da grid thingy\r\n    const createGrid = function (type, pointArr, color) {\r\n        const line = BABYLON.MeshBuilder.CreateLines(\"line\", { points: pointArr }, scene);\r\n        // make it unselectable\r\n        line.isPickable = false;\r\n        // clone it a bunch\r\n        for (var i = -amount; i <= amount; i += 0.5) {\r\n            const cloneLine = line.clone('line');\r\n            type == \"x\" ? cloneLine.position.z = i : cloneLine.position.x = i;\r\n            // color of gridlines\r\n            if (i == 0)\r\n                cloneLine.color = color;\r\n            else if (i % 5 == 0)\r\n                cloneLine.color = BABYLON.Color3.FromHexString('#505050');\r\n            else\r\n                cloneLine.color = BABYLON.Color3.FromHexString('#414141');\r\n            // unindex to optimize\r\n            cloneLine.convertToUnIndexedMesh();\r\n        }\r\n    };\r\n    createGrid(\"x\", [new BABYLON.Vector3(-amount, 0, 0), new BABYLON.Vector3(amount, 0, 0)], BABYLON.Color3.FromHexString('#A34655'));\r\n    createGrid(\"z\", [new BABYLON.Vector3(0, 0, -amount), new BABYLON.Vector3(0, 0, amount)], BABYLON.Color3.FromHexString('#678B2B'));\r\n    const cube = createCube(scene, camera);\r\n    /**\r\n     * Watch for browser/canvas resize events\r\n     */\r\n    window.addEventListener(\"resize\", function () {\r\n        engine.resize();\r\n    });\r\n    return { camera, engine, scene, cube };\r\n};\r\n/**\r\n * creates da cube\r\n * @param scene the scene\r\n * @param camera the camera ( for calculating outline width)\r\n */\r\nconst createCube = function (scene, camera) {\r\n    const mesh = BABYLON.MeshBuilder.CreateBox(\"defaultCube\", { width: 1, height: 1, depth: 1, }, scene);\r\n    mesh.position = BABYLON.Vector3.Zero();\r\n    mesh.outlineColor = BABYLON.Color3.FromHexString(\"#F19929\");\r\n    mesh.outlineWidth = camera.radius * 0.0015;\r\n    mesh.renderOutline = false;\r\n    mesh.isPickable = true;\r\n    return mesh;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/components/scene.ts?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ }),

/***/ "babylonjs":
/*!**************************!*\
  !*** external "BABYLON" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = BABYLON;\n\n//# sourceURL=webpack:///external_%22BABYLON%22?");

/***/ })

/******/ });