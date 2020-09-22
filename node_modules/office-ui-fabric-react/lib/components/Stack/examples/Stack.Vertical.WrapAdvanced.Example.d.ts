import * as React from 'react';
import { IStackProps } from 'office-ui-fabric-react/lib/Stack';
export declare type Overflow = 'visible' | 'auto' | 'hidden';
export interface IExampleOptions {
    stackWidth: number;
    containerHeight: number;
    horizontalAlignment: IStackProps['horizontalAlign'];
    verticalAlignment: IStackProps['verticalAlign'];
    overflow: Overflow;
}
export declare class VerticalStackWrapAdvancedExample extends React.Component<{}, IExampleOptions> {
    state: IExampleOptions;
    private _horizontalAlignmentOptions;
    private _verticalAlignmentOptions;
    private _overflowOptions;
    render(): JSX.Element;
    private _onWidthChange;
    private _onHeightChange;
    private _onHorizontalAlignChange;
    private _onVerticalAlignChange;
    private _onOverflowChange;
}
