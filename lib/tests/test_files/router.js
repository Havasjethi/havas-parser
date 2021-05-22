"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
var class_decorator_1 = require("havas-express/lib/src/decorators/class_decorator");
var router_1 = require("havas-express/lib/src/router");
var method_decorator_1 = require("havas-express/lib/src/decorators/method_decorator");
var index_1 = require("havas-express/lib/index");
var UserRouter = /** @class */ (function (_super) {
    __extends(UserRouter, _super);
    function UserRouter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Some comment here
     */
    UserRouter.prototype.index = function (req, res) {
        throw new Error('Unimplemented');
    };
    UserRouter.prototype.get_all = function () {
        throw new Error('Unimplemented');
    };
    /**
     * Get's user by id
     */
    UserRouter.prototype.get_by_id = function (id) {
        throw new Error('');
    };
    __decorate([
        method_decorator_1.Get('/', function (req, res, next) { console.log('index called'); next(); })
    ], UserRouter.prototype, "index", null);
    __decorate([
        method_decorator_1.Get('/all', function (req, res, n) { console.log('get_all called'); n(); })
    ], UserRouter.prototype, "get_all", null);
    __decorate([
        method_decorator_1.Post('/:id'),
        __param(0, index_1.PathVariable('id'))
    ], UserRouter.prototype, "get_by_id", null);
    UserRouter = __decorate([
        class_decorator_1.Path('/user'),
        index_1.ResultWrapper(function (_a) {
            var result = _a.result, response = _a.response;
            response.send(result);
        })
    ], UserRouter);
    return UserRouter;
}(router_1.Router));
exports.UserRouter = UserRouter;
