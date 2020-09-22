"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
function generateData(count, cachingEnabled, checked) {
    var icons = ['Add', 'Share', 'Upload'];
    var dataItems = [];
    var cacheKey = '';
    for (var index = 0; index < count; index++) {
        var item = {
            key: "item" + index,
            name: "Item " + index,
            icon: icons[index % icons.length],
            checked: checked
        };
        cacheKey = cacheKey + item.key;
        dataItems.push(item);
    }
    var result = {
        primary: dataItems,
        overflow: []
    };
    if (cachingEnabled) {
        result = tslib_1.__assign({}, result, { cacheKey: cacheKey });
    }
    return result;
}
// Styles for the vertical buttons
var buttonStyles = {
    root: {
        paddingBottom: 10,
        paddingTop: 10,
        width: 100
    }
};
// Styles for the container of the ResizeGroup
// This is only for the example to be constrained to a certain height to demonstrate the resizing
var exampleHeight = '40vh';
var resizeRootClassName = office_ui_fabric_react_1.mergeStyles({ height: exampleHeight });
var ResizeGroupVerticalOverflowSetExample = /** @class */ (function (_super) {
    tslib_1.__extends(ResizeGroupVerticalOverflowSetExample, _super);
    function ResizeGroupVerticalOverflowSetExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onReduceData = function (currentData) {
            if (currentData.primary.length === 0) {
                return undefined;
            }
            var overflow = currentData.primary.slice(-1).concat(currentData.overflow);
            var primary = currentData.primary.slice(0, -1);
            return { primary: primary, overflow: overflow, undefined: undefined };
        };
        return _this;
    }
    ResizeGroupVerticalOverflowSetExample.prototype.render = function () {
        var dataToRender = generateData(20, false, false);
        return (React.createElement(office_ui_fabric_react_1.ResizeGroup, { className: resizeRootClassName, role: "tabpanel", "aria-label": "Vertical Resize Group with an Overflow Set", direction: office_ui_fabric_react_1.ResizeGroupDirection.vertical, data: dataToRender, onReduceData: this._onReduceData, 
            // tslint:disable-next-line:jsx-no-lambda
            onRenderData: function (data) {
                return (React.createElement(office_ui_fabric_react_1.OverflowSet, { vertical: true, items: data.primary, overflowItems: data.overflow.length ? data.overflow : null, onRenderItem: function (item) {
                        return (React.createElement(office_ui_fabric_react_1.CommandBarButton, { text: item.name, iconProps: { iconName: item.icon }, onClick: item.onClick, checked: item.checked, styles: buttonStyles }));
                    }, onRenderOverflowButton: function (overflowItems) {
                        return (React.createElement(office_ui_fabric_react_1.CommandBarButton, { styles: buttonStyles, menuIconProps: { iconName: 'ChevronRight' }, menuProps: { items: overflowItems, directionalHint: office_ui_fabric_react_1.DirectionalHint.rightCenter } }));
                    } }));
            } }));
    };
    return ResizeGroupVerticalOverflowSetExample;
}(office_ui_fabric_react_1.BaseComponent));
exports.ResizeGroupVerticalOverflowSetExample = ResizeGroupVerticalOverflowSetExample;
//# sourceMappingURL=ResizeGroup.VerticalOverflowSet.Example.js.map