"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var initialState = {
    name: '',
    userid: 't-majaya@microsoft.com',
    task: 'acne'
};
exports.default = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'UPDATE_APP_NAME':
            console.log('updated name');
            return tslib_1.__assign({}, state, { name: action.name });
        default:
            return state;
    }
};
//# sourceMappingURL=AppsReducer.js.map