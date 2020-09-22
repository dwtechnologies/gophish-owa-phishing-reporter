import * as React from 'react';
import { IGroup } from 'office-ui-fabric-react';
export interface IDetailsListGroupedExampleItem {
    key: string;
    name: string;
    color: string;
}
export interface IDetailsListGroupedExampleState {
    items: IDetailsListGroupedExampleItem[];
    groups: IGroup[];
    showItemIndexInView: boolean;
    isCompactMode: boolean;
}
export declare class DetailsListGroupedExample extends React.Component<{}, IDetailsListGroupedExampleState> {
    private _root;
    private _columns;
    constructor(props: {});
    componentWillUnmount(): void;
    render(): JSX.Element;
    private _addItem;
    private _onRenderDetailsHeader;
    private _onRenderColumn;
    private _onShowItemIndexInViewChanged;
    private _onChangeCompactMode;
}
