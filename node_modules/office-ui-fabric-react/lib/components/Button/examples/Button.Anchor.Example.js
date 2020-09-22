import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react';
export var ButtonAnchorExample = function (props) {
    var disabled = props.disabled, checked = props.checked;
    // The href causes this button to be rendered as an anchor.
    return (React.createElement(DefaultButton, { href: "http://bing.com", target: "_blank", title: "let us bing!", disabled: disabled, checked: checked }, "Bing"));
};
//# sourceMappingURL=Button.Anchor.Example.js.map