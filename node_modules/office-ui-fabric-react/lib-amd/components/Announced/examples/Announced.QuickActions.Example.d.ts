import * as React from 'react';
export interface IAnnouncedQuickActionsExampleItem {
    key: number;
    name: string;
    modified: string;
    modifiedby: string;
    filesize: string;
}
export interface IAnnouncedQuickActionsExampleState {
    items: IAnnouncedQuickActionsExampleItem[];
    selectionDetails: {};
    renameDialogOpen: boolean;
    dialogContent: JSX.Element | undefined;
    announced?: JSX.Element;
}
export declare class AnnouncedQuickActionsExample extends React.Component<{}, IAnnouncedQuickActionsExampleState> {
    private _selection;
    private _detailsList;
    private _textField;
    private _async;
    constructor(props: {});
    componentDidUpdate(prevState: IAnnouncedQuickActionsExampleState): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private _onRenderRow;
    private _onRenderItemColumn;
    private _renderAnnounced;
    private _deleteItem;
    private _renameItem;
    private _updateItemName;
    private _closeRenameDialog;
    private _getSelectionDetails;
}
