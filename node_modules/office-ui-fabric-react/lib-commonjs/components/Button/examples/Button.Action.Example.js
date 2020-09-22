"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
var addFriendIcon = { iconName: 'AddFriend' };
exports.ButtonActionExample = function (props) {
    var disabled = props.disabled, checked = props.checked;
    return (React.createElement(office_ui_fabric_react_1.ActionButton, { iconProps: addFriendIcon, allowDisabledFocus: true, disabled: disabled, checked: checked }, "Create account"));
};
//# sourceMappingURL=Button.Action.Example.js.map