define(["require", "exports", "react", "../examples/ExtendedPeoplePicker.Basic.Example", "../examples/ExtendedPeoplePicker.Controlled.Example"], function (require, exports, React, ExtendedPeoplePicker_Basic_Example_1, ExtendedPeoplePicker_Controlled_Example_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ExtendedPeoplePickerBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ExtendedPicker/examples/ExtendedPeoplePicker.Basic.Example.tsx');
    var ExtendedPeoplePickerBasicExampleCodepen = require('!@uifabric/codepen-loader!office-ui-fabric-react/src/components/ExtendedPicker/examples/ExtendedPeoplePicker.Basic.Example.tsx');
    var ExtendedPeoplePickerControlledExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/ExtendedPicker/examples/ExtendedPeoplePicker.Controlled.Example.tsx');
    var ExtendedPeoplePickerControlledExampleCodepen = require('!@uifabric/codepen-loader!office-ui-fabric-react/src/components/ExtendedPicker/examples/ExtendedPeoplePicker.Controlled.Example.tsx');
    exports.ExtendedPeoplePickerPageProps = {
        title: 'ExtendedPeoplePicker',
        componentName: 'ExtendedPeoplePicker',
        componentUrl: 'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components/ExtendedPicker/PeoplePicker',
        examples: [
            {
                title: 'Extended People Picker (uncontrolled)',
                code: ExtendedPeoplePickerBasicExampleCode,
                codepenJS: ExtendedPeoplePickerBasicExampleCodepen,
                view: React.createElement(ExtendedPeoplePicker_Basic_Example_1.ExtendedPeoplePickerBasicExample, null)
            },
            {
                title: 'Extended People Picker (controlled)',
                code: ExtendedPeoplePickerControlledExampleCode,
                codepenJS: ExtendedPeoplePickerControlledExampleCodepen,
                view: React.createElement(ExtendedPeoplePicker_Controlled_Example_1.ExtendedPeoplePickerControlledExample, null)
            }
        ],
        overview: require('!raw-loader!office-ui-fabric-react/src/components/ExtendedPicker/docs/ExtendedPeoplePickerOverview.md'),
        bestPractices: require('!raw-loader!office-ui-fabric-react/src/components/ExtendedPicker/docs/ExtendedPeoplePickerBestPractices.md'),
        dos: require('!raw-loader!office-ui-fabric-react/src/components/ExtendedPicker/docs/ExtendedPeoplePickerDos.md'),
        donts: require('!raw-loader!office-ui-fabric-react/src/components/ExtendedPicker/docs/ExtendedPeoplePickerDonts.md'),
        isHeaderVisible: true,
        isFeedbackVisible: true
    };
});
//# sourceMappingURL=ExtendedPeoplePicker.doc.js.map