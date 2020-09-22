import * as React from 'react';
import { IStackProps } from 'office-ui-fabric-react/lib/Stack';
export interface IExampleOptions {
    numItems: number;
    showBoxShadow: boolean;
    preventOverflow: boolean;
    disableShrink: boolean;
    wrap: boolean;
    stackHeight: number;
    autoHeight: boolean;
    childrenGap: number;
    paddingLeft: number;
    paddingRight: number;
    paddingTop: number;
    paddingBottom: number;
    verticalAlignment: IStackProps['verticalAlign'];
    horizontalAlignment: IStackProps['horizontalAlign'];
    hideEmptyChildren: boolean;
    emptyChildren: string[];
}
export declare class VerticalStackConfigureExample extends React.Component<{}, IExampleOptions> {
    state: IExampleOptions;
    private _verticalAlignmentOptions;
    private _horizontalAlignmentOptions;
    render(): JSX.Element;
    private _onNumItemsChange;
    private _onBoxShadowChange;
    private _onPreventOverflowChange;
    private _onShrinkItemsChange;
    private _onWrapChange;
    private _onStackHeightChange;
    private _onAutoHeightChange;
    private _onGapChange;
    private _onPaddingLeftChange;
    private _onPaddingRightChange;
    private _onPaddingTopChange;
    private _onPaddingBottomChange;
    private _onVerticalAlignChange;
    private _onHorizontalAlignChange;
    private _onHideEmptyChildrenChange;
    private _onEmptyChildrenChange;
}
