import * as React from 'react';
export interface ITagPickerDemoPageState {
    isPickerDisabled?: boolean;
}
export declare class TagPickerBasicExample extends React.Component<{}, ITagPickerDemoPageState> {
    private _picker;
    constructor(props: {});
    render(): JSX.Element;
    private _getTextFromItem;
    private _onDisabledButtonClick;
    private _onFilterChanged;
    private _onFilterChangedNoFilter;
    private _onItemSelected;
    private _listContainsDocument;
}
