/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    background-color: gray;\\n    margin: 0;\\n}\\n#start {\\n    position: fixed;\\n    background-color: cornflowerblue;\\n    height: 100%;\\n    width: 100%;\\n    top: 0px;\\n    left: 0px;\\n    z-index: 1000;\\n}\\n#start button {\\n    display: block;\\n    margin: auto;\\n    height: 50px;\\n    width: 50px;\\n}\\n#shipPlacer {\\n    margin: auto;\\n    margin-top: 100px;\\n}\\n#gameboards-container {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-around;\\n}\\n.gameboard {\\n    display: grid;\\n    grid-template-columns: repeat(10, auto);\\n    background-color: aquamarine;\\n    height: 600px;\\n    width: 600px;\\n}\\n.square {\\n    background-color: beige;\\n    height: 58px;\\n    width: 58px;\\n    border-radius: 10px;\\n    border: black solid 1px;\\n}\\n.square-occupied {\\n    background-color: rgb(117, 117, 105);\\n}\\n.miss {\\n    background-color: blue;\\n}\\n.hit {\\n    background-color: red;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Players\": () => (/* binding */ Players),\n/* harmony export */   \"Boards\": () => (/* binding */ Boards),\n/* harmony export */   \"hasSomeoneWon\": () => (/* binding */ hasSomeoneWon)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DOM */ \"./src/js/modules/DOM.js\");\n/* harmony import */ var _modules_shipPlacerDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/shipPlacerDOM */ \"./src/js/modules/shipPlacerDOM.js\");\n/* harmony import */ var _modules_gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/gameboard */ \"./src/js/modules/gameboard.js\");\n/* harmony import */ var _modules_createPlayers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/createPlayers */ \"./src/js/modules/createPlayers.js\");\n/* harmony import */ var _modules_ships__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/ships */ \"./src/js/modules/ships.js\");\n\n\n\n\n\n\n\nconst Players = (() => {\n  const player1 = (0,_modules_createPlayers__WEBPACK_IMPORTED_MODULE_4__.default)('name1', 'human');\n  const player2 = (0,_modules_createPlayers__WEBPACK_IMPORTED_MODULE_4__.default)('name2', 'comp');\n  return {\n    player1,\n    player2,\n  };\n})();\n\nconst Boards = (() => {\n  const player1Board = (0,_modules_gameboard__WEBPACK_IMPORTED_MODULE_3__.default)();\n  const player2Board = (0,_modules_gameboard__WEBPACK_IMPORTED_MODULE_3__.default)();\n  return {\n    player1Board,\n    player2Board,\n  };\n})();\n\nBoards.player2Board.placeShip(_modules_ships__WEBPACK_IMPORTED_MODULE_5__.carrier, [1, 1], 'x');\n\nconst hasSomeoneWon = () => {\n  if (Boards.player1Board.isGameOver()) {\n    _modules_DOM__WEBPACK_IMPORTED_MODULE_1__.default.displayWin('player2');\n  }\n  if (Boards.player2Board.isGameOver()) {\n    _modules_DOM__WEBPACK_IMPORTED_MODULE_1__.default.displayWin('player1');\n  }\n};\n\n_modules_DOM__WEBPACK_IMPORTED_MODULE_1__.default.populateSquares();\n_modules_shipPlacerDOM__WEBPACK_IMPORTED_MODULE_2__.default.addStartEventListeners();\n\n\n\n\n//# sourceURL=webpack://battleship/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/DOM.js":
/*!*******************************!*\
  !*** ./src/js/modules/DOM.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ai */ \"./src/js/modules/ai.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/js/index.js\");\n\n\n\nconst DOM = (() => {\n  const playerArray = ['player1Board', 'player2Board'];\n  const gameboards = document.querySelectorAll('.gameboard');\n  const populateSquares = () => {\n    gameboards.forEach((element) => {\n      for (let i = 0; i < 100; i++) {\n        const y = Math.floor((i + 10) / 10);\n        const x = i - Math.floor(i / 10) * 10 + 1;\n        const square = document.createElement('div');\n        square.classList.add('square');\n        square.setAttribute('data-coord', `${x},${y}`);\n        element.appendChild(square);\n      }\n    });\n  };\n  const markShipPos = () => {\n    playerArray.forEach((player) => {\n      const { ships } = _index__WEBPACK_IMPORTED_MODULE_1__.Boards[player].boardState;\n      const shipsArray = Object.keys(ships);\n      shipsArray.forEach((ship) => {\n        const shipCoords = Object.keys(ships[ship].coords);\n        shipCoords.forEach((coord) => {\n          const square = document.querySelector(`#${player} [data-coord='${coord}']`);\n          square.classList.add('square-occupied');\n        });\n      });\n    });\n  };\n  const markMiss = (playerBoard) => {\n    _index__WEBPACK_IMPORTED_MODULE_1__.Boards[playerBoard].boardState.dodgedShots.forEach((coord) => {\n      const square = document.querySelector(`#${playerBoard} [data-coord='${coord}']`);\n      if (!square.classList.contains('miss')) {\n        square.classList.add('miss');\n      }\n    });\n  };\n  const markHit = (playerBoard) => {\n    const { ships } = _index__WEBPACK_IMPORTED_MODULE_1__.Boards[playerBoard].boardState;\n    const shipsArray = Object.keys(ships);\n    shipsArray.forEach((ship) => {\n      const coordArray = Object.keys(ships[ship].coords);\n      coordArray.forEach((coord) => {\n        if (ships[ship].coords[coord].isHit === true) {\n          const square = document.querySelector(`#${playerBoard} [data-coord='${coord}']`);\n          if (!square.classList.contains('hit')) {\n            square.classList.add('hit');\n          }\n        }\n      });\n    });\n  };\n  const setTurn = (player) => {\n    if (player === 'player1Board') {\n      const playerBoard = document.querySelector('#player1Board');\n      playerBoard.replaceWith(playerBoard.cloneNode(true));\n    } else if (player === 'player2Board') {\n      const playerBoard = document.querySelector('#player2Board');\n      playerBoard.replaceWith(playerBoard.cloneNode(true));\n      if (_index__WEBPACK_IMPORTED_MODULE_1__.Players.player2.type === 'comp') {\n        _ai__WEBPACK_IMPORTED_MODULE_0__.default.selectCoord();\n      }\n    }\n  };\n  const displayWin = (player) => {\n    alert(`${player} wins`);\n  };\n  const addEventListeners = () => {\n    const squares = document.querySelectorAll('#gameboards-container .square');\n    squares.forEach((square) => {\n      square.addEventListener('click', getCoord);\n    });\n  };\n  function getCoord(e) {\n    const playerBoard = e.target.parentElement.id;\n    const { coord } = e.path[0].dataset;\n    launchAttack(playerBoard, coord);\n  }\n  function launchAttack(playerBoard, coord) {\n    _index__WEBPACK_IMPORTED_MODULE_1__.Boards[`${playerBoard}`].receiveAttack(coord);\n    markMiss(playerBoard);\n    markHit(playerBoard);\n    addEventListeners();\n    setTurn(playerBoard);\n  }\n  return {\n    populateSquares,\n    launchAttack,\n    setTurn,\n    addEventListeners,\n    markShipPos,\n    displayWin,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);\n\n\n//# sourceURL=webpack://battleship/./src/js/modules/DOM.js?");

