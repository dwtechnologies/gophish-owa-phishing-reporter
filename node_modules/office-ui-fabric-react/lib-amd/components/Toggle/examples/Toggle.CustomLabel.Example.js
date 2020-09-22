define(["require", "exports", "react", "office-ui-fabric-react/lib/Toggle", "office-ui-fabric-react/lib/Icon", "office-ui-fabric-react/lib/Stack", "office-ui-fabric-react/lib/Tooltip"], function (require, exports, React, Toggle_1, Icon_1, Stack_1, Tooltip_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stackTokens = { childrenGap: 10 };
    exports.ToggleCustomLabelExample = function () {
        return (React.createElement(Stack_1.Stack, { tokens: stackTokens },
            React.createElement(Toggle_1.Toggle, { label: React.createElement("div", null,
                    "Custom label",
                    ' ',
                    React.createElement(Tooltip_1.TooltipHost, { content: "Info tooltip" },
                        React.createElement(Icon_1.Icon, { iconName: "Info", "aria-label": "Info tooltip" }))), onText: "On", offText: "Off", onChange: _onChange }),
            React.createElement(Toggle_1.Toggle, { label: React.createElement("div", null,
                    "Custom inline label",
                    ' ',
                    React.createElement(Tooltip_1.TooltipHost, { content: "Info tooltip" },
                        React.createElement(Icon_1.Icon, { iconName: "Info", "aria-label": "Info tooltip" }))), inlineLabel: true, onText: "On", offText: "Off", onChange: _onChange })));
    };
    function _onChange(ev, checked) {
        console.log('toggle is ' + (checked ? 'checked' : 'not checked'));
    }
});
//# sourceMappingURL=Toggle.CustomLabel.Example.js.map