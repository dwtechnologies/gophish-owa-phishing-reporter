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
var _focusClassName = 'shouldFocusInput';
var FocusTrapZoneBoxCustomElementExample = /** @class */ (function (_super) {
    tslib_1.__extends(FocusTrapZoneBoxCustomElementExample, _super);
    function FocusTrapZoneBoxCustomElementExample() {
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
    FocusTrapZoneBoxCustomElementExample.prototype.render = function () {
        var useTrapZone = this.state.useTrapZone;
        return (React.createElement(Stack_1.Stack, { tokens: { childrenGap: 8 } },
            React.createElement(Stack_1.Stack.Item, null,
                React.createElement(Text_1.Text, null, "If this button is used to enable FocusTrapZone, the hyperlink should be focused.")),
            React.createElement(Stack_1.Stack.Item, null,
                React.createElement(Button_1.DefaultButton, { onClick: this._onButtonClickHandler, text: "Focus Custom Element" })),
            React.createElement(FocusTrapZone_1.FocusTrapZone, { disabled: !useTrapZone, firstFocusableSelector: _focusClassName },
                React.createElement(Stack_1.Stack, { horizontalAlign: "start", tokens: { childrenGap: 15 }, styles: {
                        root: { border: "2px solid " + (useTrapZone ? '#ababab' : 'transparent'), padding: 10 }
                    } },
                    React.createElement(Toggle_1.Toggle, { label: "Use trap zone", componentRef: this._toggle, checked: useTrapZone, onChange: this._onFocusTrapZoneToggleChanged, onText: "On (toggle to exit)", offText: "Off" }),
                    React.createElement(TextField_1.TextField, { label: "Input inside trap zone", styles: { root: { width: 300 } } }),
                    React.createElement(Link_1.Link, { href: "https://bing.com", className: _focusClassName, target: "_blank" }, "Hyperlink which will receive initial focus when trap zone is activated")))));
    };
    return FocusTrapZoneBoxCustomElementExample;
}(React.Component));
exports.FocusTrapZoneBoxCustomElementExample = FocusTrapZoneBoxCustomElementExample;
//# sourceMappingURL=FocusTrapZone.Box.FocusOnCustomElement.Example.js.map