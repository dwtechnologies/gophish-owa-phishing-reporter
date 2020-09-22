import * as React from 'react';
import { IExampleItem } from '@uifabric/example-data';
import { IColumn } from 'office-ui-fabric-react/lib/DetailsList';
export interface IDetailsListCustomColumnsExampleState {
    sortedItems: IExampleItem[];
    columns: IColumn[];
}
export declare class DetailsListCustomColumnsExample extends React.Component<{}, IDetailsListCustomColumnsExampleState> {
    constructor(props: {});
    render(): JSX.Element;
    private _onColumnClick;
    private _onColumnHeaderContextMenu;
    private _onItemInvoked;
}
