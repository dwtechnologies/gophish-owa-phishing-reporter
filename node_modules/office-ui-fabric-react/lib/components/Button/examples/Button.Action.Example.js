import * as React from 'react';
import { ActionButton } from 'office-ui-fabric-react';
var addFriendIcon = { iconName: 'AddFriend' };
export var ButtonActionExample = function (props) {
    var disabled = props.disabled, checked = props.checked;
    return (React.createElement(ActionButton, { iconProps: addFriendIcon, allowDisabledFocus: true, disabled: disabled, checked: checked }, "Create account"));
};
//# sourceMappingURL=Button.Action.Example.js.map