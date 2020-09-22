import * as React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react';
export var ButtonScreenReaderExample = function (props) {
    var disabled = props.disabled, checked = props.checked;
    return (React.createElement(PrimaryButton, { ariaDescription: "Detailed description used for screen reader.", disabled: disabled, checked: checked }, "Button with Aria Description"));
};
//# sourceMappingURL=Button.ScreenReader.Example.js.map