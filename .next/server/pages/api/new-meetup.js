"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        let uri = \"mongodb://admin:admin12345@cluster0-shard-00-00.qfsgi.mongodb.net:27017,cluster0-shard-00-01.qfsgi.mongodb.net:27017,cluster0-shard-00-02.qfsgi.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-p9on4q-shard-0&authSource=admin&retryWrites=true&w=majority\";\n        const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri);\n        try {\n            const data = req.body;\n            await client.connect();\n            const db = client.db();\n            const meetupsCollection = db.collection(\"meetups\");\n            const result = await meetupsCollection.insertOne(data);\n            console.log(result);\n            res.status(201).json({\n                message: \"Meetup inserted.\"\n            });\n        } catch (err) {\n            console.log(err);\n        } finally{\n            client.close();\n        }\n    // const client = await MongoClient.connect(\n    //   ''\n    // );\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQixJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSUMsR0FBRyxHQUNMLHlRQUF5UTtRQUUzUSxNQUFNQyxNQUFNLEdBQUcsSUFBSU4sZ0RBQVcsQ0FBQ0ssR0FBRyxDQUFDO1FBQ25DLElBQUk7WUFDRixNQUFNRSxJQUFJLEdBQUdMLEdBQUcsQ0FBQ00sSUFBSTtZQUVyQixNQUFNRixNQUFNLENBQUNHLE9BQU8sRUFBRSxDQUFDO1lBRXZCLE1BQU1DLEVBQUUsR0FBR0osTUFBTSxDQUFDSSxFQUFFLEVBQUU7WUFFdEIsTUFBTUMsaUJBQWlCLEdBQUdELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLFNBQVMsQ0FBQztZQUNsRCxNQUFNQyxNQUFNLEdBQUcsTUFBTUYsaUJBQWlCLENBQUNHLFNBQVMsQ0FBQ1AsSUFBSSxDQUFDO1lBRXREUSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsTUFBTSxDQUFDLENBQUM7WUFFcEJWLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSxrQkFBa0I7YUFBRSxDQUFDLENBQUM7U0FDdkQsQ0FBQyxPQUFPQyxHQUFHLEVBQUU7WUFDWkwsT0FBTyxDQUFDQyxHQUFHLENBQUNJLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCLFFBQVM7WUFDUmQsTUFBTSxDQUFDZSxLQUFLLEVBQUUsQ0FBQztTQUNoQjtJQUVELDRDQUE0QztJQUM1QyxPQUFPO0lBQ1AsS0FBSztLQUNOO0NBQ0Y7QUFFRCxpRUFBZXBCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz83Mzk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgbGV0IHVyaSA9XHJcbiAgICAgICdtb25nb2RiOi8vYWRtaW46YWRtaW4xMjM0NUBjbHVzdGVyMC1zaGFyZC0wMC0wMC5xZnNnaS5tb25nb2RiLm5ldDoyNzAxNyxjbHVzdGVyMC1zaGFyZC0wMC0wMS5xZnNnaS5tb25nb2RiLm5ldDoyNzAxNyxjbHVzdGVyMC1zaGFyZC0wMC0wMi5xZnNnaS5tb25nb2RiLm5ldDoyNzAxNy9teUZpcnN0RGF0YWJhc2U/c3NsPXRydWUmcmVwbGljYVNldD1hdGxhcy1wOW9uNHEtc2hhcmQtMCZhdXRoU291cmNlPWFkbWluJnJldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSc7XHJcblxyXG4gICAgY29uc3QgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcblxyXG4gICAgICBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xyXG5cclxuICAgICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgICAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5pbnNlcnRPbmUoZGF0YSk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiAnTWVldHVwIGluc2VydGVkLicgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIGNsaWVudC5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICAvLyAgICcnXHJcbiAgICAvLyApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInVyaSIsImNsaWVudCIsImRhdGEiLCJib2R5IiwiY29ubmVjdCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZXJyIiwiY2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();