"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
exports.ButtonAnchorExample = function (props) {
    var disabled = props.disabled, checked = props.checked;
    // The href causes this button to be rendered as an anchor.
    return (React.createElement(office_ui_fabric_react_1.DefaultButton, { href: "http://bing.com", target: "_blank", title: "let us bing!", disabled: disabled, checked: checked }, "Bing"));
};
//# sourceMappingURL=Button.Anchor.Example.js.map