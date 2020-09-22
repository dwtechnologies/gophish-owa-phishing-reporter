import * as React from 'react';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { TooltipHost } from 'office-ui-fabric-react/lib/Tooltip';
var stackTokens = { childrenGap: 10 };
export var ToggleCustomLabelExample = function () {
    return (React.createElement(Stack, { tokens: stackTokens },
        React.createElement(Toggle, { label: React.createElement("div", null,
                "Custom label",
                ' ',
                React.createElement(TooltipHost, { content: "Info tooltip" },
                    React.createElement(Icon, { iconName: "Info", "aria-label": "Info tooltip" }))), onText: "On", offText: "Off", onChange: _onChange }),
        React.createElement(Toggle, { label: React.createElement("div", null,
                "Custom inline label",
                ' ',
                React.createElement(TooltipHost, { content: "Info tooltip" },
                    React.createElement(Icon, { iconName: "Info", "aria-label": "Info tooltip" }))), inlineLabel: true, onText: "On", offText: "Off", onChange: _onChange })));
};
function _onChange(ev, checked) {
    console.log('toggle is ' + (checked ? 'checked' : 'not checked'));
}
//# sourceMappingURL=Toggle.CustomLabel.Example.js.map