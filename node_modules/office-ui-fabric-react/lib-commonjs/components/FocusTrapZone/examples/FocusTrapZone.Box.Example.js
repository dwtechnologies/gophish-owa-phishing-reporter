"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var FocusTrapZone_1 = require("office-ui-fabric-react/lib/FocusTrapZone");
var Link_1 = require("office-ui-fabric-react/lib/Link");
var Stack_1 = require("office-ui-fabric-react/lib/Stack");
var Text_1 = require("office-ui-fabric-react/lib/Text");
var TextField_1 = require("office-ui-fabric-react/lib/TextField");
var Toggle_1 = require("office-ui-fabric-react/lib/Toggle");
var FocusTrapZoneBoxExample = /** @class */ (function (_super) {
    tslib_1.__extends(FocusTrapZoneBoxExample, _super);
    function FocusTrapZoneBoxExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            useTrapZone: false
        };
        _this._toggle = React.createRef();
        _this._onButtonClickHandler = function () {
            _this.setState({
                useTrapZone: true
            });
        };
        _this._onFocusTrapZoneToggleChanged = function (ev, checked) {
            _this.setState({ useTrapZone: !!checked });
        };
        return _this;
    }
    FocusTrapZoneBoxExample.prototype.render = function () {
        var useTrapZone = this.state.useTrapZone;
        return (React.createElement(Stack_1.Stack, { tokens: { childrenGap: 8 } },
            React.createElement(Stack_1.Stack.Item, null,
                React.createElement(Text_1.Text, null, "If this button is used to enable FocusTrapZone, focus should return to this button after the FocusTrapZone is disabled.")),
            React.createElement(Stack_1.Stack.Item, null,
                React.createElement(Button_1.DefaultButton, { onClick: this._onButtonClickHandler, text: "Trap Focus" })),
            React.createElement(FocusTrapZone_1.FocusTrapZone, { disabled: !useTrapZone },
                React.createElement(Stack_1.Stack, { horizontalAlign: "start", tokens: { childrenGap: 15 }, styles: {
                        root: { border: "2px solid " + (useTrapZone ? '#ababab' : 'transparent'), padding: 10 }
                    } },
                    React.createElement(Toggle_1.Toggle, { label: "Use trap zone", componentRef: this._toggle, checked: useTrapZone, onChange: this._onFocusTrapZoneToggleChanged, onText: "On (toggle to exit)", offText: "Off" }),
                    React.createElement(TextField_1.TextField, { label: "Input inside trap zone", styles: { root: { width: 300 } } }),
                    React.createElement(Link_1.Link, { href: "https://bing.com", target: "_blank" }, "Hyperlink inside trap zone")))));
    };
    return FocusTrapZoneBoxExample;
}(React.Component));
exports.FocusTrapZoneBoxExample = FocusTrapZoneBoxExample;
//# sourceMappingURL=FocusTrapZone.Box.Example.js.map