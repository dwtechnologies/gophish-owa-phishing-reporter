import * as React from 'react';
import { ISelection, SelectionMode } from 'office-ui-fabric-react/lib/Selection';
import { IExampleItem } from '@uifabric/example-data';
export interface ISelectionBasicExampleState {
    items: IExampleItem[];
    selection: ISelection;
    selectionMode: SelectionMode;
    canSelect: 'all' | 'vowels';
}
/**
 * The SelectionBasicExample controls the selection state of all items
 */
export declare class SelectionBasicExample extends React.Component<{}, ISelectionBasicExampleState> {
    private _hasMounted;
    constructor(props: {});
    componentDidMount(): void;
    render(): JSX.Element;
    private _alertItem;
    private _onSelectionChanged;
    private _onToggleSelectAll;
    private _onSelectionModeChanged;
    private _onCanSelectChanged;
    private _canSelectItem;
    private _getCommandItems;
}
