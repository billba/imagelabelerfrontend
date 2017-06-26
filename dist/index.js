"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var App_1 = require("./containers/App");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var root_1 = require("./reducers/root");
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: redux_1.createStore(root_1.rootReducer, root_1.middleware) },
    React.createElement(App_1.default, null)), document.getElementById('root'));
//# sourceMappingURL=index.js.map