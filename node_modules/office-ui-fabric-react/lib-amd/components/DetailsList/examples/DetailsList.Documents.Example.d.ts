import * as React from 'react';
import { IColumn } from 'office-ui-fabric-react/lib/DetailsList';
export interface IDetailsListDocumentsExampleState {
    columns: IColumn[];
    items: IDocument[];
    selectionDetails: string;
    isModalSelection: boolean;
    isCompactMode: boolean;
    announcedMessage?: string;
}
export interface IDocument {
    key: string;
    name: string;
    value: string;
    iconName: string;
    fileType: string;
    modifiedBy: string;
    dateModified: string;
    dateModifiedValue: number;
    fileSize: string;
    fileSizeRaw: number;
}
export declare class DetailsListDocumentsExample extends React.Component<{}, IDetailsListDocumentsExampleState> {
    private _selection;
    private _allItems;
    constructor(props: {});
    render(): JSX.Element;
    componentDidUpdate(previousProps: any, previousState: IDetailsListDocumentsExampleState): void;
    private _getKey;
    private _onChangeCompactMode;
    private _onChangeModalSelection;
    private _onChangeText;
    private _onItemInvoked;
    private _getSelectionDetails;
    private _onColumnClick;
}
