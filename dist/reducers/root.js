"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var AppsReducer_1 = require("./AppsReducer");
var redux_observable_1 = require("redux-observable");
exports.rootReducer = redux_1.combineReducers({
    apps: AppsReducer_1.default,
});
var loadImagesAndLabels = function (action$) {
    return action$.ofType('LOAD_IMAGES_AND_LABELS')
        .map(function (_) { return ({
        type: 'GOT_IMAGES_AND_LABELS',
        images: ['foo'],
        labels: ['bar']
    }); });
};
exports.middleware = redux_1.applyMiddleware(redux_observable_1.createEpicMiddleware(redux_observable_1.combineEpics(loadImagesAndLabels)));
//# sourceMappingURL=root.js.map