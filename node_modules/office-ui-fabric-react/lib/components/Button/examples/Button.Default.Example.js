import * as React from 'react';
import { DefaultButton, PrimaryButton, Stack } from 'office-ui-fabric-react';
// Example formatting
var stackTokens = { childrenGap: 40 };
export var ButtonDefaultExample = function (props) {
    var disabled = props.disabled, checked = props.checked;
    return (React.createElement(Stack, { horizontal: true, tokens: stackTokens },
        React.createElement(DefaultButton, { text: "Standard", onClick: _alertClicked, allowDisabledFocus: true, disabled: disabled, checked: checked }),
        React.createElement(PrimaryButton, { text: "Primary", onClick: _alertClicked, allowDisabledFocus: true, disabled: disabled, checked: checked })));
};
function _alertClicked() {
    alert('Clicked');
}
//# sourceMappingURL=Button.Default.Example.js.map