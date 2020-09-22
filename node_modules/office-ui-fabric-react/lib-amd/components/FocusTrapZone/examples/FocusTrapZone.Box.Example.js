define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/FocusTrapZone", "office-ui-fabric-react/lib/Link", "office-ui-fabric-react/lib/Stack", "office-ui-fabric-react/lib/Text", "office-ui-fabric-react/lib/TextField", "office-ui-fabric-react/lib/Toggle"], function (require, exports, tslib_1, React, Button_1, FocusTrapZone_1, Link_1, Stack_1, Text_1, TextField_1, Toggle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
//# sourceMappingURL=FocusTrapZone.Box.Example.js.map