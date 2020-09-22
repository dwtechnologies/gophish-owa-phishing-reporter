import * as React from 'react';
export interface IDetailsListAnimationExampleItem {
    key: number;
    name: string;
    value: number;
}
export interface IDetailsListAnimationExampleState {
    items: IDetailsListAnimationExampleItem[];
}
export declare class DetailsListAnimationExample extends React.Component<{}, IDetailsListAnimationExampleState> {
    private _allItems;
    private _columns;
    private _updateTimer;
    constructor(props: {});
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private _onItemInvoked;
    private _getValueKey;
    private _getCellValueKey;
}
