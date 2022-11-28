"use strict";
exports.__esModule = true;
var React = require("react");
var Title_1 = require("../item/Title");
var react_router_dom_1 = require("react-router-dom");
function PrivateRoute(props) {
    var exact = props.exact, Component = props.component, isAuthenticated = props.isAuthenticated;
    if (isAuthenticated) {
        return (React.createElement(react_router_dom_1.Route, { exact: exact },
            React.createElement(Title_1["default"], null),
            React.createElement(Component, null)));
    }
    else {
        return (React.createElement(react_router_dom_1.Redirect, { to: process.env.PUBLIC_URL + '/' }));
    }
}
exports["default"] = PrivateRoute;