/***/ }),

/***/ "./src/js/modules/ai.js":
/*!******************************!*\
  !*** ./src/js/modules/ai.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/js/modules/DOM.js\");\n\n\nconst AI = (() => {\n  function randomizeCoord() {\n    const x = Math.floor(Math.random() * 10) + 1;\n    const y = Math.floor(Math.random() * 10) + 1;\n    return `${x},${y}`;\n  }\n  function selectCoord() {\n    const coord = randomizeCoord();\n    _DOM__WEBPACK_IMPORTED_MODULE_0__.default.launchAttack('player1Board', coord);\n  }\n  return {\n    selectCoord,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AI);\n\n\n//# sourceURL=webpack://battleship/./src/js/modules/ai.js?");

/***/ }),

/***/ "./src/js/modules/createPlayers.js":
/*!*****************************************!*\
  !*** ./src/js/modules/createPlayers.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createPlayer = (name, type) => ({\n  name,\n  type,\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPlayer);\n\n\n//# sourceURL=webpack://battleship/./src/js/modules/createPlayers.js?");

/***/ }),

/***/ "./src/js/modules/createShip.js":
/*!**************************************!*\
  !*** ./src/js/modules/createShip.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createShip(name, length) {\n  return {\n    hit(coords) {\n      this.coords[coords].isHit = true;\n    },\n    isSunk() {\n      return Object.values(this.coords).every((value) => value.isHit === true);\n    },\n    name,\n    length,\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createShip);\n\n\n//# sourceURL=webpack://battleship/./src/js/modules/createShip.js?");

/***/ }),

