define(["require", "exports", "tslib", "react", "office-ui-fabric-react"], function (require, exports, tslib_1, React, office_ui_fabric_react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var exampleStyles = {
        root: [
            'OverlayExample-content',
            {
                background: 'blue',
                bottom: '0',
                color: 'white',
                left: '0',
                padding: '10px',
                position: 'absolute',
                right: '0'
            }
        ]
    };
    var OverlayLightExample = /** @class */ (function (_super) {
        tslib_1.__extends(OverlayLightExample, _super);
        function OverlayLightExample(props) {
            var _this = _super.call(this, props) || this;
            _this._setVisibilityFalse = function () {
                _this.setState({ isOverlayVisible: false });
            };
            _this._toggleOverlay = function () {
                _this.setState({ isOverlayVisible: !_this.state.isOverlayVisible });
            };
            _this.state = { isOverlayVisible: false };
            return _this;
        }
        OverlayLightExample.prototype.render = function () {
            var isOverlayVisible = this.state.isOverlayVisible;
            var getClassNames = office_ui_fabric_react_1.classNamesFunction();
            var classNames = getClassNames(exampleStyles, {});
            return (React.createElement("div", null,
                React.createElement(office_ui_fabric_react_1.DefaultButton, { onClick: this._toggleOverlay, text: "Show the overlay" }),
                isOverlayVisible && (React.createElement(office_ui_fabric_react_1.Overlay, { onClick: this._setVisibilityFalse },
                    React.createElement("div", { className: classNames.root },
                        React.createElement("p", null, "I am content within the overlay."))))));
        };
        return OverlayLightExample;
    }(React.Component));
    exports.OverlayLightExample = OverlayLightExample;
});
//# sourceMappingURL=Overlay.Light.Example.js.map