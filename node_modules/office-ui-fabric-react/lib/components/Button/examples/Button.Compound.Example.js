import * as React from 'react';
import { CompoundButton, Stack } from 'office-ui-fabric-react';
// Example formatting
var stackTokens = { childrenGap: 40 };
export var ButtonCompoundExample = function (props) {
    var disabled = props.disabled, checked = props.checked;
    return (React.createElement(Stack, { horizontal: true, tokens: stackTokens },
        React.createElement(CompoundButton, { secondaryText: "This is the secondary text.", disabled: disabled, checked: checked }, "Standard"),
        React.createElement(CompoundButton, { primary: true, secondaryText: "This is the secondary text.", disabled: disabled, checked: checked }, "Primary")));
};
//# sourceMappingURL=Button.Compound.Example.js.map