/***/ "./src/js/modules/gameboard.js":
/*!*************************************!*\
  !*** ./src/js/modules/gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/js/index.js\");\n\n\nconst createGameBoard = () => {\n  const boardState = {\n    ships: {},\n    dodgedShots: [],\n  };\n  const isGameOver = () => {\n    const { ships } = boardState;\n    const shipsArray = Object.keys(ships);\n    const sunkArray = [];\n    shipsArray.forEach((ship) => {\n      sunkArray.push(ships[ship].isSunk());\n    });\n    if (sunkArray.every((value) => value === true)) {\n      return true;\n    }\n    return false;\n  };\n  const checkIfValidPlacement = (array) => {\n    const comparison = [];\n    array.forEach((coord) => {\n      if (coord[0] > 10 || coord[0] < 0 || coord[1] > 10 || coord[1] < 0) {\n        comparison.push(false);\n      }\n    });\n    if (comparison.includes(false)) {\n      return false;\n    }\n    return true;\n  };\n  const placeShip = (ship, coords, axis) => {\n    let shipObj = boardState.ships[ship.name];\n    shipObj = { ...shipObj, ...ship, ...{ coords: {} } };\n    if (axis === 'x') {\n      for (let i = 0; i < ship.length; i++) {\n        const newCoords = [coords[0] + i, coords[1]];\n        shipObj.coords[newCoords] = { isHit: false };\n      }\n    } else if (axis === 'y') {\n      for (let i = 0; i < ship.length; i++) {\n        const newCoords = [coords[0], coords[1] + i];\n        shipObj.coords[newCoords] = { isHit: false };\n      }\n    }\n    const coordArray = [];\n    Object.keys(shipObj.coords).forEach((coord) => coordArray.push(coord.split(',')));\n    if (checkIfValidPlacement(coordArray)) {\n      boardState.ships[ship.name] = shipObj;\n      return true;\n    }\n    return false;\n  };\n  const receiveAttack = (coords) => {\n    const coordsStr = coords.toString();\n    const { ships } = boardState;\n    const shipsArray = Object.keys(ships);\n    let hit = false;\n    shipsArray.forEach((ship) => {\n      if (Object.keys(ships[ship].coords).includes(coordsStr) === true) {\n        ships[ship].hit(coords);\n        hit = true;\n      }\n    });\n    if (hit === false) {\n      boardState.dodgedShots.push(coords);\n    }\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.hasSomeoneWon)();\n  };\n  return {\n    placeShip,\n    receiveAttack,\n    isGameOver,\n    boardState,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGameBoard);\n\n\n//# sourceURL=webpack://battleship/./src/js/modules/gameboard.js?");

/***/ }),

