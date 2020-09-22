import * as React from 'react';
import { IExampleItem } from '@uifabric/example-data';
import { IColumn } from 'office-ui-fabric-react/lib/index';
export interface IShimmerApplicationExampleState {
    items: IExampleItem[];
    columns?: IColumn[];
    isDataLoaded?: boolean;
}
export declare class ShimmerApplicationExample extends React.Component<{}, IShimmerApplicationExampleState> {
    private _lastIntervalId;
    private _lastIndexWithData;
    private _async;
    constructor(props: {});
    componentWillUnmount(): void;
    render(): JSX.Element;
    private _loadData;
    private _onLoadData;
    private _onRenderItemColumn;
    private _randomFileIcon;
}
