"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
//import specific action creators and add them to mapDispatchToProps
var actions_1 = require("../actions");
var taskList_1 = require("../components/taskList");
;
var App = (function (_super) {
    tslib_1.__extends(App, _super);
    function App(p) {
        return _super.call(this, p) || this;
    }
    ;
    App.prototype.componentWillMount = function () {
        console.log("Mounting, value for name in apps reducer is: " + this.props.apps.name);
        console.log('About to call action creator');
        this.props.updateAppName('MSApp');
        this.props.loadImagesAndLabels();
    };
    App.prototype.render = function () {
        console.log("Rendering, value for name in apps reducer is: " + this.props.apps.name);
        return (React.createElement("div", { className: "App" },
            React.createElement("div", { className: "App-header" },
                React.createElement("h2", null, "React TypeScript Starter Project")),
            React.createElement("p", { className: "App-intro" },
                "To get started, edit ",
                React.createElement("code", null, "src/components/App.tsx"),
                " and save to reload. Username is ",
                this.props.apps.userid,
                ". Image list : ",
                this.props.apps.images,
                ". Labels: ",
                this.props.apps.labels,
                "."),
            React.createElement("div", null,
                React.createElement(taskList_1.default, null))));
    };
    ;
    return App;
}(React.Component));
;
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators({
        updateAppName: actions_1.updateAppName,
        loadImagesAndLabels: actions_1.loadImagesAndLabels,
    }, dispatch);
};
var mapStateToProps = function (state) {
    return {
        apps: state.apps
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App);
//# sourceMappingURL=App.js.map