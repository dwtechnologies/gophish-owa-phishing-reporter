import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react';
var volume0Icon = { iconName: 'Volume0' };
var volume3Icon = { iconName: 'Volume3' };
export var ButtonToggleExample = function (props) {
    var disabled = props.disabled, checked = props.checked;
    var _a = React.useState(false), muted = _a[0], setMuted = _a[1];
    var onClick = function () { return setMuted(!muted); };
    return (React.createElement(DefaultButton, { toggle: true, checked: muted || checked, text: muted ? 'Volume muted' : 'Volume unmuted', iconProps: muted ? volume0Icon : volume3Icon, onClick: onClick, allowDisabledFocus: true, disabled: disabled }));
};
//# sourceMappingURL=Button.Toggle.Example.js.map