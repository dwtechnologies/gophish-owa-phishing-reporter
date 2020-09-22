define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/FocusTrapZone", "office-ui-fabric-react/lib/Link", "office-ui-fabric-react/lib/TextField", "office-ui-fabric-react/lib/Toggle", "office-ui-fabric-react/lib/Stack"], function (require, exports, tslib_1, React, FocusTrapZone_1, Link_1, TextField_1, Toggle_1, Stack_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FocusTrapZoneBoxClickExample = /** @class */ (function (_super) {
        tslib_1.__extends(FocusTrapZoneBoxClickExample, _super);
        function FocusTrapZoneBoxClickExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = { useTrapZone: false };
            _this._toggle = React.createRef();
            _this._onFocusTrapZoneToggleChanged = function (ev, checked) {
                _this.setState({ useTrapZone: !!checked });
            };
            return _this;
        }
        FocusTrapZoneBoxClickExample.prototype.render = function () {
            var useTrapZone = this.state.useTrapZone;
            return (React.createElement(FocusTrapZone_1.FocusTrapZone, { disabled: !useTrapZone, isClickableOutsideFocusTrap: true, forceFocusInsideTrap: false },
                React.createElement(Stack_1.Stack, { horizontalAlign: "start", tokens: { childrenGap: 15 }, styles: {
                        root: { border: "2px dashed " + (useTrapZone ? '#ababab' : 'transparent'), padding: 10 }
                    } },
                    React.createElement(Toggle_1.Toggle, { label: "Use trap zone", componentRef: this._toggle, checked: useTrapZone, onChange: this._onFocusTrapZoneToggleChanged, onText: "On (toggle to exit)", offText: "Off" }),
                    React.createElement(TextField_1.TextField, { label: "Input inside trap zone", styles: { root: { width: 300 } } }),
                    React.createElement(Link_1.Link, { href: "https://bing.com", target: "_blank" }, "Hyperlink inside trap zone"))));
        };
        return FocusTrapZoneBoxClickExample;
    }(React.Component));
    exports.FocusTrapZoneBoxClickExample = FocusTrapZoneBoxClickExample;
});
//# sourceMappingURL=FocusTrapZone.Box.Click.Example.js.map