"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
var volume0Icon = { iconName: 'Volume0' };
var volume3Icon = { iconName: 'Volume3' };
exports.ButtonToggleExample = function (props) {
    var disabled = props.disabled, checked = props.checked;
    var _a = React.useState(false), muted = _a[0], setMuted = _a[1];
    var onClick = function () { return setMuted(!muted); };
    return (React.createElement(office_ui_fabric_react_1.DefaultButton, { toggle: true, checked: muted || checked, text: muted ? 'Volume muted' : 'Volume unmuted', iconProps: muted ? volume0Icon : volume3Icon, onClick: onClick, allowDisabledFocus: true, disabled: disabled }));
};
//# sourceMappingURL=Button.Toggle.Example.js.map