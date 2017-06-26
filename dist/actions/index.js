"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ROOT_URL = 'image-labeler-api.azurewebsites.net';
exports.updateAppName = function (text) { return ({
    type: 'UPDATE_APP_NAME',
    name: text
}); };
exports.loadImagesAndLabels = function () { return ({
    type: 'LOAD_IMAGES_AND_LABELS'
}); };
//create and export methods ('action creators') that will return ActionObject types 
//# sourceMappingURL=index.js.map