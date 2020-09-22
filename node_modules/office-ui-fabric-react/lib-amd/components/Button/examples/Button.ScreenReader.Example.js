define(["require", "exports", "react", "office-ui-fabric-react"], function (require, exports, React, office_ui_fabric_react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ButtonScreenReaderExample = function (props) {
        var disabled = props.disabled, checked = props.checked;
        return (React.createElement(office_ui_fabric_react_1.PrimaryButton, { ariaDescription: "Detailed description used for screen reader.", disabled: disabled, checked: checked }, "Button with Aria Description"));
    };
});
//# sourceMappingURL=Button.ScreenReader.Example.js.map