/***/ "./src/js/modules/shipPlacerDOM.js":
/*!*****************************************!*\
  !*** ./src/js/modules/shipPlacerDOM.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/js/modules/DOM.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/js/index.js\");\n/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ships */ \"./src/js/modules/ships.js\");\n\n\n\n\nconst place = (() => {\n  let axis = 'x';\n  let num = 0;\n  const placeBoat = (coord) => {\n    const split = coord.split(',');\n    const newCoord = split.map((x) => +x);\n    switch (num) {\n      case 0:\n        if (_index__WEBPACK_IMPORTED_MODULE_1__.Boards.player1Board.placeShip(_ships__WEBPACK_IMPORTED_MODULE_2__.carrier, newCoord, axis) === true) {\n          num++;\n        }\n        break;\n      case 1:\n        if (_index__WEBPACK_IMPORTED_MODULE_1__.Boards.player1Board.placeShip(_ships__WEBPACK_IMPORTED_MODULE_2__.battleship, newCoord, axis) === true) {\n          num++;\n        }\n        break;\n      case 2:\n        if (_index__WEBPACK_IMPORTED_MODULE_1__.Boards.player1Board.placeShip(_ships__WEBPACK_IMPORTED_MODULE_2__.destroyer, newCoord, axis) === true) {\n          num++;\n        }\n        break;\n      case 3:\n        if (_index__WEBPACK_IMPORTED_MODULE_1__.Boards.player1Board.placeShip(_ships__WEBPACK_IMPORTED_MODULE_2__.submarine, newCoord, axis) === true) {\n          num++;\n        }\n        break;\n      case 4:\n        _index__WEBPACK_IMPORTED_MODULE_1__.Boards.player1Board.placeShip(_ships__WEBPACK_IMPORTED_MODULE_2__.patrolBoat, newCoord, axis);\n        document.querySelector('#start').remove();\n        _DOM__WEBPACK_IMPORTED_MODULE_0__.default.markShipPos();\n        _DOM__WEBPACK_IMPORTED_MODULE_0__.default.addEventListeners();\n        _DOM__WEBPACK_IMPORTED_MODULE_0__.default.setTurn('player1Board');\n        break;\n      default:\n    }\n  };\n  const changeAxis = () => {\n    const axisButton = document.querySelector('#start button');\n    if (axis === 'x') {\n      axis = 'y';\n      axisButton.textContent = 'y';\n    } else if (axis === 'y') {\n      axis = 'x';\n      axisButton.textContent = 'x';\n    }\n  };\n  const addStartEventListeners = () => {\n    const axisButton = document.querySelector('#start button');\n    axisButton.addEventListener('click', changeAxis);\n    const squares = document.querySelectorAll('#start .square');\n    squares.forEach((square) => {\n      square.addEventListener('click', getCoord);\n    });\n  };\n  function getCoord(e) {\n    const { coord } = e.path[0].dataset;\n    placeBoat(coord);\n  }\n\n  return {\n    addStartEventListeners,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (place);\n\n\n//# sourceURL=webpack://battleship/./src/js/modules/shipPlacerDOM.js?");

/***/ }),

/***/ "./src/js/modules/ships.js":
/*!*********************************!*\
  !*** ./src/js/modules/ships.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"carrier\": () => (/* binding */ carrier),\n/* harmony export */   \"battleship\": () => (/* binding */ battleship),\n/* harmony export */   \"destroyer\": () => (/* binding */ destroyer),\n/* harmony export */   \"submarine\": () => (/* binding */ submarine),\n/* harmony export */   \"patrolBoat\": () => (/* binding */ patrolBoat)\n/* harmony export */ });\n/* harmony import */ var _createShip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createShip */ \"./src/js/modules/createShip.js\");\n\n\nconst carrier = (0,_createShip__WEBPACK_IMPORTED_MODULE_0__.default)('carrier', 5);\nconst battleship = (0,_createShip__WEBPACK_IMPORTED_MODULE_0__.default)('battleship', 4);\nconst destroyer = (0,_createShip__WEBPACK_IMPORTED_MODULE_0__.default)('destroyer', 3);\nconst submarine = (0,_createShip__WEBPACK_IMPORTED_MODULE_0__.default)('submarine', 3);\nconst patrolBoat = (0,_createShip__WEBPACK_IMPORTED_MODULE_0__.default)('patrolBoat', 2);\n\n\n\n\n//# sourceURL=webpack://battleship/./src/js/modules/ships.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;