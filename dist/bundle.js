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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SeeLater_1 = __webpack_require__(1);
var sl = new SeeLater_1.SeeLater();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var modal_controller_1 = __webpack_require__(2);
var SeeLater = /** @class */ (function () {
    function SeeLater(serverService) {
        var _this = this;
        this.seeLaterElement = this.constructElement();
        this.serverService = serverService;
        this.seeLaterElement.addEventListener('click', function () { return _this.handleClick(); });
    }
    SeeLater.prototype.constructElement = function () {
        var seeLater = document.createElement('div');
        seeLater.style.position = 'fixed';
        seeLater.style.top = '5%';
        seeLater.style.right = '5%';
        seeLater.innerHTML = 'Hello!';
        document.body.appendChild(seeLater);
        return seeLater;
    };
    SeeLater.prototype.handleClick = function () {
        this.seeLaterElement.appendChild(new modal_controller_1.ModalController('Added!', 5000).modal);
        // this.serverService.postBookmark() TODO:'PostBookmark staff'
    };
    SeeLater.prototype.getCurrentPosition = function () {
        var position = {};
        position.x = window.scrollX;
        position.y = window.scrollY;
        return position;
    };
    return SeeLater;
}());
exports.SeeLater = SeeLater;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ModalController = /** @class */ (function () {
    function ModalController(message, time) {
        if (time === void 0) { time = 3000; }
        var _this = this;
        this._modal = document.createElement('div');
        this._modal.innerHTML = message;
        setTimeout(function () { return _this.hide(); }, time);
    }
    Object.defineProperty(ModalController.prototype, "modal", {
        get: function () {
            return this._modal;
        },
        enumerable: true,
        configurable: true
    });
    ModalController.prototype.show = function () {
        this._modal.style.display = 'block';
    };
    ModalController.prototype.hide = function () {
        this._modal.remove();
    };
    return ModalController;
}());
exports.ModalController = ModalController;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2NmM2EwOTNjZTA4YTc0Njg3OWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2VlTGF0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGFsL21vZGFsLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBLHdDQUFzQztBQUV0QyxJQUFJLEVBQUUsR0FBYSxJQUFJLG1CQUFRLEVBQUUsQ0FBQzs7Ozs7Ozs7OztBQ0ZsQyxnREFBMkQ7QUFJM0Q7SUFLSSxrQkFBWSxhQUE0QjtRQUF4QyxpQkFLQztRQUhHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsY0FBTSxZQUFJLENBQUMsV0FBVyxFQUFFLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsbUNBQWdCLEdBQWhCO1FBRUksSUFBSSxRQUFRLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUQsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztRQUMxQixRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDNUIsUUFBUSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDOUIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRUQsOEJBQVcsR0FBWDtRQUVJLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksa0NBQWUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUUsOERBQThEO0lBQ2xFLENBQUM7SUFFRCxxQ0FBa0IsR0FBbEI7UUFDSSxJQUFNLFFBQVEsR0FBUSxFQUFFLENBQUM7UUFDekIsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzVCLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUM1QixNQUFNLENBQUMsUUFBcUIsQ0FBQztJQUVqQyxDQUFDO0lBRUwsZUFBQztBQUFELENBQUM7QUFyQ1ksNEJBQVE7Ozs7Ozs7Ozs7QUNKckI7SUFJSSx5QkFBWSxPQUFlLEVBQUUsSUFBbUI7UUFBbkIsa0NBQW1CO1FBQWhELGlCQUtDO1FBSEcsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUNoQyxVQUFVLENBQUMsY0FBTSxZQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxFQUFFLElBQUksQ0FBQztJQUN2QyxDQUFDO0lBRUQsc0JBQUksa0NBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBRUQsOEJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEMsQ0FBQztJQUVELDhCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUM7QUF0QlksMENBQWUiLCJmaWxlIjoiLi9kaXN0L2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDNjZjNhMDkzY2UwOGE3NDY4NzllIiwiaW1wb3J0IHsgU2VlTGF0ZXIgfSBmcm9tICcuL1NlZUxhdGVyJztcclxuXHJcbmxldCBzbDogU2VlTGF0ZXIgPSBuZXcgU2VlTGF0ZXIoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0LnRzIiwiaW1wb3J0IHsgTW9kYWxDb250cm9sbGVyIH0gZnJvbSAnLi9tb2RhbC9tb2RhbC5jb250cm9sbGVyJztcclxuaW1wb3J0IHsgU2VydmVyU2VydmljZSB9IGZyb20gJy4vU2VydmVyU2VydmljZSc7XHJcbmltcG9ydCB7IElQb3NpdGlvbiB9IGZyb20gJy4vSW50ZXJmYWNlcy9JUG9zaXRpb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlZUxhdGVyIHtcclxuXHJcbiAgICBzZWVMYXRlckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgc2VydmVyU2VydmljZTogU2VydmVyU2VydmljZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzZXJ2ZXJTZXJ2aWNlOiBTZXJ2ZXJTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2VlTGF0ZXJFbGVtZW50ID0gdGhpcy5jb25zdHJ1Y3RFbGVtZW50KCk7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJTZXJ2aWNlID0gc2VydmVyU2VydmljZTtcclxuICAgICAgICB0aGlzLnNlZUxhdGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuaGFuZGxlQ2xpY2soKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0RWxlbWVudCgpIHtcclxuXHJcbiAgICAgICAgbGV0IHNlZUxhdGVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNlZUxhdGVyLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICBzZWVMYXRlci5zdHlsZS50b3AgPSAnNSUnO1xyXG4gICAgICAgIHNlZUxhdGVyLnN0eWxlLnJpZ2h0ID0gJzUlJztcclxuICAgICAgICBzZWVMYXRlci5pbm5lckhUTUwgPSAnSGVsbG8hJztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlZUxhdGVyKTtcclxuICAgICAgICByZXR1cm4gc2VlTGF0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2soKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuc2VlTGF0ZXJFbGVtZW50LmFwcGVuZENoaWxkKG5ldyBNb2RhbENvbnRyb2xsZXIoJ0FkZGVkIScsIDUwMDApLm1vZGFsKTtcclxuICAgICAgICAvLyB0aGlzLnNlcnZlclNlcnZpY2UucG9zdEJvb2ttYXJrKCkgVE9ETzonUG9zdEJvb2ttYXJrIHN0YWZmJ1xyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJlbnRQb3NpdGlvbigpOiBJUG9zaXRpb24ge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uOiBhbnkgPSB7fTtcclxuICAgICAgICBwb3NpdGlvbi54ID0gd2luZG93LnNjcm9sbFg7XHJcbiAgICAgICAgcG9zaXRpb24ueSA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgICAgIHJldHVybiBwb3NpdGlvbiBhcyBJUG9zaXRpb247XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NlZUxhdGVyLnRzIiwiZXhwb3J0IGNsYXNzIE1vZGFsQ29udHJvbGxlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBfbW9kYWw6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgdGltZTogbnVtYmVyID0gMzAwMCkge1xyXG5cclxuICAgICAgICB0aGlzLl9tb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuX21vZGFsLmlubmVySFRNTCA9IG1lc3NhZ2U7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmhpZGUoKSwgdGltZSlcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW9kYWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGFsO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9tb2RhbC5yZW1vdmUoKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2RhbC9tb2RhbC5jb250cm9sbGVyLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==