import * as React from 'react';
export interface IFileExampleItem {
    key: string;
    name: string;
    modified: string;
    modifiedby: string;
    filesize: string;
}
export interface IAnnouncedBulkOperationsExampleState {
    items: IFileExampleItem[];
    numberOfItems: number;
}
export declare class AnnouncedBulkOperationsExample extends React.Component<{}, IAnnouncedBulkOperationsExampleState> {
    private _selection;
    private _dragDropEvents;
    private _draggedItem;
    private _draggedIndex;
    constructor(props: {});
    render(): JSX.Element;
    private _renderAnnounced;
    private _getDragDropEvents;
    private _onItemInvoked;
    private _onRenderItemColumn;
    private _insertBeforeItem;
}
