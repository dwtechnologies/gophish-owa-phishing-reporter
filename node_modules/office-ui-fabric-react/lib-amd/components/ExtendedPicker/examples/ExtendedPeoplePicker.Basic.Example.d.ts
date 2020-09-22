import * as React from 'react';
import { IPersonaProps } from 'office-ui-fabric-react/lib/Persona';
export interface IPeoplePickerExampleState {
    peopleList: IPersonaProps[];
    mostRecentlyUsed: IPersonaProps[];
    searchMoreAvailable: boolean;
}
export declare class ExtendedPeoplePickerBasicExample extends React.Component<{}, IPeoplePickerExampleState> {
    private _picker;
    private _floatingPickerProps;
    private _selectedItemsListProps;
    private _focusZoneProps;
    private _suggestionProps;
    private _classNames;
    constructor(props: {});
    render(): JSX.Element;
    private _renderExtendedPicker;
    private _renderHeader;
    private _getEditingItemText;
    private _onSetFocusButtonClicked;
    private _onExpandItem;
    private _onRemoveSuggestion;
    private _onFilterChanged;
    private _returnMostRecentlyUsed;
    private _onCopyItems;
    private _shouldShowForceResolve;
    private _shouldShowSuggestedContacts;
    private _listContainsPersona;
    private _removeDuplicates;
    private _onInputChanged;
    private _convertResultsToPromise;
    private _validateInput;
    private _getExpandedGroupItems;
}
