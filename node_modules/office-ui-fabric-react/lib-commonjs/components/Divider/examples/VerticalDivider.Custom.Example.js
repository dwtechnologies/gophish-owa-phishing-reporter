"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Divider_1 = require("office-ui-fabric-react/lib/Divider");
var Styling_1 = require("office-ui-fabric-react/lib/Styling");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var getExampleClassNames = Utilities_1.memoizeFunction(function () {
    var exampleHeight = 40;
    return Styling_1.mergeStyleSets({
        wrapper: {
            height: 40,
            backgroundColor: '#F4F4F4',
            padding: '0'
        },
        text: {
            display: 'inline-block',
            padding: '0 8px',
            height: exampleHeight,
            lineHeight: exampleHeight,
            verticalAlign: 'top',
            margin: 'auto'
        }
    });
});
var VerticalDividerCustomExample = /** @class */ (function (_super) {
    tslib_1.__extends(VerticalDividerCustomExample, _super);
    function VerticalDividerCustomExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VerticalDividerCustomExample.prototype.render = function () {
        var exampleClassNames = getExampleClassNames();
        return (React.createElement("div", { className: exampleClassNames.wrapper },
            React.createElement("p", { className: exampleClassNames.text }, " Some text before the divider. "),
            React.createElement(Divider_1.VerticalDivider, { styles: {
                    wrapper: {
                        height: 40,
                        backgroundColor: '#F4F4F4',
                        padding: 0
                    },
                    divider: {
                        height: 28,
                        backgroundColor: 'pink'
                    }
                } }),
            React.createElement("p", { className: exampleClassNames.text }, "Some text after the divider. ")));
    };
    return VerticalDividerCustomExample;
}(React.Component));
exports.VerticalDividerCustomExample = VerticalDividerCustomExample;
//# sourceMappingURL=VerticalDivider.Custom.Example.js.map