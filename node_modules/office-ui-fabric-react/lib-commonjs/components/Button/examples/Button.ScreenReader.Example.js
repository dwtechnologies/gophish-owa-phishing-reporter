"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
exports.ButtonScreenReaderExample = function (props) {
    var disabled = props.disabled, checked = props.checked;
    return (React.createElement(office_ui_fabric_react_1.PrimaryButton, { ariaDescription: "Detailed description used for screen reader.", disabled: disabled, checked: checked }, "Button with Aria Description"));
};
//# sourceMappingURL=Button.ScreenReader.Example.js.map